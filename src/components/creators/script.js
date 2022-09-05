/*CREATORS START*/
window.addEventListener('load', function () {

    document.querySelectorAll('.creators__slider').forEach((i) => {
        new Swiper(i.querySelector('.creators__swiper'), {
            effect: "fade",
            pagination: {
                el: i.querySelector('.creators__pag'),
            },

            // Navigation arrows
            navigation: {
                nextEl: i.querySelector('.creators__next'),
                prevEl: i.querySelector('.creators__prev'),
            },
        });
    });

});
/*CREATORS END*/