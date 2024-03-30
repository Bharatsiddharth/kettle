gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



document.addEventListener("mousemove" , function(dets){
    gsap.from(".cursur" ,{
        top:dets.y,
        left:dets.x,
        // duration:1
    })
})














gsap.to(".content-page1 h1",{
    duration: 0.7,
    x:50,
    y: 50,
    ease: "power2.out",
    scale:1.3,
    // stagger: 1,
    duration:1,
    repeat: -1,
    yoyo: true,
    opactiy:1,
    color:"white",
    // delay:2
})

// gsap.to(".content-page1 ,.content-page1>h1",{
//     delay:3,
//     opacity:0
// })







// // Store original positions
// var originalPositions = gsap.utils.toArray("h1").map(word => {
//     return { x: word.offsetLeft, y: word.offsetTop };
//   });

//   // Create a GSAP timeline
//   var tl = gsap.timeline();

//   // Animate each word sequentially
//   gsap.utils.toArray("h1").forEach((word, index) => {
//     tl.to(word, {
//       duration: 0.5,
//       opacity: 1,
//       y: -50,
//       ease: "bounce.out"
//     });
//   });

//   // Reverse the animation and return to original position
//   tl.to("h1", {
//     duration: 0.5,
//     opacity: 0,
//     y: 0,
//     ease: "power2.in",
//     onComplete: function() {
//       tl.from("h1", {
//         duration: 0.5,
//         opacity: 1,
//         y: function(index) {
//           return originalPositions[index].y;
//         },
//         x: function(index) {
//           return originalPositions[index].x;
//         },
//         ease: "power2.out"
//       });
//     }
//   });



function page3(){
    
let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page3 video",
        scroller:".main",
        // markers:"true",  
        start:"-70% 50%",
        end:"-70% 50%",
        scrub:2
    }
});


tl3.from(".page3 video",{
    duration:0.5,
    x:-500,
    y:500,
    
})

tl3.from(".page3 h3",{
    duration:0.5,
    y:500,
    opacity:0
})


tl3.from(".page3 h1",{
    duration:0.5,
    y:300,
    opacity:0
})


}



let rightelem = document.querySelectorAll(".page3,.page4,.page5,.page7");

rightelem.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        console.log(elem.childNodes);
        elem.childNodes[1].style.opacity = 1;
        // elem.childNodes[1].style.scale = 1;
    })

    elem.addEventListener("mouseleave", function(){
        console.log("why hello");
        elem.childNodes[1].style.opacity = 0;
    })

    elem.addEventListener("mousemove", function(dets){
       gsap.to(elem.childNodes[1],{
        x:dets.x - elem.getBoundingClientRect().x-50,
        y:dets.y - elem.getBoundingClientRect().y-20
       })
    })
})



page3();

function page4(){
    
let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".page4 video",
        scroller:".main",
        // markers:"true",
        start:"20% 80%",
        end:"20% 50%",
        scrub:1
    }
});


tl4.from(".page4 video",{
    duration:0.5,
    x:-500,
    // y:500,
    
})

tl4.from(".page4 h3",{
    duration:0.5,
    y:500,
    opacity:0
})


tl4.from(".page4 h1",{
    duration:0.5,
    y:300,
    opacity:0
})

}

page4();



function page5(){
    
let tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:".page5 video",
        scroller:".main",
        // markers:"true",
        start:"-60% 90%",
        end:"-60% 50%",
        scrub:2
    }
});


tl5.from(".page5 video",{
    duration:1,
    x:-500,
    y:500,
    
})

tl5.from(".page5 h3",{
    duration:0.5,
    y:500,
    opacity:0
})


tl5.from(".page5 h1",{
    duration:0.5,
    y:300,
    opacity:0
})
}

page5();


function page6(){
        
let tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:".page6 video",
        scroller:".main",
        // markers:"true",
        start:"-60% 90%",
        end:"-60% 50%",
        scrub:2
    }
});


tl6.from(".page6 h3",{
    duration:0.5,
    y:500,
    opacity:0
})


