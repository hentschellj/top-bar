$(document).ready(function() {
  let $barMain = $('.topBar-main');
  let $barLever = $('.topBar-lever');

  $barMain.show();
  $barLever.hide();
  $('.topBar-close').on('click', function() {
    $barMain.slideToggle('200');
    $barLever.delay('400').slideToggle('200');
  });

  $barLever.on('click', function() {
    $barMain.delay('400').slideToggle('200');
    $(this).slideToggle('200');
  });
});