define(['jquery'], function ($) {
  return {
    init: function () {
      var scrollTop = $(window).scrollTop();
      var seckillTop = $("#seckill").offset().top;
      if (scrollTop > seckillTop) {
        $(".search", "header").addClass("fix");
      } else {
        $(".search", "header").removeClass("fix");
      }
    }
  }
});