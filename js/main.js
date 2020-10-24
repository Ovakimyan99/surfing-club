$(document).ready(function() {
    
    //sliders:

    // header slider

    const headerSlider = $('#headerSlider');
    
    headerSlider.on('changed.owl.carousel', function(e){
        $('.slide-controls-number__active').text(e.item.index + 1);

        $('.slide-controls-number__total').text(e.item.count);
    });

    headerSlider.on('initialized.owl.carousel', function(e){
        $('.slide-controls-number__active').text(e.item.index + 1);

        $('.slide-controls-number__total').text(e.item.count);
    });


    headerSlider.owlCarousel({
        center: true,
        items:1,
        margin: 200,
        dots: false,
        smartSpeed: 1300
    });
 

    // Go to the next item
    $('#headerSliderRight').click(function() {
        headerSlider.trigger('next.owl.carousel', [1300]);
    });

    // Go to the previous item
    $('#headerSliderLeft').click(function() {
        headerSlider.trigger('prev.owl.carousel', [1300]);
    });


    // shop slider

    const shopSlider = $('#shopSlider');

    shopSlider.owlCarousel({
        items: 3,
        dots: false,
        smartSpeed: 500,
        margin: 2,
        responsive: {
            0 : {
                items: 1
            },
            
            1254: {
                items: 3
            },
        }
    });

      // Go to the next item
    $('#shopSliderRight').click(function() {
        shopSlider.trigger('next.owl.carousel', [500]);
    });

    // Go to the previous item
    $('#shopSliderLeft').click(function() {
        shopSlider.trigger('prev.owl.carousel', [500]);
    });



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


});