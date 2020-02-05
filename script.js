$(document).ready(function() {
  let $barMain = $('.topBar-main');
  let $barLever = $('.topBar-lever');
  let $body = $('body');
  let $bodyMargin = parseInt($('body').css('margin-top').replace('px', ''));
  let $barHeight = $('.topBar-main').outerHeight();

  $barMain.show();
  $body.css('margin', ($bodyMargin + $barHeight));
  $barLever.hide();

  $('.topBar-close').on('click', function() {
    $barMain.slideToggle('200');
    $barLever.delay('400').slideToggle('200');
    $body.css('margin', $bodyMargin);
  });

  $barLever.on('click', function() {
    $barMain.delay('400').slideToggle('200');
    $(this).slideToggle('200');
    $body.css('margin', ($bodyMargin + $barHeight));
  });
});