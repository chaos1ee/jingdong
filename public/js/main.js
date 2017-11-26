requirejs.config({
  paths: {
    'jquery': './libs/jquery-3.2.1',
    'topMenu': './topMenu',
    'cate': './cate',
    'slider': './slider',
    'search': './search',
    'timer': './timer',
    'tab': './tab',
    'lift': './lift'
  }
});

require([
  'jquery',
  'topMenu',
  'cate',
  'slider',
  'search',
  'timer',
  'tab',
  'lift'
], function ($, topMenu, cate, slider, search, timer, Tab, lift) {

  // 顶部栏
  topMenu.init();

  // 分类栏hover动画
  cate.init();

  // slider
  slider.init();

  // 搜索框动画
  search.init();

  // 秒杀栏倒计时器
  var intDiff = 12 * 60 * 60 + 59 * 60 + 59; // 虚构的剩余时间，秒数
  var $seckill_timer = $('#seckill-timer');
  timer.run.call($seckill_timer, intDiff);

  // tab切换模块
  var tab1 = new Tab({
    wrapper: $('.info .tab'),
    speed: 10
  });

  var tab2 = new Tab({
    wrapper: $('.rank .tab'),
    speed: 10
  })

  tab1.init();
  tab2.init();

  // lift 左侧控件
  lift.init();
  lift.bindEvent();

  // 监听窗口滚动
  $(window).scroll(function () {
    search.init();
    lift.init();
  });

});