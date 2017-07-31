/**
 * 分类栏模块
 */

define(['jquery'], function ($) {

  var $layers = $('.cate-part'),
      $content = $('.category .content'),
      $items = $('.category li'),
      index;

  function cate_show(){
    $items.eq(index).addClass('active');
    $content.show();
    $layers.eq(index).show();
  }

  function cate_hide() {
    $items.removeClass('active');
    $content.hide();
    $layers.hide();
  }

  return {
    init: function () {
      $items.hover(function () {
        index = $items.index(this);
        cate_show();
      }, cate_hide);
      $content.hover(cate_show, cate_hide)
    },
  }
});