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

function displayQuestion(element) {
  var itemId = element.id;
  var state = element.getAttribute('state');
  var origFontSizeString = window.getComputedStyle(element).fontSize;
  var origFontSize = parseFloat(origFontSizeString);
  var newFontSize = origFontSize/4;
  var completeFontSize = origFontSize*4;

  if (state == "number") {
    element.setAttribute("state", "question"); // state to display question

    // code to display question
    element.innerText = itemId + " question"; // dummy question
    element.style.fontSize = newFontSize + "px";
  }
  else if (state == "question") {
    element.setAttribute("state", "answer"); // state to display answer

    // code to display answer
    element.innerText = itemId + " answer"; // dummy answer
  }
  else if (state == "answer") {
    element.setAttribute("state", "complete"); // state to display points but crossed out

    // code to bring back point value but crossed out and make the element unclickable
    element.innerText = "$" + itemId.slice(2);
    element.style.textDecoration = "line-through";
    element.style.color = "rgb(73, 74, 83)"
    element.style.fontSize = completeFontSize + "px";
    element.setAttribute("onclick", "")
  }
  console.log(state);
}