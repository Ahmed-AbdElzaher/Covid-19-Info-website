$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 60) {
            $('.navbar').addClass("fixed-top")
            $('.icon-top').fadeIn();
        }else{
            $('.navbar').removeClass("fixed-top")
            $('.icon-top').fadeOut();
        }
    });
    
    $('.color-faq').click(function() {
        $('.color-faq').removeClass('blue-border');
        $(this).addClass('blue-border');
    });
    $('.faq-text .item').first().show();
    
    $('.faq-boxs .color-faq').click(function(){
        let ListNumber = $(this).index();
        $('.faq-boxs .faq-text .item').hide();
        $('.faq-boxs .faq-text .item').eq(ListNumber).show();
    });

    $('.click1').click(function(){
        $('.faq-text ul li.click1').toggleClass('blue');
        $('.faq-text ul li .icon-plus').toggleClass('blue');
        $('.faq-text ul li .icon-minus').toggleClass('blue');
        $('.faq-text ul li.click1 .icon-plus').toggle();
        $('.faq-text ul li.click1 .icon-minus').toggle();
        $('.faq-text ul li.click1 + .ul-text').slideToggle();
    });
    $('.click2').click(function(){
        $('.faq-text ul li.click2').toggleClass('blue');
        $('.faq-text ul li.click2 .icon-minus').toggle();
        $('.faq-text ul li.click2 .icon-plus').toggle();
        $('.faq-text ul li.click2 + .ul-text').slideToggle();
    });    
    $('.click3').click(function(){
        $('.faq-text ul li.click3').toggleClass('blue');
        $('.faq-text ul li.click3 .icon-minus').toggle();
        $('.faq-text ul li.click3 .icon-plus').toggle();
        $('.faq-text ul li.click3 + .ul-text').slideToggle();
    });
    $('.click4').click(function(){
        $('.faq-text ul li.click4').toggleClass('blue');
        $('.faq-text ul li.click4 .icon-minus').toggle();
        $('.faq-text ul li.click4 .icon-plus').toggle();
        $('.faq-text ul li.click4 + .ul-text').slideToggle();
    });
    $('.click5').click(function(){
        $('.faq-text ul li.click5').toggleClass('blue');
        $('.faq-text ul li.click5 .icon-minus').toggle();
        $('.faq-text ul li.click5 .icon-plus').toggle();
        $('.faq-text ul li.click5 + .ul-text').slideToggle();
    });
    $('.click6').click(function(){
        $('.faq-text ul li.click6').toggleClass('blue');
        $('.faq-text ul li.click6 .icon-minus').toggle();
        $('.faq-text ul li.click6 .icon-plus').toggle();
        $('.faq-text ul li.click6 + .ul-text').slideToggle();
    });
    



})
// var scroll = new SmoothScroll('a[href*="#"]');
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300
});



AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


$(".number").counterUp({time:3000});
