// modal window -- video

const modalVideoWrapper = document.querySelector('#modal-video-wrapper');
const viedoControl = document.querySelector('.club-description-video__control');
const videoModalClose = document.querySelectorAll('[data-video-modal-close]');
const modalVideo = document.querySelector('.modal-block-video');
const body = document.body;

viedoControl.addEventListener('click', ()=>{
    modalVideoWrapper.style.display = 'flex';
    body.style.overflow = 'hidden';
    
    const modalVideoIframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/cYjy5BNQWbA" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
    picture-in-picture" allowfullscreen></iframe>`;

    if(!modalVideo.querySelector('iframe')){
        modalVideo.insertAdjacentHTML('afterbegin', modalVideoIframe);   
    }
});


videoModalClose.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        if(e.target.hasAttribute('data-video-modal-close')){
            body.style.overflow = '';
            modalVideoWrapper.style.display = 'none';
        }
    });
});