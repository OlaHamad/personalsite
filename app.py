from flask import Flask, render_template

import random as random
app = Flask(__name__)



@app.route("/templates/main page.html")
def home():
	return render_template("main.html")



@app.route("/templates/index.html")
def homee():
	return render_template("index.html")


@app.route('/templates/hobbies.html')
def homeq():
	return render_template("hobbies.html")	





@app.route("/display/")
def hi():
	mylist = ["nour","ola","maisam","batool","ola"]
	display = False
	

	return render_template("display.html",display=display, list =mylist)





@app.route('/templates/contact.html')
def homeb():
	return render_template("contact.html")



if __name__ == "__main__":
	app.run()