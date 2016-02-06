import tornado.web
import tornado.gen as gen
import json
import time
from models.response import Response
from models.survey import Survey
from models.user import User
import models.answer
from handlers.base_handler import BaseHandler

class ResponseHandler(BaseHandler):
    def post(self):
        body = self.request.body.decode("utf-8")
        data = json.loads(body)
        Response().create_item(data)
        self.write("success")

class SurveyHandler(BaseHandler):
    def post(self):
        body = self.request.body.decode("utf-8")
        data = json.loads(body)
        Survey().create_item(data)

    def get(self):
        user_data = self.get_current_user()
        if user_data is None:
            data = models.survey.Survey().get_all()
        else:
            courses = set(user_data['courses'] + user_data['courses_taught'])
            for course in courses:
                data += models.survey.Survey().find({'course': course,})
        self.write(json.dumps(data))
