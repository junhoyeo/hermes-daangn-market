from sanic import Sanic
from sanic.response import json

from .get_products import get_products

app = Sanic(name='hermes-daangn')


@app.route('/api')
async def index(request):
    page = 1
    if 'page' in request.args:
        try:
            page = int(request.args['page'])
        except:
            page = 1
    products = get_products(page)
    products['args'] = request.args
    return json(products, ensure_ascii=False)
