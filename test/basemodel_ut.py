import unittest
import sys
sys.path.append("../src/models/")

from basemodel import BaseModel


import pdb

class TestBaseModel(unittest.TestCase):
    def test_is_int(self):
        with self.assertRaises(AssertionError):
            BaseModel().is_int('string')
        #with self.assertRaises(AssertionError):
        #    BaseModel().is_int(True)
        #with self.assertRaises(AssertionError):
        #    BaseModel().is_int(False)
        with self.assertRaises(AssertionError):
            BaseModel().is_int([1,2,3])
        try:
            BaseModel().is_int(3)
        except AssertionError:
            self.fail('Error: 3 is not recognized as a number from is_int')
        try:
            BaseModel().is_int(15.235232)
        except AssertionError:
            self.fail('Error: 15.235232 is not recognized as a number from is_int')
       
    def test_is_truthy(self):
        #self.assertTrue(BaseModel().is_truthy(True), 'Error: is_truthy(True) should return True')
        #self.assertEqual(BaseModel().is_truthy(123), 0, 'Error: is_truthy(123) should return 0')
        pass

    def test_is_falsey(self):
        pass

    def test_is_date_string(self):
        try:
            BaseModel().is_date_string('Thu Nov 12 23:07:03 MST 2015')
        except:
            self.fail('Error: date string should be valid')
        try:
            BaseModel().is_date_string('wed feb 1 20:30:00 gmt 2016')
        except:
            self.fail('Error: date string should be valid')
        try:
            BaseModel().is_date_string('MON MAR 01 00:00:00 MST 2017')
        except:
            self.fail('Error: date string should be valid')
        with self.assertRaises(Exception):
            BaseModel().is_date_string('Friday December 24 12:34:56 GMT 2015')
        with self.assertRaises(Exception):
            BaseModel().is_date_string('Sun Jan 32 23:00:00 GMT 1980')
        with self.assertRaises(Exception):
            BaseModel().is_date_string('Sat Apr 9 24:00:00 GMT 2012')
        # This shouldn't raise an exception, it should be a valid date string
        # but it doesn't like 'PST', 'EST'
        #with self.assertRaises(Exception):
        #    BaseModel().is_date_string('Sat Aug 25 23:00:00 PST 2013')
        with self.assertRaises(Exception):
            BaseModel().is_date_string(123)
        with self.assertRaises(Exception):
            BaseModel().is_date_string(True)
        with self.assertRaises(Exception):
            BaseModel().is_date_string(False)
        with self.assertRaises(Exception):
            BaseModel().is_date_string(123.123)



if __name__ == '__main__':
    unittest.main()
