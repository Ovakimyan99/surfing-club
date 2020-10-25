// data carts
const shopItemData =[
    {
        imgSrc: './img/boards/board-1.png',
        imtAlt: 'Surfing boards',
        imgTitle: 'Surfing boards',
        boardCat: 'Funboards',
        boardTitle: 'Chilli Rare Bird',
        boardPrice: '$890'
    },
    {
        imgSrc: './img/boards/board-3.png',
        imtAlt: 'Surfing boards',
        imgTitle: 'Surfing boards',
        boardCat: 'SURFBOARDS',
        boardTitle: 'Emery NEM XF',
        boardPrice: '$950'    
    },
    {
        imgSrc: './img/boards/board-2.png',
        imtAlt: 'Surfing boards',
        imgTitle: 'Surfing boards',
        boardCat: 'Funboards',
        boardTitle: 'Agency GROM',
        boardPrice: '$670'
    },
    {
        imgSrc: './img/boards/board-1.png',
        imtAlt: 'Surfing boards',
        imgTitle: 'Surfing boards',
        boardCat: 'Funboards',
        boardTitle: 'Chilli Rare Bird',
        boardPrice: '$890'
    },
    {
        imgSrc: './img/boards/board-3.png',
        imtAlt: 'Surfing boards',
        imgTitle: 'Surfing boards',
        boardCat: 'SURFBOARDS',
        boardTitle: 'Emery NEM XF',
        boardPrice: '$950'    
    },
    {
        imgSrc: './img/boards/board-2.png',
        imtAlt: 'Surfing boards',
        imgTitle: 'Surfing boards',
        boardCat: 'Funboards',
        boardTitle: 'Agency GROM',
        boardPrice: '$670'
    }
];

let shopSlider = document.querySelector('#shopSlider');

shopItemData.forEach(function(item, i){
    shopSlider.insertAdjacentHTML('beforeend', `

        <!-- board ${i + 1} -->
        <div class="board">

            <div class="board__img-holder">
                <img class="board__img owl-lazy" data-src="${item.imgSrc}" alt="${item.imtAlt}" title="${item.imgTitle}">
            </div>

            <div class="board-descr">
                <div class="board__cat">${item.boardCat}</div>
                <div class="board__title">${item.boardTitle}</div>

                <div class="board-buy">
                    <div class="board-buy__price">${item.boardPrice}</div>
                    <div class="board-buy__link">Buy</div>
                </div>
            </div>

        </div>
        <!-- / board ${i + 1} -->

    `);
});


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