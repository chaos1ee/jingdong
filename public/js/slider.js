define(['jquery'], function ($) {

  var curIndex = 0,
      $items = $('.slider-item'),
      len = $items.length,
      $indicators = $('.indicator-btn');

  // 自动切换项目
  var autoChange = setInterval(function () {
    if (curIndex < len - 1) {
      curIndex++;
    } else {
      curIndex = 0;
    }
    // 调用变换处理函数
    changeTo(curIndex);
  }, 2500);

  function autoChangeAgain() {
    autoChange = setInterval(function () {
      if (curIndex < len - 1) {
        curIndex++;
      } else {
        curIndex = 0;
      }
      changeTo(curIndex);
    }, 2500);
  }

  function changeTo(num) {
    // 指示器移除与添加active状态
    $indicators.removeClass('active').eq(num).addClass('active');
    // 项目淡入与淡出
    $items.fadeOut(500).eq(num).fadeIn(500);
  }

  // 绑定前翻或后翻事件
  $prev = $('.slider-control-prev');
  $next = $('.slider-control-next');

  $prev.hover(function () {
    clearInterval(autoChange);
  }, function() {
    autoChangeAgain();
  });

  $prev.click(function (){
    curIndex = curIndex > 0 ? --curIndex : len - 1;
    changeTo(curIndex);
  });

  $next.hover(function () {
    clearInterval(autoChange);
  }, function() {
    autoChangeAgain();
  });

  $next.click(function (){
    curIndex = curIndex < len - 1  ? ++curIndex : 0;
    changeTo(curIndex);
  });

  // 为指示器绑定划入事件
  $indicators.hover(function() {
    var index = $(this).index();
    clearInterval(autoChange);
    changeTo(index);
    curIndex = index;
  },function () {
    autoChangeAgain()
  });

  // 只是为了让slider模块按对象方法的形式被调用
  function init () {};

  return {
    init: init
  };
});