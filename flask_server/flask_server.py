from flask import Flask
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3", str(datetime.now())]}

if __name__ == "__main__":
    app.run(debug=True)