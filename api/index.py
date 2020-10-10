from sanic import Sanic
from sanic.response import json

app = Sanic(name='hermes-daangn')


@app.route('/')
@app.route('/<page:int>')
async def index(request, page: int = 0):
    return json({'hello': page})
