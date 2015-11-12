import unittest
import sys
sys.path.append("../src/models/")

from basemodel import BaseModel


import pdb

class TestBaseModel(unittest.TestCase):
    def test_is_int(self):
        self.assertEqual(BaseModel().is_int(3), 3,'Error: 3 is not recognized as a number from is_int')
        self.assertEqual(BaseModel().is_int(15.235232), 15.235232, 'Error: 15.235232 is not recognized as a number from is_int')
        self.assertEqual(BaseModel().is_int('hello'), 0, 'Error: string is being treated as a number')

    def test_is_truthy(self):
        self.assertTrue(BaseModel().is_truthy(True), 'Error: is_truthy(True) should return True')
        self.assertEqual(BaseModel().is_truthy(123), 0, 'Error: is_truthy(123) should return 0')




if __name__ == '__main__':
    unittest.main()