tl6.from(".page6 h1",{
    duration:0.5,
    y:500,
    opacity:0
})



tl6.from(".page6 video",{
    duration:1,
    y:500,
    opacity:0
    
})


}

page6();


function page7(){
    
let tl7 = gsap.timeline({
    scrollTrigger:{
        trigger:".page7 .img",
        scroller:".main",
        // markers:"true",
        start:"-80% 90%",
        end:"-80% 50%",
        scrub:2
    }
});


tl7.from(".page7 h3",{
    duration:0.5,
    y:500,
    opacity:0
})


tl7.from(".page7 h1",{
    duration:0.5,
    y:300,
    opacity:0
})

tl7.from(".page7 .img",{
    duration:0.5,
    x:800,
    y:600,
    
})
}

page7();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




// var vedio = {"kettle"}





// <div class="page2">
// <h1>We love our clients’ ambition. <br> They  love our repeat success.</h1>

// <div class="content-page2">
//     <div class="card1">
//         <img src="https://wearekettle.com/img/home/logos/apple-logo.svg" alt="">
//         <h3>Shhhhhhh. What happens in <br> Cupertino stays in Cupertino.</h3>
//     </div>
//     <div class="card2">
//         <img src="https://wearekettle.com/img/home/logos/natgeo-logo.svg" alt="">
//         <h3>Modernizing a 130-year-old digital brand for today's homo sapiens.</h3>
//         <button>VIEW CASE STUDY</button>
//     </div>

//     <!-- <div class="card3">
//         <img src="https://wearekettle.com/img/home/logos/natgeo-logo.svg" alt="">
//         <h3>Modernizing a 130-year-old digital brand for today's homo sapiens.</h3>
//         <button>VIEW CASE STUDY</button>
//     </div> -->

   

// </div>

// </div>


// .page2 h1{
//     font-size: 4vw;
//     background-color: #4A03B7;
//     padding-top: 4vw;
//     padding-left: 6vw;
//     font-weight: 100;
// }

// .content-page2{
//     height: 70vh;
//     min-width: 100%;
    
//     background-color: antiquewhite;
//     padding: 1px;
//     display: flex;
    
// }

// .card1{
//     height: 60vh;
//     width: 25%;
//     background-color: #aea5b7;
//     margin-left: 6vw;
//     margin-top: 2vw;
//     border-radius: 20px;
//     background-image: url(https://kettle-2016.s3.amazonaws.com/img/home/partners/apple_lg_2x.jpg);
//     background-position: top;
//     background-size: contain;
//     background-repeat: no-repeat;
//     color: black;
// }
// .card1 img{
//     padding: 1.5vw;
//     padding-left: 2vw;
// }
// .card1 h3{
//     font-size: 1.4vw;
//     padding-left: 2vw;
//     font-weight: 100;
// }


// .card2,.card3{
//     height: 60vh;
//     width: 25%;
//     background-color: #aea5b7;
//     margin-left: 6vw;
//     margin-top: 2vw;
//     border-radius: 20px;
//     background-image: url(https://kettle-2016.s3.amazonaws.com/img/home/partners/natgeo_lg_2x.jpg);
//     background-position: top;
//     background-size: contain;
//     background-repeat: no-repeat;
//     color: rgb(255, 255, 255);
// }

// .card2 img{
//     padding: 1.5vw;
//     padding-left: 2vw;
// }
// .card2 h3{
//     font-size: 1.5vw;
//     padding-left: 2vw;
//     font-weight: 100;
//     padding-right: 2vw;
// }

// .card2 button{
//     z-index: 999;
//     top: 90%;
//     left: 42%;
//     font-size: 1vw;
//     padding: 0.5vw 1.2vw;
//     border-radius: 50px;
//     font-weight: 100;
//     font-family: monospace;
//     margin-top: 11vw;
//     margin-left: 2vw;
//     background-color: rgba(255, 255, 255, 0.904);
// }

// .card3{
//     background-image: url(https://kettle-2016.s3.amazonaws.com/img/home/partners/amex_lg_2x.jpg);
// }