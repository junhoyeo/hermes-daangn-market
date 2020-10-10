from sanic import Sanic
from sanic.response import json

from .get_products import get_products

app = Sanic(name='hermes-daangn')


@app.route('/')
@app.route('/<page:int>')
async def index(request, page: int = 1):
    products = get_products(page)
    return json(products, ensure_ascii=False)
