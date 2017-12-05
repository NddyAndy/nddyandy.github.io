

(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
  });

 // typed

  //#to-top button appears after scrolling
  var fixed = false;
  $(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
      if (!fixed) {
        fixed = true;
        $('#to-top').show("slow", function() {
          $('#to-top').css({
            position: 'fixed',
            display: 'block'
          });
        });
      }
    } else {
      if (fixed) {
        fixed = false;
        $('#to-top').hide("slow", function() {
          $('#to-top').css({
            display: 'none'
          });
        });
      }
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);

$('.portfolio-modal').on('show.bs.modal', function(e) {
  $(".navbar").addClass("d-none");
})
$('.portfolio-modal').on('hidden.bs.modal', function(e) {
  $(".navbar").removeClass("d-none");
})

type();

setInterval(function(){ 
  new TypeIt('#typed', {
    speed: 30,
    autoStart: false
  })
  .delete()
  type();
 }, 21000);

 function type(){
  return new TypeIt('#typed', {
    speed: 50,
    autoStart: false
  })
  .type('Fullstack')
  .pause(700)
  .type(' Web Developer')
  .pause(1000)
  .delete()
  .type('I build...')
  .pause(500)
  .break() .pause(700)
  .type('Static websites')
  .pause(600)
  .delete(15)
  .type('Dynamic websites')
  .pause(600)
  .delete(16)
  .type('Progressive Web Apps')
  .pause(600)
  .delete(20)
  .type('Bots')
  .pause(600)
  .delete(4)
  .type('Secure and Scalable APIs')
  .pause(600)
  .delete(27)
  .pause(750)
  .options({speed: 50})
  .delete()
  .type('Basically I make Stuff that works on the web');
 }