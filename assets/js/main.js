$(document).ready(()=>{

      // loader
      setTimeout(()=>{
            $(".loader").fadeOut();
      }, 8000);
      

      // hamburger
      $(".hamburger").click(()=>{
            $(".links").css("transform", "translateX(0)");

            $(".inner-logo-svg #first").css({
                  "animation": "slideInLeft 2s ease-in-out",
                  "animation-delay": "0.4s"
            });
            $(".inner-logo-svg #second").css({
                  "animation": "slideInRight 2s ease-in-out",
                  "animation-delay": "0.4s"
            });
            $(".inner-logo-svg #third").css({
                  "animation": "slideInUp 2s ease-in-out",
                  "animation-delay": "0.4s"
            });
            $(".inner-logo-svg #fourth").css({
                  "animation": "slideInDown 2s ease-in-out",
                  "animation-delay": "0.4s"
            });
            $(".inner-logo-svg #fifth").css({
                  "animation": "rubberBand 2s ease-in-out",
                  "animation-delay": "0.4s"
            });
      });
      $(".cross").click(()=>{
            $(".links").css("transform", "translateX(-120%)");
      });


      // To top
      const toTop = $(".to-top");

      $(window).scroll(function() {
            if ($(window).scrollTop() > 500) {
                  toTop.addClass('show');
                  $(".hamburger .bar").css("background-color", "#000");
                  $(".header-title").css("color", "#000");
                  $(".scrollbar").css("background", "#000");
            } else {
                  toTop.removeClass('show');
                  $(".hamburger .bar").css("background-color", "#fff");
                  $(".header-title").css("color", "#fff");
                  $(".scrollbar").css("background", "#fff");
            }
      });
            
      toTop.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
      });
            

      // Hover bg
      $(".work-hover").mouseover(function(){
            $(".links").css({
                  "background" : `url("./assets/images/services.jpg")`,
                  "background-size" : "cover",
                  "background-repeat" : "no-repeat",
                  "background-position" : "center",
                  "background-color": "#000",
            });
      })
      .mouseout(function(){
            $(".links").css("background", "#000");
      });
      $(".approach-hover").mouseover(function(){
            $(".links").css({
                  "background" : `url("./assets/images/training.jpg")`,
                  "background-size" : "cover",
                  "background-repeat" : "no-repeat",
                  "background-position" : "center",
                  "background-color": "#000",
            });
      }).mouseout(function(){
            $(".links").css("background", "#000");
      });
      $(".culture-hover").mouseover(function(){
            $(".links").css({
                  "background" : `url("./assets/images/ai-engine.jpg")`,
                  "background-size" : "cover",
                  "background-repeat" : "no-repeat",
                  "background-position" : "center",
                  "background-color": "#000",
            });
      }).mouseout(function(){
            $(".links").css("background", "#000");
      });
      $(".career-hover").mouseover(function(){
            $(".links").css({
                  "background" : `url("./assets/images/care.jpg")`,
                  "background-size" : "cover",
                  "background-repeat" : "no-repeat",
                  "background-position" : "center",
                  "background-color": "#000",
            });
      }).mouseout(function(){
            $(".links").css("background", "#000");
      });

});

var links = document.querySelector(".links ul");
var magnifier = document.getElementById("magnifier");


links.addEventListener('mousemove', function(ev){
      magnifier.style.opacity = "1";
      magnifier.style.transform = 'translateY('+(ev.clientY-50)+'px)';
      magnifier.style.transform += 'translateX('+(ev.clientX-50)+'px)';            
},false);

links.addEventListener('mouseout', ()=>{
      magnifier.style.opacity = "0";
});

// scrollbar indicator
const scroll = document.querySelector(".scrollbar");
window.addEventListener("scroll", ()=>{
      const maxHeight = window.document.body.scrollHeight - window.innerHeight;
      const percentage = ((window.scrollY) / maxHeight) * 100;
      scroll.style.top = percentage + "%";
});

// svg clock

// animate on scroll initialization
AOS.init();  

