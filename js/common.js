


$('.nav .gnb > li').mouseenter(function () {
    if ($(this).find('.depth02_wrap').css('display') === 'none') {
        $('.depth02_wrap').stop().hide();
    } else {
        $('.depth02_wrap').stop().show();
    }
    $('.header').css('background-color', '#fff');

    $('.depth02_wrap').mouseleave(function () {
        $(this).slideUp(100)
    });


});

$('.nav .gnb > li').mouseleave(function () {
    //header에게 mouseleave 했을때 배경색 복구 
    $('.header').css('background-color', 'transparent');
});
