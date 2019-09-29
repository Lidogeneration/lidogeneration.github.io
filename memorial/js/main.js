$('.mainCont').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: true,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
            }
        },
    ]
});
