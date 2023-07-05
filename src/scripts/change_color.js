export function changeColor(button) {
    // Remove 'active' class from all buttons
    var buttons = document.getElementsByClassName('btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }

    button.classList.add('active');
  }
  