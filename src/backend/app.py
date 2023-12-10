from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app) # Enable CORS for all routes

# Endpoint to get a question based on category and points
@app.route('/get-question/<category>/<points>', methods=['GET'])
def get_question(category, points):
    conn = sqlite3.connect('jeopardy_questions.db')
    cursor = conn.cursor()

    # Fetch a question from the database based on the category and points
    query = 'SELECT * FROM JeopardyQuestions WHERE Category = ? AND Points = ?'
    cursor.execute(query, (category, points))
    row = cursor.fetchone()

    # Close the cursor and connection
    cursor.close()
    conn.close()

    if row:
        # Get column names from cursor description
        columns = [col[0] for col in cursor.description]

        # Create a dictionary using column names as keys
        row_dict = dict(zip(columns, row))

        # Return the row dictionary as JSON response
        return jsonify(row_dict), 200
    else:
        return 'Question not found', 404

# Other endpoints and logic for checking user's answers, updating score, etc.

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
