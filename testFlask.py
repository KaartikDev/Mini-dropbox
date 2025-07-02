from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    testHTML = " <html><head><title>Page Title</title></head><body><h1>This is a Heading</h1><p>This is a paragraph.</p></body></html> "
    testHTML2 = "<p>Hello, World!</p>"
    return testHTML