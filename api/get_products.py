import json
from .get_articles import get_articles
from .get_product_information import get_product_information


def get_products(page: int = 1):
    articles = get_articles(page)

    products = []

    for article in articles:
        product_size, product_series = get_product_information(article)
        product_information = {
            'size': product_size,
            'series': product_series,
        }

        product = dict(article, **product_information)
        products.append(product)

    return products


if __name__ == '__main__':
    result = get_products()
    print(json.dumps(result, ensure_ascii=False))
