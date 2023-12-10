let modal = document.getElementById('myModal');
let questionElement = document.getElementById('questionText');
let questionCatagory = document.getElementById('questionCatagory');
let questionPoint = document.getElementById('questionPoint');
let answerOptionsElement = document.getElementById('answerOptions');
let resultMessageElement = document.getElementById('resultMessage');
let closeButton = document.getElementById('closeButton');

function hideButton(button) {
    button.style.visibility = 'hidden';
    button.disabled = true;
  }
  
function resetButtons() {
let buttons = document.querySelectorAll('.point-btn');
buttons.forEach(button => {
    button.style.visibility = 'visible';
    button.disabled = false;
    let scoreElement = document.getElementById('score');
    scoreElement.textContent = 0;
});
}

function openModal(_questionData) {
    // Display the question in the modal
    questionCatagory.textContent = `Catagory: ${_questionData.Category}`;
    questionPoint.textContent = `Point: ${_questionData.Points}`;
    questionElement.textContent = _questionData.Question;
  
    // Create answer buttons
    const answers = [_questionData.OptionA, _questionData.OptionB, _questionData.OptionC, _questionData.OptionD]; // Replace with your answer options
    answers.forEach(answer => {
      const button = document.createElement('button');
      button.textContent = answer;
      button.classList.add('answer-button');
      button.onclick = () => checkAnswer(answer, _questionData.CorrectAnswer, _questionData.Points);
      answerOptionsElement.appendChild(button);
    });
  
    modal.style.display = 'block';
  }

function addScore(point){
    let scoreElement = document.getElementById('score');
    let scoreText = scoreElement.textContent;
    let scoreInteger = parseInt(scoreText);
    newScore = scoreInteger + point;
    scoreElement.textContent = newScore;
}

function checkAnswer(selectedAnswer, correctAnswer, points) {
    if (selectedAnswer === correctAnswer) {
      resultMessageElement.textContent = 'Correct answer!';
      addScore(points);
    } else {
      resultMessageElement.textContent = `Wrong answer. The correct answer is ${correctAnswer}`;
      addScore(-points);
    }
  
    // Display close button after answering
    closeButton.style.display = 'block';
  
    // Disable all answer buttons after selecting an answer
    const answerButtons = document.querySelectorAll('.answer-button');
    answerButtons.forEach(button => {
      button.disabled = true;
    });
}
  
function closeModal() {
    // Reset modal content for reuse
    questionElement.textContent = '';
    answerOptionsElement.innerHTML = '';
    resultMessageElement.textContent = '';
    closeButton.style.display = 'none';
    modal.style.display = 'none';
}
  
  
let buttons = document.querySelectorAll('.point-btn');

buttons.forEach(button => {
button.addEventListener('click', () => {
    let category = button.getAttribute('data-category');
    let points = button.getAttribute('data-points');
    fetch(`http://localhost:5000/get-question/${category}/${points}`)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the response as JSON
        })
        .then(questionData => {
            // Handle the received question data here
            openModal(questionData)
          })
        .catch(error => {
            console.error('Error fetching question:', error);
          });
    hideButton(button);
});
});
  