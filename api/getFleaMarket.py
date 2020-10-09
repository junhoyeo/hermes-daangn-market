import requests
from pprint import pprint
from bs4 import BeautifulSoup


def get_text_from_element(element):
    return element.text.strip()


def get_url_without_params(element):
    return element.attrs['src'].split('?')[0]


def get_flea_market(query: str):
    request_url = f'https://www.daangn.com/search/{query}'
    response = requests.get(request_url)

    html = BeautifulSoup(response.text, 'html.parser')
    articles = html.findAll('a', class_='flea-market-article-link')

    return [
        {
            'image': get_url_without_params(article.find('img')),
            'title': get_text_from_element(article.find('span', class_='article-title')),
            'content': get_text_from_element(article.find('span', class_='article-content')),
            'regionName': get_text_from_element(article.find('p', class_='article-region-name')),
            'price': get_text_from_element(article.find('p', class_='article-price')),
        }
        for article in articles
    ]


if __name__ == '__main__':
    pprint(get_flea_market('애플워치 에르메스'))
