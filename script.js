var tl = gsap.timeline()

gsap.from(".nav h2,.menu,.log,.get",{
    y:-100,
    duration:1,
    delay:.5,
    opacity:0,
    stagger:.2
})

tl.from(".page1 h1",{
    y:100,
    opacity:0,
    stagger:.3,
    delay:1.3
})

tl.from(".img img",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:.2
})

tl.from(".page1 h5",{
    scale:0,
    opacity:0
})

tl.to(".page1 h5",{
    y:20,
    repeat:-1,
    duration:.7,
    yoyo:true

})