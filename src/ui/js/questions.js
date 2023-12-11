async function showQuestions() {
  let response = await fetch("/api/fruits");
  let fruits = await response.json();
  //console.log(fruits.data);

  //load into webpage
  document.getElementById("fruits").innerText = fruits.data.map(a => a.name).join(", ");
}

/*
These questions were in the HTML file as examples.
I have moved them here for later use as I make the front-end. - Taseen Islam

History of Computing
- (100) - The year Windows 95 was released.
- (200) - The first form of external digital file storage.
- (300) - The year JavaScript became available
- (400) - The decade UNIX became available
- (500) - Intentionally left blank

BC CIS
- (100) - The language taught in the Intro Programming Sequence
- (200) - CIS Office Location (name the building)
- (300) - CIS Office Room Number
- (400) - Intentionally left blank
- (500) - Intentionally left blank

*/

function dailyDouble(ddQuestion) {
  console.log("hello");
}

function showAnswer(elem) {
  if (elem.state == "hidden") {
    console.log("unhidden23");
    elem.state = "show";
    elem.innerHTML = '<p>Answer.</p>';
  }
}

function createOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  overlay.state = 'question'

  // Create a close button
  const closeButton = document.createElement('span');
  closeButton.id = 'closeButton';
  closeButton.innerHTML = '&times;'; // Close symbol (X)
  closeButton.addEventListener('click', function () {
    document.body.removeChild(overlay); // Remove the overlay when the close button is clicked
  });

  const questionText = document.createElement('div');
  questionText.id = 'topHalfText';
  questionText.innerHTML = '<p>Question.</p>';

  const bottomOverlay = document.createElement('div');
  bottomOverlay.state = "hidden";
  bottomOverlay.id = 'bottomOverlay';
  bottomOverlay.innerHTML = '<p>Show Answer.</p>'; 

  bottomOverlay.addEventListener('click', function() {
    if (bottomOverlay.state == "hidden") {
      bottomOverlay.state = "show";
      bottomOverlay.innerHTML = '<p>Answer Text</p>';
      overlay.appendChild(closeButton);
    }
  });

  overlay.appendChild(questionText);
  overlay.appendChild(bottomOverlay);


  document.body.appendChild(overlay);
  
}


function press(element) {
  var itemId = element.id;
  var state = element.getAttribute('state');

  if (state == "number") {
    createOverlay();
    
    showQuestions();
    console.log("valid press"); // valid press
    element.style.textDecoration = "line-through";
    element.style.color = "rgb(73, 74, 83)"
    element.setAttribute("onclick", "")
    
  }
}