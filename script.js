$(function () {
    $('div').hide().fadeIn(1000);

    $('.menu a').click(function () {
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('body,html').animate({ 'scrollTop': position }, 500, 'swing');
        return false;
    });
});