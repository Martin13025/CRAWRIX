from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, parse_qs


app = Flask(__name__)
CORS(app, origins=["http://localhost:5173", "https://crawllab-frontend.onrender.com", "https://crawrix.com", "https://www.crawrix.com"])

def parse_duckduckgo(keyword, lang):
    url = f"https://duckduckgo.com/html/?q={keyword}&kl={lang}-es" if lang == 'es' else f"https://duckduckgo.com/html/?q={keyword}&kl={lang}-en"
    headers = {'User-Agent': 'Mozilla/5.0'}
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        links = soup.find_all('a', class_='result__a')

        full_links = []
        for link in links:
            href = link.get('href')
            if href and href.startswith('//'):
                parsed_url = urlparse(href)
                query_params = parse_qs(parsed_url.query)
                if 'uddg' in query_params:
                    full_links.append(query_params['uddg'][0])
            if len(full_links) >= 15:
                break
        return full_links
    except requests.exceptions.RequestException as e:
        return {'error': str(e)}

def parse_yahoo(keyword):
    url = f"https://search.yahoo.com/search?p={keyword}"
    headers = {'User-Agent': 'Mozilla/5.0'}
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        links = soup.select('h3.title a')

        full_links = []
        for link in links:
            href = link.get('href')
            if href and href.startswith("http"):
                full_links.append(href)
            if len(full_links) >= 15:
                break
        return full_links
    except requests.exceptions.RequestException as e:
        return {'error': str(e)}

@app.route('/parse', methods=['POST'])
def parse():
    keywords = request.json.get('keywords', [])
    lang = request.json.get('lang', 'es')
    aggressive_mode = request.json.get('aggressive_mode', False)  
    results = []

    for keyword in keywords:
        duckduckgo_links = parse_duckduckgo(keyword, lang)
        yahoo_links = parse_yahoo(keyword) if aggressive_mode else []

        combined_links = list(set(duckduckgo_links + yahoo_links))[:15]

        results.append({
            'keyword': keyword,
            'links': combined_links
        })
    results = [
    {
        'keyword': 'тест',
        'links': ['https://duckduckgo.com']
    }
]
    return jsonify(results)

if __name__ == '__main__':
    app.run(host="0.0.0.0")
