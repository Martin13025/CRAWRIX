from flask import Flask, redirect, request, jsonify
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import ipaddress
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse

app = Flask(__name__)
CORS(
    app,
    origins=[
        "http://localhost:5173",
        "https://crawllab-frontend.onrender.com",
        "https://crawrix.com",
        "https://www.crawrix.com",
    ],
)

limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["10 per minute"], 
    storage_uri="memory://",
)


@app.route("/ping")
def ping():
    return "pong", 200


@app.before_request
def redirect_www_to_root():
    host = request.host
    if host.startswith("www."):
        url = request.url.replace("//www.", "//", 1)
        return redirect(url, code=301)


def is_safe_url(url: str) -> bool:
    try:
        parsed = urlparse(url)
        if parsed.scheme not in ("http", "https"):
            return False
        hostname = parsed.hostname
        if not hostname:
            return False
        if hostname in ("localhost", "localhost.localdomain", "ip6-localhost"):
            return False
        try:
            ip = ipaddress.ip_address(hostname)
            if ip.is_private or ip.is_reserved or ip.is_loopback or ip.is_multicast:
                return False
        except ValueError:
            pass
        return True
    except Exception:
        return False


session = requests.Session()


def fetch_url_safe(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Referer": "https://bing.com/",
    }
    if not is_safe_url(url):
        return {"error": "Unsafe URL detected"}
    try:
        response = session.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        return response.text
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}


def parse_bing(keyword):
    url = f"https://www.bing.com/search?q={keyword}"
    html = fetch_url_safe(url)
    if isinstance(html, dict) and "error" in html:
        print(f"Error fetching Bing for '{keyword}': {html['error']}")
        return []
    soup = BeautifulSoup(html, "html.parser")
    links = soup.select("li.b_algo h2 a")
    full_links = []
    for link in links:
        href = link.get("href")
        if href and is_safe_url(href):
            full_links.append(href)
        if len(full_links) >= 15:
            break
    print(f"Keyword '{keyword}' - found {len(full_links)} links")
    return full_links


def parse_yahoo(keyword):
    url = f"https://search.yahoo.com/search?p={keyword}"
    html = fetch_url_safe(url)
    if isinstance(html, dict) and "error" in html:
        return []
    soup = BeautifulSoup(html, "html.parser")
    links = soup.select("h3.title a")
    full_links = []
    for link in links:
        href = link.get("href")
        if href and href.startswith("http") and is_safe_url(href):
            full_links.append(href)
        if len(full_links) >= 15:
            break
    return full_links


@app.route("/parse", methods=["POST"])
@limiter.limit("10 per minute")  # увеличил лимит и тут
def parse():
    keywords = request.json.get("keywords", [])
    if not isinstance(keywords, list):
        return jsonify({"error": "Keywords must be a list"}), 400
    if len(keywords) > 10:
        return jsonify({"error": "Keywords list must not exceed 10 keywords"}), 400
    aggressive_mode = request.json.get("aggressive_mode", False)
    results = []

    for keyword in keywords:
        if not isinstance(keyword, str) or len(keyword) > 50:
            return jsonify({"error": "Keywords must be strings not longer than 50 symbols"}), 400
        bing_links = parse_bing(keyword)
        yahoo_links = parse_yahoo(keyword) if aggressive_mode else []

        combined_links = list(set(bing_links + yahoo_links))[:15]

        results.append({"keyword": keyword, "links": combined_links})
    return jsonify(results)


if __name__ == "__main__":
    app.run(host="0.0.0.0")



