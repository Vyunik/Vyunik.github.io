$('.navigation__menu-item-link').click(function(){
    $('.navigation__menu-item-link').removeClass('navigation__active-link');
    $(this).addClass('navigation__active-link');
});

$('.navigation__search-btn').click(function(){
    $('.navigation__search-block').toggleClass('navigation__search-block-active');
});

$('.project__carousel').owlCarousel({
    loop: true,
    dots: false,
    margin: 1,
    responsive: {
        0: {
            items: 1,
        },
        605: {
            items: 2,
        },
        910: {
            items: 4,
        }
    }
})

$('.likes__img').click(function(){
    $(this).toggleClass('likes__active');
});

$(".accordeon__btn").click(function() {
    if ($(this).next(".accordeon__content").is(":hidden")) {
        $(this).children('span').text('-');
        $(this).addClass('accordeon__item-active');
    } else {
        $(this).children('span').text('+');
        $(this).removeClass('accordeon__item-active');
    }
}); 

$(document).ready(function(){
  $('.development__photos').height($('.development__photos').width()*432/676);
  $(window).resize(function(){
    $('.development__photos').height($('.development__photos').width()*432/676);
  });
});

$('.twit__carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 1
})


