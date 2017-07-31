define(['jquery'], function ($) {

  // 滑动模块

  /**
   * 传递的参数形式
   * {
   *  wrapper: 模块盒子，Jquery对象
   *  speed: 速度，数字
   * }
   */

  function Tab (obj) {
    this.wrapper= obj.wrapper;
    this.speed = obj.speed;
  }


  Tab.prototype.init = function () {
    var $headItems = this.wrapper.find('.tab-head-item'),
        $line = this.wrapper.find('.smooth-bar'),
        $items = this.wrapper.find('.tab-item'),
        _speed = this.speed*10;

    $headItems.mouseover(function () {
      var index = $headItems.index(this);
      $items.eq(index).show().siblings().hide();
      var len = $headItems.width();
      $line.stop(true, false).animate({
        left: len*index + 'px'
      }, _speed);
    });
  };

  return Tab;
});