import re
from constants import SIZES, SERIES


def get_numbers_from_string(string):
    return [
        int(number)
        for number in re.findall("\d+", string)
    ]


def get_product_information(article):
    product_size = None
    product_series = None

    title = article['title']
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
        content = article['content']
        numbers_in_content = get_numbers_from_string(content)
        extract_from_numbers(numbers_in_content)

    return (product_size, product_series)
