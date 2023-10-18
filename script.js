const timeLine = gsap.timeline(); 




timeLine.from("#nav",{
    opacity:0, 
    duration:0.5,
    // delay:0.5 ,
}).from(".nav-item",{
    
    top:-100,
    opacity:1,
    duration:0.8,
    stagger:0.3,
}).from(".main-sub-left h1",{
     x:-100,
    opacity:0,
    duration:0.8 , 
    stagger:.3 ,
}).from(".main-right-bottom",{
    y:100,
    opacity:0,
    duration:.9,
}).from(".main-right img",{
    scale: 2, 
    opacity:0 ,
    duration:.8,
})


gsap.from(".box",{
    x:-2000, 
    rotate:360, 
    duration:1.2, 
    delay:.2,
    scrollTrigger:".box",
    stagger:.2,
    // repeat:-1, 
    // yoyo:true

})

gsap.from(".three-left-img",{
    scale:0 ,
    duration:1,
    delay:.5,
    scrollTrigger:".three-left-img",
})
gsap.from(".right-sub-text h1",{
    delay:.5 ,
    scale:0, 
    duration:1, 
    stagger:.3 ,
    scrollTrigger:".right-sub-text h1",
})
gsap.from(".right-sub-bottom",{
    delay:.1 ,
    scale:0, 
    duration:1, 
    stagger:.3,
    scrollTrigger:{
        trigger:".right-sub-bottom",
        scroller:'body',
        start:'top 50%'
    }
})

const tli = gsap.timeline(); 
gsap.from(".type1",{
    delay:.2,
    scale:0, 
    opacity:0,
    duration:2, 
    stagger:.3,
    scrollTrigger:".type1"
})
gsap.from(".type2",{
    delay:1,
    scale:0, 
    duration:3, 
    opacity:0,
    stagger:.3,
    scrollTrigger:".type1"
})

