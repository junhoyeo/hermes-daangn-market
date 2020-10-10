import requests
from bs4 import BeautifulSoup


def get_text_from_element(element):
    return element.text.strip()


def get_url_without_params(element):
    return element.attrs['src'].split('?')[0]


def get_articles(page: int = 1):
    query = '애플워치 에르메스'
    request_url = f'https://www.daangn.com/search/{query}/more/flea_market?page={page}'
    response = requests.get(request_url)

    html = BeautifulSoup(response.text, 'html.parser')
    articles = html.findAll('a', class_='flea-market-article-link')

    return [
        {
            'href': article.attrs['href'],
            'image': get_url_without_params(article.find('img')),
            'title': get_text_from_element(article.find('span', class_='article-title')),
            'content': get_text_from_element(article.find('span', class_='article-content')),
            'regionName': get_text_from_element(article.find('p', class_='article-region-name')),
            'price': get_text_from_element(article.find('p', class_='article-price')),
        }
        for article in articles
    ]
