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


    $(function () {

        $(window).on('scroll', function () {
            var scr = $(window).scrollTop();
            if (scr > 300) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }

        });

        $('#toTop').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 1100)
        })


    })

})