$(document).ready(function() {
  $('.topBar-main').show();
  $('.topBar-lever').hide();
  $('.topBar-close').on('click', function() {
    $('.topBar-main').slideToggle();
    $('.topBar-lever').slideToggle();
  });

  $('.topBar-lever').on('click', function() {
    $('.topBar-main').slideToggle();
    $(this).slideToggle();
  });
});