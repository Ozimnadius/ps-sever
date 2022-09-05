/*GALLERY START*/
window.addEventListener('load', function () {

    if (!window.matchMedia('(max-width: 767.98px)').matches) {
        $('.gallery__grid').masonry({
            // options
            itemSelector: '.gallery__item',
            columnWidth: '.gallery__size',
            gutter: '.gallery__gutter'
        });
    }
});
/*GALLERY END*/