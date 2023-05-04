const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card');
const ratingForm = document.getElementById('rating-form');
const ratingBtns = document.querySelectorAll('.rating-numbers');
let alertEl = document.querySelector('.alert');

ratingBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    alertEl.classList.add('message');
    alertEl.textContent = `You selected ${btn.value} out of 5`;
  });
});

ratingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  ratingCard.classList.add('hidden');
  thankYouCard.classList.remove('hidden');
});
