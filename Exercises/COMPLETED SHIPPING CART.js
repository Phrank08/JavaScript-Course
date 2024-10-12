function handleCostKeydown(event) {
  if(event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');

  let cost = Number(inputElement.value);

  if (cost <= 40) {
    cost += 10;
    // document.querySelector('.totalCost').innerHTML = `$${cost}`;

  }

  document.querySelector('.totalCost').innerHTML = `$${cost}`;

}




function SubscribeButton() {
  const buttonText = document.querySelector('button');
  if(buttonText.innerHTML === 'Subscribe') {
    buttonText.innerHTML = 'Subscribed';
    buttonText.classList.add('is-subscribed');

  }else {
    buttonText.innerHTML = 'Subscribe';
    buttonText.classList.remove('is-subscribed');
  }
}