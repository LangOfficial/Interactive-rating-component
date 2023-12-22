const submitButtonElement = document.getElementById('submit-button');
let ratingButtonClicked = false;
for (let i = 1; i < 6; i++) {
  const ratingButton = document.getElementById('rating-button-' + i);
  ratingButton.addEventListener('click', () => {
    for (let button of document.getElementsByClassName('rating-button-clicked')) {
      button.classList.remove('rating-button-clicked');
      button.id = 'rating-button-' + button.innerText;
    }
    ratingButton.classList.add('rating-button-clicked');
    submitButtonElement.style.cursor = 'pointer';
    ratingButton.id = '';
    ratingButtonClicked = true;
    
  })
}

submitButtonElement.addEventListener('click', () => {
  if (ratingButtonClicked) {
    const mainContainer = document.getElementById('main-container-1');
    const mainContainer2 = document.getElementById('main-container-2');
    
    mainContainer.classList.add(
    'animation-slide-out');

    document.querySelector('.animation-slide-out').addEventListener('animationend', () => {
    document.getElementById('rating-selected').innerText = `You selected ${document.getElementsByClassName('rating-button-clicked')[0].innerText} out of 5`
    ;
    
    mainContainer.style.display = 'none';
    mainContainer2.style.display = 'block';
    mainContainer2.classList.add('animation-fade-in');
    })
  }
})