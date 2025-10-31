const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from('#nav',{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
     .to('.boundingelem',{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: .2
    })
     .from('#herofooter',{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut

    }) 
}
function circleMouseFollower(){
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}     

circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".element").forEach(function (element) {
  var rotate = 0;
  var diffrot = 0;

  element.addEventListener("mouseleave", function (dets) {
    gsap.to(element.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  element.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - element.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(element.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: .5 / diff,
      left: dets.clientX - (element.offsetWidth / 7),
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
    });
  });
});


// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 5,
//   spaceBetween: 30,
//   loop: true,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     320: { slidesPerView: 2 },
//     768: { slidesPerView: 3 },
//     1024: { slidesPerView: 5 }
//   }
// });




