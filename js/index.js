$(".open-menu").click(function() {
    $('.mobile.sidebar').toggleClass('open');
    $('.overlay').toggleClass('on');
});

$('.overlay').click(function() {
    $(this).removeClass('on');
    $('.mobile.sidebar').removeClass('open');
});

$('.browse').popup({
    popup : $('.popup'),
    on : 'click',
    lastResort: 'bottom left',
});

$( function () {
    $('#datepicker').datepicker();
});



