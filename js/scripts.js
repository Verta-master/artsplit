$('.brand-title-search').next().hide();
$('.brand-title-search').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('input-title--open');
})