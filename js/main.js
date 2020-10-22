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
        item: 3,
        dots: false,
        smartSpeed: 500,
        margin: 2
    });

      // Go to the next item
    $('#shopSliderRight').click(function() {
        shopSlider.trigger('next.owl.carousel', [500]);
    });

    // Go to the previous item
    $('#shopSliderLeft').click(function() {
        shopSlider.trigger('prev.owl.carousel', [500]);
    });

});