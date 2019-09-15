$(document).ready(function(){

  $('.header-img__slider').slick({
    infinity: true,
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 2000,
  });

  $('.btn-left').click(function(){
    $('.header-img__slider').slick('slickPrev');
  });

  $('.btn-right').click(function(){
    $('.header-img__slider').slick('slickNext');
  });




  var a = 0;
  $(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {

            duration: 8000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }

          });
      });
      a = 1;
    }

  });


  $('.homegallery__popup').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
  // other options
});
});
