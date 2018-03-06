$('.menu-main__btn').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('menu-main__btn--close');
});
