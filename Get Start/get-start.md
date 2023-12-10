To achieve the functionality described—fetching Jeopardy questions from a database (`jeopardy_questions.db` in this case), displaying questions based on the user's click, and evaluating user-submitted answers against the correct ones—adjustments in both the frontend (HTML/CSS/JavaScript) and backend (server-side code to fetch data) are necessary.


### Backend (Server-Side)

1. **Setup Backend Server:** a backend server (Node.js, Python Flask, Django, etc.) to handle requests to fetch data from the database and send it to the frontend.

2. **API Endpoint for Question Fetching:** Create an API endpoint on backend server that fetches questions from the `jeopardy_questions.db` based on the requested points.

3. **Handle Submission:** Create another API endpoint to receive user-submitted answers, check them against the correct answers, and return the correctness status.

### Frontend (HTML/CSS/JavaScript)

1. **HTML Structure:** Update HTML structure to display the questions and handle user interactions (clicking on points).

2. **JavaScript (Client-Side):**
   - Modify the frontend logic to send requests to backend API when a user clicks on points.
   - Receive and display the questions returned by the backend API based on the clicked points.
   - Implement answer submission logic to send user answers to the backend, receive correctness status, and update the score accordingly.

### Example Flow:

- **User Interaction:**
  - User clicks on a specific point value (e.g., 100, 200, 300, etc.).
  - JavaScript sends a request to the backend API with the clicked point value.
- **Backend (Server-Side):**
  - Receives the request and queries the `jeopardy_questions.db` for the question corresponding to the requested points.
  - Sends the question (category, question text, options, correct answer) as a response to the frontend.
- **Frontend (Client-Side):**
  - Receives the question data from the backend.
  - Displays the question and options to the user.
  - Waits for the user to submit an answer.
  - Upon submission, sends the user's answer to the backend for verification.
  - Receives the correctness status from the backend.
  - Updates the score based on the correctness status.

### Important Notes:

- Ensure proper error handling at each step (e.g., handling database query errors, incorrect API requests, etc.).
- Implement security measures, especially when dealing with user-submitted data (prevent SQL injection, validate inputs, etc.).
- Organize frontend and backend code cleanly for better maintainability.

This is a high-level overview, and actual implementation may vary based on the chosen backend technology, database setup, and frontend framework (if any). To create specific API endpoints and define how data is sent and received between frontend and backend to achieve this interaction.