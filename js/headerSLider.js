// header slider

// data slide

const getDataHeaderSlider = async function(url) {

    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error (`Ошибка по адресу ${url},
        статус ошибки ${response.status}`);
    }
    
    return await response.json();
};

const headerSlider = document.querySelector('#headerSlider');

function createHeaderSliderItem (slideItem) {

    
    const { headingSpan, heading, descr, background } = slideItem;

        headerSlider.insertAdjacentHTML('beforeend', `
        <!-- slide ${heading} -->
            <div class="container slide-item">
                <div class="slide-item__descr">
                    <h2 class="slide-item__heading">
                        <span>${headingSpan}</span>
                        ${heading}
                    </h2>
                    <div class="slide-item__text">
                        <p>${descr}</p>
                    </div>
                </div>
                <div class="slide-item__img">
                    <img class='owl-lazy' data-src='${background}' alt='${heading} title='${heading}'>
                </div>
            </div>
        <!-- / slide ${heading} -->
    `);
}

getDataHeaderSlider('./db/headerSlider.json').then( function(data){
    data.forEach(createHeaderSliderItem);
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
        lazyLoad:true,
        center: true,
        items:1,
        margin: 200,
        dots: false,
        smartSpeed: 1300,
        autoHeight: true
    });
    

    // Go to the next item
    $('#headerSliderRight').click(function() {
        headerSlider.trigger('next.owl.carousel', [1300]);
    });

    // Go to the previous item
    $('#headerSliderLeft').click(function() {
        headerSlider.trigger('prev.owl.carousel', [1300]);
    });
});