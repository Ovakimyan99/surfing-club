$(document).ready(function() {

    // header slider

    // data slide

    const headerSlideData = [
        {
            headingSpan: 'Yuor',
            heading: 'Beautiful Escape',
            descr: 'One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.',
            background: 'background-image: url(../img/img/img-header.jpg)',
        },
        {
            headingSpan: 'Yuor',
            heading: 'Beautiful Escape',
            descr: 'One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.',
            background: 'background-image: url(../img/img/img-header.jpg)',
        },
        {
            headingSpan: 'Yuor',
            heading: 'Beautiful Escape',
            descr: 'One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.',
            background: 'background-image: url(../img/img/img-header.jpg)',
        }
    ];

    let headerSlider = document.querySelector('#headerSlider');
    
    headerSlideData.forEach(function(item, i){
        headerSlider.insertAdjacentHTML('beforeend', `
        <!-- slide ${i + 1} -->
            <div class="container slide-item">
                <div class="slide-item__descr">
                    <h2 class="slide-item__heading">
                        <span>${item.headingSpan}</span>
                        ${item.headingSpan}
                    </h2>
                    <div class="slide-item__text">
                        <p>${item.descr}</p>
                    </div>
                </div>
                <div class="slide-item__img" style='${item.background}'>

                </div>
            </div>
            <!-- / slide ${i + 1} -->
        `);
    });
    
    
    headerSlider = $('#headerSlider');
    
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

});