$(document).ready(function() {
  let $barMain = $('.topBar-main'),
      $barLever = $('.topBar-lever'),
      $body = $('body'),
      $bodyMargin = parseInt($body.css('margin-top').replace('px', '')),
      $barHeight = $('.topBar-main').outerHeight();

  $barMain.slideDown();
  $body.animate({
    'margin-top': ($bodyMargin + $barHeight)
  });
  $barLever.hide();

  $('.topBar-close').on('click', function() {
    $barMain.slideToggle('200');
    $barLever.delay('400').slideToggle('200');
    $body.animate({
      'margin-top': $bodyMargin
    });
  });

  $barLever.on('click', function() {
    $barMain.delay('400').slideToggle('200');
    $(this).slideToggle('200');
    $body.animate({
      'margin-top': ($bodyMargin + $barHeight)
    });
  });
});