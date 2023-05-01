const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card');
const ratingForm = document.getElementById('rating-form');
const alert = document.querySelector('.alert');
const ratingBtns = document.querySelectorAll(".rating-numbers");

ratingBtns.forEach((btn) => {
    btn.addEventListener('click',function(){
        alert.classList.add("message");
        alert.textContent = `You selected ${this.value} out of 5`
    })
})

ratingForm.addEventListener('submit',function(e){
    e.preventDefault();
    ratingCard.classList.add('hidden');
    thankYouCard.classList.remove('hidden');
})