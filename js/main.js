$(function () {

    $('button').on('click', function () {
        $('h1').toggleClass('on')
    })


    $('.txt_slide').slick({
        autoplay: true,
        arrows: true,
        trueauopSpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
    })

    $('.lazy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1
    });

})