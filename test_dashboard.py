# test_dashboard.py

import requests

token = "PASTE_YOUR_TOKEN_HERE"

headers = {
    "Authorization": f"Bearer {token}"
}

response = requests.get(
    "http://127.0.0.1:8000/dashboard",
    headers=headers
)

print(response.json())