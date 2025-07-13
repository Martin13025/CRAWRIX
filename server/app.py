from flask import Flask, redirect, request, jsonify
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import ipaddress
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, parse_qs


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


def fetch_url_safe(url):
    if not is_safe_url(url):
        return {"error": "Unsafe URL detected"}
    headers = {"User-Agent": "Mozilla/5.0"}
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        return response.text
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}


def parse_duckduckgo(keyword, lang):
    url = (
        f"https://duckduckgo.com/html/?q={keyword}&kl={lang}-es"
        if lang == "es"
        else f"https://duckduckgo.com/html/?q={keyword}&kl={lang}-en"
    )
    html = fetch_url_safe(url)
    if isinstance(html, dict) and "error" in html:
        return html
    soup = BeautifulSoup(html, "html.parser")
    links = soup.find_all("a", class_="result__a")

    full_links = []
    for link in links:
        href = link.get("href")
        if href and href.startswith("//"):
            parsed_url = urlparse(href)
            query_params = parse_qs(parsed_url.query)
            if "uddg" in query_params:
                real_url = query_params["uddg"][0]
                if is_safe_url(real_url):
                    full_links.append(real_url)
        if len(full_links) >= 15:
            break
    return full_links


def parse_yahoo(keyword):
    url = f"https://search.yahoo.com/search?p={keyword}"
    html = fetch_url_safe(url)
    if isinstance(html, dict) and "error" in html:
        return html
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
@limiter.limit("5 per minute")
def parse():
    keywords = request.json.get("keywords", [])
    if not isinstance(keywords, list):
        return (
            jsonify({"error": "Keywords must be a list"}),
            400,
        )
    if len(keywords) > 10:
        return (
            jsonify({"error": "Keywordslist must not exceed 10 keywords"}),
            400,
        )
    lang = request.json.get("lang", "es")
    aggressive_mode = request.json.get("aggressive_mode", False)
    results = []

    for keyword in keywords:
        if not isinstance(keyword, str) or len(keyword) > 50:
            return jsonify({"error": "Keywords are string and not longer 50 symbols"})
        duckduckgo_links = parse_duckduckgo(keyword, lang)
        yahoo_links = parse_yahoo(keyword) if aggressive_mode else []

        combined_links = list(set(duckduckgo_links + yahoo_links))[:15]

        results.append({"keyword": keyword, "links": combined_links})
    return jsonify(results)


if __name__ == "__main__":
    app.run(host="0.0.0.0")
