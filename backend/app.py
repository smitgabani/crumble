from flask import Flask, jsonify
from flask import request
from flask_cors import CORS, cross_origin
import os

from services.message_groups import *


app = Flask(__name__)
frontend = os.getenv('FRONTEND_URL') 
backend = os.getenv('BACKEND_URL')
origins = [frontend, backend]
cors = CORS(
  app, 
  resources={r"/api/*": {"origins": origins}},
  expose_headers="location,link",
  allow_headers="content-type,if-modified-since",
  methods="OPTIONS,GET,HEAD,POST"
)

@app.route("/", methods=['GET'])
def health_check():
    user_handle  = 'smitgabani'
    success = {
        'status': 'ok',
        'user_handle': user_handle,
    }
    return jsonify(success)

@app.route("/api/message_groups", methods=['GET'])
def data_message_groups():
  user_handle  = 'smitgabani'
  model = MessageGroups.run(user_handle=user_handle)
  if model['errors'] is not None:
    return model['errors'], 422
  else:
    return model['data'], 200


if __name__ == '__main__':
    app.run(debug=True, port=5000)