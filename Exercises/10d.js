function GamingToggle () {
  const  gamingButton = document.querySelector('.js-gaming-button');
  

  if(!(gamingButton.classList.contains('is-toggled'))) {
    gamingButton.classList.add('is-toggled');

  }else {
    gamingButton.classList.remove('is-toggled');
  }
}

function musicToggle () {
  const  gamingButton = document.querySelector('.js-other-button');
  

  if(!(gamingButton.classList.contains('is-other-toggled'))) {
    gamingButton.classList.add('is-other-toggled');

  }else {
    gamingButton.classList.remove('is-other-toggled');
  }
}

function techToggle () {
  const  gamingButton = document.querySelector('.js-tech-button');
  

  if(!(gamingButton.classList.contains('is-tech-toggled'))) {
    gamingButton.classList.add('is-tech-toggled');

  }else {
    gamingButton.classList.remove('is-tech-toggled');
  }
}