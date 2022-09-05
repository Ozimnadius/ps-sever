window.addEventListener('load', function () {

    if(window.matchMedia('(max-width: 767.98px)').matches){
        let slider = document.querySelector('.services.swiper');
        if (slider) {
            new Swiper(slider, {
                spaceBetween: 10,
                slidesPerView: 1,
                enabled: true,
                pagination: {
                    el: slider.querySelector('.services__pag')
                },
            });
        }
    }


});