requirejs.config({
  paths: {
    'scrollTo': './libs/jquery.scrollTo'
  }
});

define(['jquery', 'scrollTo'], function ($, scrollTo) {

  var $lift = $('.lift'),
      liftH = $lift.height(),
      $items = $('.lift-item'),
      hooks = ['quality', 'cloth', 'electronic', 'computer', 'three-c', 'eat'],
      pos = [];

  (function(){
    for (var i = 0, len = hooks.length; i < len; i++) {
      pos.push($('.' + hooks[i]).offset().top - 50);
    }
    pos.push(0);
  })();

  function bindEvent() {
    $items.each(function (index) {
      $items.eq(index).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $.scrollTo(pos[index], 200);
      });
    });
  }

  return {
    init: function () {
      $lift.css("margin-top", -liftH / 2 + 'px');
      var scrollTop = $(window).scrollTop();
      if (scrollTop + 500 > pos[0]) {
        $lift.show();
      } else {
        $lift.hide();
      }
    },
    bindEvent: bindEvent
  }
});