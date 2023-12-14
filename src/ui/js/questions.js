// Variable to track the current question ID
let currentQuestionId;

document.querySelectorAll(".jeopardy-square").forEach((square) => {
  square.addEventListener("click", function () {
    if (!square.classList.contains("used")) {
      square.classList.add("used");
      const questionId = this.dataset.questionId;
      currentQuestionId = questionId; // Set the current question ID
      fetchQuestion(questionId); // Fetch question ID
    }
  });
});

// Retrieve the question to input into the modal
function fetchQuestion(questionId) {
  fetch(`http://localhost:8000/get-question?id=${questionId}`)
    .then((response) => response.json())
    .then((questionData) => {
      showQuestionModal(questionData.prompt);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function loadCategories() {
  fetch('http://localhost:8000/categories')
    .then(response => response.json())
    .then(categories => {
      const headerRow = document.querySelector('.category-header-row');
      headerRow.innerHTML = ''; // Clear existing headers
      categories.forEach(category => {
        const headerCol = document.createElement('div');
        headerCol.className = 'col-2 category-header';
        headerCol.textContent = category;
        headerRow.appendChild(headerCol);
      });
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
    });
}

// Call this function to initialize categories when the page loads
document.addEventListener('DOMContentLoaded', loadCategories);

// Retrieve the answer to input into the modal
function fetchAnswer(questionId) {
  fetch(`http://localhost:8000/get-answer?id=${questionId}`)
    .then((response) => response.json())
    .then((answerData) => {
      showAnswerModal(answerData.answer);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
// Function to display the question modal
function showQuestionModal(contentText, isAnswer = false) {
  const questionModalElement = document.getElementById("questionModal");
  const modalBody = questionModalElement.querySelector(".modal-body");
  modalBody.textContent = contentText;

  // Update the modal label based on whether it's a question or answer
  const label = document.getElementById("questionModalLabel");
  label.textContent = isAnswer ? "Answer" : "Question";

  // Update the "Show Answer" button text
  const showAnswerButton = document.getElementById("showAnswerButton");
  showAnswerButton.textContent = isAnswer ? "Close" : "Show Answer";

  // Add an event listener for the "Show Answer" button
  showAnswerButton.addEventListener("click", function () {
    // Call the function to fetch and display the answer
    if (!isAnswer) {
      fetchAnswer(currentQuestionId);
    } else {
      hideModal(questionModalElement);
    }
  });

  // Show the modal
  showModal(questionModalElement);
}

// Function to display the answer modal
function showAnswerModal(contentText) {
  const answerModalElement = document.getElementById("questionModal");
  const modalBody = answerModalElement.querySelector(".modal-body");
  modalBody.textContent = contentText;

  const label = document.getElementById("questionModalLabel");
  label.textContent = "Answer";
  
  // Change the "Show Answer" button text to "Close" in the question modal
  const showAnswerButton = document.getElementById("showAnswerButton");
  showAnswerButton.textContent = "Close";

  // Remove the "Show Answer" button event listener
  showAnswerButton.removeEventListener("click");

  // Add a new event listener to close the answer modal
  showAnswerButton.addEventListener("click", function () {
    hideModal(answerModalElement);
  });

  // Show the modal
  showModal(answerModalElement);
}

// Function to hide the modal
function hideModal(modalElement) {
  var modal = new bootstrap.Modal(modalElement);
  modal.hide();
}

// Function to show the modal
function showModal(modalElement) {
  var modal = new bootstrap.Modal(modalElement);
  modal.show();
}

// Event listener to reset the modal label when the modal is hidden
$('#questionModal').on('hidden.bs.modal', function (e) {
  const label = document.getElementById("questionModalLabel");
  label.textContent = "Question";
});
