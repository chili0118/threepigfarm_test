$("#banner").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
});

$("#farm").slick({
    slidesToShow: 3,
    slidesToScroll: 2,

    responsive: [
        {
            breakpoint: 1025,
            setting:{
                slideToShow: 2,
                slideToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            setting:{
                slideToShow: 1,
                slideToScroll: 1,
            }
        }
    ]
})