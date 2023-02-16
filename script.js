gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();



gsap.from("#nav h1,#nav h4,#nav button",{
    delay:0.5,
    y:-30,
    opacity:0,
    duration:0.5,
    stagger:0.25
})

gsap.from("#page1-content h1,#page1-content p,#page1-content button",{
    delay:0.5,
    y:30,
    opacity:0,
    duration:1,
    stagger:0.30
})

gsap.from("#page2 h1,#page2 #box",{
    delay:0.3,
    x:100,
    opacity:0,
    duration:2,
    stagger:0.50,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top 8%"
    }
})

gsap.from("#page3 h1",{
    delay:1,
    x:100,
    opacity:0,
    duration:2,
    stagger:0.50,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 30%"
    }
})

gsap.from("#page3 .elem-2",{
    delay:0.5,
    y:100,
    opacity:0,
    duration:1.5,
    stagger:0.50,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 30%%"
    }
})

gsap.from("#page4 #line1,#page4 img",{
    delay:0.2,
    y:100,
    opacity:0,
    duration:2,
    stagger:0.50,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        // markers:true,
        start:"top 40%"
    }
})

gsap.from("#page5 #line2",{
    delay:1,
    x:100,
    opacity:0,
    duration:2,
    stagger:0.50,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        // markers:true,
        start:"top 50%"
    }
})
gsap.from("#page5 .elem-5",{
    delay:1,
    y:100,
    opacity:0,
    duration:2,
    stagger:0.50,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        // markers:true,
        start:"top 50%"
    }
})

gsap.from("#page6 #box6 h1,#page6 #box6 .elem-6,#page6 #box6 button",{
    delay:1,
    y:100,
    opacity:0,
    duration:2,
    stagger:0.50,
    scrollTrigger:{
        trigger:"#page6",
        scroller:"#main",
        // markers:true,
        start:"top 60%"
    }
})

gsap.from("#page7 #box7,#page7 .elem-7,#page7 p",{
    delay:1,
    y:100,
    opacity:0,
    duration:2,
    
    scrollTrigger:{
        trigger:"#page7",
        scroller:"#main",
        // markers:true,
        start:"top 80%"
    }
})