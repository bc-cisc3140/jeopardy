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
  
}