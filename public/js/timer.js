/**
 * 计时器模块
 */

define(['jquery'], function ($) {
  // 时间格式化
  function format(time) {
    var _h, _m, _s;
    if (time > 0) {
      _h = Math.floor(time / (60 * 60));
      _m = Math.floor(time / 60) - (_h * 60);
      _s = Math.floor(time) - (_h * 60 * 60) - (_m * 60);
    }
    if (_m <= 9) _m = '0' + _m;
    if (_s <= 9) _s = '0' + _s;
    return {
      h: _h,
      m: _m,
      s: _s
    }
  }

  return {

    run: function (intDiff) {     
      var $h = this.find('.hour span');
      var $m = this.find('.minute span');
      var $s = this.find('.second span');

      window.setInterval(function () {
        // 格式化过后的时间
        var formated = format(intDiff);
        $h.text(formated.h);
        $m.text(formated.m);
        $s.text(formated.s);
        intDiff--;
      }, 1000);
    }
  }
});

