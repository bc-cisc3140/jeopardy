document.querySelectorAll('.jeopardy-square').forEach(square => {
  square.addEventListener('click', function() {
      const questionId = this.dataset.questionId;
      fetchQuestion(questionId); //Fetch question ID
  });
});

//Retrieve the question to input into the modal
function fetchQuestion(questionId) {
  fetch(`http://localhost:3000/get-question?id=${questionId}`)
      .then(response => response.json())
      .then(questionData => {
          showQuestionModal(questionData.prompt);
      })
      .catch(error => {
          console.error('Error:', error);
      });
}

//Function to display the modal
function showQuestionModal(questionText) {
  const questionModalElement = document.getElementById('questionModal');
  const modalBody = questionModalElement.querySelector('.modal-body');
  modalBody.textContent = questionText;

  var questionModal = new bootstrap.Modal(questionModalElement);
  questionModal.show();
}
