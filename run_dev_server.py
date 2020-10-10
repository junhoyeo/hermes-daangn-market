from api.index import app
from sanic_cors import CORS

if __name__ == '__main__':
    CORS(app)
    app.run(host='0.0.0.0', port=8000, debug=True)
