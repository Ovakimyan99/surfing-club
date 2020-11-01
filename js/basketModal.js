// basket data

const basketData = [
    {
        
    }
];

// basket

const basket = document.querySelector('.nav__basket');
const modalWrapperBasket = document.querySelector('.modal-wrapper');

basket.addEventListener('click', ()=>{
    modalWrapperBasket.style.display = 'flex';
    enablesScroll(); 
});

const modalClose = document.querySelectorAll('[data-modalClose]');

modalClose.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        if (e.target.hasAttribute('data-modalClose') || 
        e.target.closest('[data-modalClose]').classList != 'modal-wrapper')
        {
            modalWrapperBasket.style.display = 'none';
            disableScroll();
        }
    });
});

// add element in basket

const boardBuyLink = document.querySelectorAll('.board-buy__link');

boardBuyLink.forEach((item)=>{
    item.addEventListener('click', ()=>{
        const price = item.previousElementSibling;
        const boardCat = item.closest('.board-descr').querySelector('.board__cat');
        const boardTitle = item.closest('.board-descr').querySelector('.board__title');
    });
});

// brainTigr?!123