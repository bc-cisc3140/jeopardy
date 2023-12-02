async function showQuestions() {
  let response = await fetch("/api/fruits");
  let fruits = await response.json();
  //console.log(fruits.data);

  //load into webpage
  document.getElementById("fruits").innerText = fruits.data.map(a => a.name).join(", ");
}
