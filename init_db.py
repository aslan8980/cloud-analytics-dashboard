import sqlite3

conn = sqlite3.connect("database.db")
cursor = conn.cursor()

# Monthly sales
cursor.execute("""
CREATE TABLE IF NOT EXISTS sales_monthly (
    month TEXT,
    sales INTEGER
)
""")

cursor.execute("DELETE FROM sales_monthly")
cursor.executemany(
    "INSERT INTO sales_monthly VALUES (?, ?)",
    [
        ("January", 120),
        ("February", 150),
        ("March", 180),
        ("April", 140),
        ("May", 210)
    ]
)

# User growth
cursor.execute("""
CREATE TABLE IF NOT EXISTS user_growth (
    month TEXT,
    users INTEGER
)
""")

cursor.execute("DELETE FROM user_growth")
cursor.executemany(
    "INSERT INTO user_growth VALUES (?, ?)",
    [
        ("January", 50),
        ("February", 80),
        ("March", 120),
        ("April", 160),
        ("May", 200)
    ]
)

# Traffic sources
cursor.execute("""
CREATE TABLE IF NOT EXISTS traffic_sources (
    source TEXT,
    percentage INTEGER
)
""")

cursor.execute("DELETE FROM traffic_sources")
cursor.executemany(
    "INSERT INTO traffic_sources VALUES (?, ?)",
    [
        ("Google", 35),
        ("YouTube", 25),
        ("Instagram", 20),
        ("Facebook", 10),
        ("TikTok", 10)
    ]
)

# Product categories
cursor.execute("""
CREATE TABLE IF NOT EXISTS product_categories (
    category TEXT,
    percentage INTEGER
)
""")

cursor.execute("DELETE FROM product_categories")
cursor.executemany(
    "INSERT INTO product_categories VALUES (?, ?)",
    [
        ("Laptops", 30),
        ("Phones", 25),
        ("Monitors", 20),
        ("Tablets", 15),
        ("Keyboards", 10)
    ]
)

conn.commit()
conn.close()

print("Database initialized successfully.")
