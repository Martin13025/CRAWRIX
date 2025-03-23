from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, parse_qs, urlparse

app = Flask(__name__)

CORS(app, origins="http://localhost:5173")

@app.route('/parse', methods=['POST'])
def parse():
    keywords = request.json.get('keywords', [])
    lang = request.json.get('lang', 'es')
    results = []

    for keyword in keywords:
        url = f"https://duckduckgo.com/html/?q={keyword}&kl={lang}-es" if lang == 'es' else f"https://duckduckgo.com/html/?q={keyword}&kl={lang}-en"
        headers = {'User-Agent': 'Mozilla/5.0'}
        try:
            response = requests.get(url, headers=headers)
            response.raise_for_status()
            print("Response from DuckDuckGo:")
            print(response.text)
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

            print(f"Found for {keyword}: {len(full_links)}")  
            results.append({
                'keyword': keyword,
                'links': full_links
            })

        except requests.exceptions.RequestException as e:
            print(f"Error from request for {keyword}: {str(e)}")
            results.append({
                'keyword': keyword,
                'error': str(e)
            })

    return jsonify(results)


if __name__ == '__main__':
    app.run(debug=True)
