import re
from constants import SIZES, SERIES
from getFleaMarket import get_flea_market


def get_numbers_from_string(string):
    return [
        int(number)
        for number in re.findall("\d+", string)
    ]


def get_products():
    products = get_flea_market('애플워치 에르메스')

    for product in products:
        product_size = None
        product_series = None

        title = product['title']
        numbers_in_title = get_numbers_from_string(title)

        is_size_decided = False
        is_series_decided = False

        def extract_from_numbers(numbers):
            nonlocal is_size_decided
            nonlocal is_series_decided
            nonlocal product_size
            nonlocal product_series

            for number in numbers:
                if not is_size_decided:
                    if number in SIZES:
                        product_size = number
                        is_size_decided = True
                if not is_series_decided:
                    if number in SERIES:
                        product_series = number
                        is_series_decided = True

        extract_from_numbers(numbers_in_title)

        if not is_size_decided or not is_series_decided:
            content = product['content']
            numbers_in_content = get_numbers_from_string(content)
            extract_from_numbers(numbers_in_content)

        print(product_size, product_series)


if __name__ == '__main__':
    get_products()
