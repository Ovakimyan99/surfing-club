// data carts

const getDataShopSlider = async function(url) {

    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error (`Ошибка по адресу ${url},
        статус ошибки ${response.status}`);
    }
    
    return await response.json();
};

let shopSlider = document.querySelector('#shopSlider');

function createSliderShopItem (slideItem) {

    const { imgSrc, imtAlt, imgTitle, boardCat, boardTitle, boardPrice } = slideItem;

    shopSlider.insertAdjacentHTML('beforeend', `

        <!-- board ${boardCat} -->
        <div class="board">

            <div class="board__img-holder">
                <img class="board__img owl-lazy" data-src="${imgSrc}" 
                alt="${imtAlt}" title="${imgTitle}">
            </div>

            <div class="board-descr">
                <div class="board__cat">${boardCat}</div>
                <div class="board__title">${boardTitle}</div>

                <div class="board-buy">
                    <div class="board-buy__price">${boardPrice}</div>
                    <div class="board-buy__link">Buy</div>
                </div>
            </div>

        </div>
        <!-- / board ${boardCat} -->

    `);

};


getDataShopSlider('./db/shopSlider.json').then( function(data){
    data.forEach(createSliderShopItem);

    // shop slider

    shopSlider = $('#shopSlider');

    shopSlider.owlCarousel({
        items: 3,
        lazyLoad: true,
        autoHeight: true,
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
        shopSlider.trigger('next.owl.carousel', [700]);
    });

    // Go to the previous item
    $('#shopSliderLeft').click(function() {
        shopSlider.trigger('prev.owl.carousel', [700]);
    });

});