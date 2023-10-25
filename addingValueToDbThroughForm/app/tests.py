import json

from django.test import TestCase, Client
from django.urls import reverse
from django.conf import settings

class TestSample(TestCase):
    def test_createView_Get(self):
        url = reverse("success_url")
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
    def test_createView_Post(self):
        data={"Name":'can','Address':'can st','MobileNumber':786874}
        response=self.client.post(reverse("register_url"),data)
        self.assertEqual(response.status_code, 200)
