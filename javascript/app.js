$(document).ready(function(){

  /* Scroll with display menu */
  var lastScrollTop = $(window).scrollTop();
  $(window).scroll(function(event){
     var currentScroll = $(this).scrollTop();
     if (currentScroll > lastScrollTop && currentScroll > 300){
         $('.menu').fadeOut();
     } else {
        $('.menu').fadeIn();
     }
     lastScrollTop = currentScroll;
  });

  /* Banner */
  var imgUrl = ["url('images/banner2.jpg')","url('images/banner1.jpg')","url('images/banner3.jpg')"];
  var i = 0;
  setInterval(function() {
    if(i === 2)
      i = 0;
    else i = i + 1;
    $('.banner').css('background-image',imgUrl[i]);
  },3000);

  /* Popover */
  $('[data-toggle="popover"]').popover();
})
