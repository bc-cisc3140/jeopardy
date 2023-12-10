

function hideButton(button) {
    button.style.visibility = 'hidden';
    button.disabled = true;
  }
  
  function resetButtons() {
    let buttons = document.querySelectorAll('.point-btn');
    buttons.forEach(button => {
      button.style.visibility = 'visible';
      button.disabled = false;
    });
  }
  
  let buttons = document.querySelectorAll('.point-btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      let category = button.getAttribute('data-category');
      let points = button.getAttribute('data-points');
      console.log(category, points);
      hideButton(button);
    });
  });
  