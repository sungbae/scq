import tornado.web
import tornado.gen as gen
import json
import time
from models.response import Response
from models.survey import Survey
from models.user import User
import models.answer
from handlers.base_handler import BaseHandler

class Response(BaseHandler):
    def post(self):
        body = self.request.body.decode("utf-8")
        data = json.loads(body)
        Response().create_item(data)

class Surveys(BaseHandler):
    def post(self):
        body = self.request.body.decode("utf-8")
        data = json.loads(body)
        Survey().create_item(data)

    def get(self):
        user_data = self.current_user
        classes = user['courses']
        for course in courses:
            data += models.survey.Survey().find({'course': course,})
        self.write(json.dumps(data))
