$(function () {
    //jquery
    $('.depth01>a').mouseleave(function () {
        $(this).next().stop().slideUp()
    })
    $('.depth01>a').mouseenter(function () {
        $(this).next().stop().slideDown()
    })
    

    //bar style css
    let menuWidth = $('.depth01>a').outerWidth()

    $('.bar').css({
        'width': menuWidth,
        'height': '3px'
    })//.bar.css()


    //.bar following
    $('.depth01').mouseenter(function () {
        let move = $(this).position().left
        let thisWidth = $(this).outerWidth()

        $('.bar').stop().animate({
            'left': move,
            'width': thisWidth
        })
    })//.depth01.mouseenter()

    
})//jquery end