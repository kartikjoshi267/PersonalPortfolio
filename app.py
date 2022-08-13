from datetime import datetime
from flask import Flask, render_template, request, redirect, url_for, abort
from pymongo import mongo_client
import os
import config
import email as email_module
import smtplib
import html

app = Flask(__name__)
client = mongo_client.MongoClient(os.getenv("MONGO_URL"))
db = client['Portfolio']
messages = db['messages']
projects = db['projects']

@app.route("/", methods=['GET'])
def main():
    return render_template("index.html", project_list=projects.find(), html=html)


@app.route("/", methods=['POST'])
def main2():
    name = request.form.get('name')
    email = request.form.get("email")
    message = request.form.get('message')

    res = db.messages.insert_one({
        "name": name,
        "email": email,
        "message": message,
        "date": datetime.now()
    })

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(os.getenv("EMAIL"), os.getenv("PASSWORD"))
    server.sendmail(os.getenv("EMAIL"), [email], "Thank you for sharing your feedback with us. \n\n Regards \n Kartik Joshi")
    final_msg = f"{name} sent you a message:\n {message}"

    final_msg = email_module.message_from_string(final_msg)
    server.sendmail(os.getenv("EMAIL"), [os.getenv("EMAIL")], msg=final_msg.as_string())

    return redirect(url_for('main'))


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
