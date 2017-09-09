// alert("connected");
// For smooth scroll-
$("#myNavbar ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top-50
     }, 1000, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

$( "#CS" ).on( "click", function() {
  $("#section6").css('background-image','url(bg_images/CS.jpg)');
});

$( "#SC" ).on( "click", function() {
  $("#section6").css('background-image','url(bg_images/quiz.jpg)');
});

$( "#QZ" ).on( "click", function() {
  $("#section7").css('background-image','url(bg_images/quiz1.jpg)');
});

$( "#GC" ).on( "click", function() {
  $("#section7").css('background-image','url(bg_images/green.jpg)');
});

$( "#TV" ).on( "click", function() {
  $("#section7").css('background-image','url(bg_images/tv.jpg)');
});
