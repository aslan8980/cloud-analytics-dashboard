from flask import Flask, jsonify, render_template
import sqlite3

app = Flask(__name__)
DB_NAME = "database.db"


def get_db_connection():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/sales_monthly")
def sales_monthly():
    conn = get_db_connection()
    rows = conn.execute("SELECT month, sales FROM sales_monthly").fetchall()
    conn.close()
    return jsonify([dict(r) for r in rows])


@app.route("/api/user_growth")
def user_growth():
    conn = get_db_connection()
    rows = conn.execute("SELECT month, users FROM user_growth").fetchall()
    conn.close()
    return jsonify([dict(r) for r in rows])


@app.route("/api/traffic_sources")
def traffic_sources():
    conn = get_db_connection()
    rows = conn.execute("SELECT source, percentage FROM traffic_sources").fetchall()
    conn.close()
    return jsonify([dict(r) for r in rows])


@app.route("/api/product_categories")
def product_categories():
    conn = get_db_connection()
    rows = conn.execute("SELECT category, percentage FROM product_categories").fetchall()
    conn.close()
    return jsonify([dict(r) for r in rows])


if __name__ == "__main__":
    app.run(port=8000)
