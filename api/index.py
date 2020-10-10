from sanic import Sanic
from sanic.response import json

from .get_products import get_products

app = Sanic(name='hermes-daangn')


@app.route('/')
@app.route('/<path:path>')
async def index(request, path):
    # products = get_products(page)
    # return json(products, ensure_ascii=False)
    return json({'hello': path})
