const swipeArrLogin = document.querySelector('.swipe-arr__login');
const swipeArrAuth = document.querySelector('.swipe-arr__auth');
const swipeArr = document.querySelector('.swipe-arr');
const swipeLoginForm = document.querySelector('.swipe-login-form');

swipeArrAuth.addEventListener('click', function(){
    swipeLoginForm.style.bottom = '0';
    setTimeout(swipeLoginForm.classList.add('animate__bounce'), 500);
});

swipeArrLogin.addEventListener('click', function(){
    swipeLoginForm.style.bottom = '100%';
    swipeLoginForm.classList.remove('animate__bounce');
});