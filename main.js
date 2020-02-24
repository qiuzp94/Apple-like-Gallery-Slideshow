let $buttons = $('li')
$buttons.on('click', function (e) {
    let index = $(e.currentTarget).index()
    let q = index * -920
    let p = index % 71

    $buttons.eq()
        .addClass('active').removeClass('wait')
        .siblings()
        .removeClass('active').removeClass('wait')

    $('.images').css({
        transform: 'translate(' + q + 'px)'
    })
    $('.main .swiper .after').css({
        transform: 'translate(' + p + 'px)'
    })
})