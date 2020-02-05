$(document).ready(function() {
  let $barMain = $('.topBar-main');
  let $barLever = $('.topBar-lever');

  $barMain.show();
  $barLever.hide();
  $('.topBar-close').on('click', function() {
    $barMain.slideToggle();
    $barLever.slideToggle();
  });

  $barLever.on('click', function() {
    $barMain.slideToggle();
    $(this).slideToggle();
  });
});