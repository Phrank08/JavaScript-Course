function toggleButton(selector) {
  const toggledButton = document.querySelector(selector);

  if(!(toggledButton.classList.contains('is-toggled'))) {


    turnOffPreviousButton();
    toggledButton.classList.add('is-toggled');
  } else {

    toggledButton.classList.remove('is-toggled');
  }
}

/*
if((gamingtogglebutton.classList.contains('gamingIsToggled'))) {
  musictogglebutton.classList.remove('musicIsToggled');
  techtogglebutton.classList.remove('techIsToggled');

}else if((musictogglebutton.classList.contains('musicIsToggled'))) {
  gamingtogglebutton.classList.remove('gamingIsToggled');
  techtogglebutton.classList.remove('techIsToggled');

}else if((techtogglebutton.classList.contains('techIsToggled'))) {
gamingtogglebutton.classList.remove('gamingIsToggled');
musictogglebutton.classList.remove('IsToggled');
}
*/








function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');

  if(previousButton) {

    previousButton.classList.remove('is-toggled');
  }
}