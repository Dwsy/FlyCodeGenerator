import os
from sparkdesk_api.core import SparkAPI
import json

with open(os.path.abspath("./sparkconfig.json"), "r") as f:
    config = json.load(f)

APISecret = config["APISecret"]
APIKey = config["APIKey"]
APPID = config["APPID"]
# 默认api接口版本为3.1，配置其他版本需要指定Version参数（2.1或者1.1）
sparkAPI = SparkAPI(
    app_id=APPID,
    api_secret=APISecret,
    api_key=APIKey,
    # version=2.1
)

print(sparkAPI.my__get_authorization_url())
# # single chat
# print(sparkAPI.chat("repeat: hello world"))
# # continue chat
# sparkAPI.chat_stream()
