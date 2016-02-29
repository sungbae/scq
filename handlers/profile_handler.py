import tornado.web
from handlers.base_handler import BaseHandler
from models.course import Course
import logging


class ProfileHandler(BaseHandler):

    @tornado.web.authenticated
    def get(self):
        self.refresh_current_user_cookie()
        self.render('profile.html', user_info_json=self.get_user_info())

    def get_user_info(self):
        user_info_json = []
        user_data = self.current_user
        num_courses = len(user_data['courses'])
        for i in range(0, num_courses):
            (user_data['courses'])[i] = [(Course().get_item((user_data['courses'])[i])['course_name'])]
        user_info_json.append(user_data)
        logging.info(tornado.escape.json_encode(user_info_json))
        return tornado.escape.json_encode(user_info_json)
