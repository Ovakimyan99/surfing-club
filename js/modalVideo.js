// modal window -- video

const modalWrapper = document.querySelector('.modalWrapper');
const modal = document.querySelector('.modal-block');
const videoControl = document.querySelector('.club-description-video__control');

videoControl.addEventListener('click', function() {
    const scrollTop = window.pageYOffset;
    modalWrapper.style.top = scrollTop + 'px';
    modalWrapper.style.display = 'flex';

    document.body.style.overflow = 'hidden';
    
    modal.insertAdjacentHTML('afterbegin', `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/cYjy5BNQWbA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <input class="modal-close" type="button" value='CLOSE'>
    `);

    const modalClose = document.querySelector('.modal-close');
    modalClose.addEventListener('click', modalCloseClick);

    modalWrapper.addEventListener('click', (e)=>{
        if (e.target.hasAttribute('data-modalClose')){
            modalCloseClick();
        }
    });
    
    function modalCloseClick(){
        modalWrapper.style.display = 'none';
        modal.textContent ='';
        document.body.style.overflow = '';
    }
});