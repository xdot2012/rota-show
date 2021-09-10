from django.test import TestCase
from accounts.models import User

class UserTestCase(TestCase):
    def setUp(self):
        User.objects.create(email="test_case_1@test.com", username="test_case_1", password="TEST123", is_superuser=True)
        User.objects.create(email="test_case_2@test.com", username="test_case_2", password="TEST123")

    def test_superusers(self):
        """Check for superusers"""
        user_1 = User.objects.get(username="test_case_1")
        user_2 = User.objects.get(username="test_case_2")
        self.assertEqual(user_1.is_superuser, True)
        self.assertEqual(user_2.is_superuser, False)
