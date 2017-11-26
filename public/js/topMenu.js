define(['jquery'], function ($) {

  return {
    init: function () {
      $('.dropdown .dt').hover(function () {
        $(this)
          .addClass('active')
          .siblings('.dropdown_layer')
          .show()
      }, function () {
        $(this)
          .removeClass('active')
          .siblings('.dropdown_layer')
          .hide();
      });
    }
  }
});
