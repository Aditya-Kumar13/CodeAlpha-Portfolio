
var t1=gsap.timeline()

t1.from("nav",{
    y:-50,
    duration:1,
    delay:0.8,
})

gsap.from("nav h1",{
    opacity:0,
    duration:0.5,
    delay:1.5,
})
gsap.from("nav .subnav",{
    opacity:0,
    duration:0.5,
    delay:1.5,
})


t1.from(".page1 .headline",{
    opacity:0,
    x:-50,
    duration:1,
    
})

t1.from(".page1 .subheadline",{
    opacity:0,
    x:-50,
    duration:1,
})

t1.from(".page1 p",{
    opacity:0,
    x:-50,
    duration:1,
})

t1.from(".page1 button",{
    opacity:0,
    
    duration:1,
})

var t2 =gsap.timeline()

t2.from(".page1 .main-avatar",{
    opacity:0,
    y:-50,
    duration:1,
    delay:1,
})

t2.from(".page1 .jspic",{
    opacity:0,
    duration:0.8,
    
})
t2.from(".page1 .reactpic",{
    opacity:0,
    duration:0.8,
    
})
t2.from(".page1 .htmlpic",{
    opacity:0,
    duration:0.8,
    
})
t2.from(".page1 .csspic",{
    opacity:0,
    duration:0.8,
    
})


gsap.to(".page2 h1",{
    transform:"translate(-240%)",
    color: "#21385cff",
    
    scrollTrigger:{
        trigger:".page2 ",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:3,
        pin:true,
    }
})


gsap.to(".move-container", {
    xPercent: -50, 
    duration: 10, 
    repeat: -1,
    ease: "none",
});

window.addEventListener("wheel", function(movement) {
    
    if (movement.deltaY > 0) {
        gsap.to(".move img", {
            rotate: 270, 
            duration: 0.5
        });

    } else {
        gsap.to(".move img", {
            rotate: 90,
            duration: 0.5
        });
        


    }
});



var path= "M 0 80 Q 295 80 590 80"
var finalpath ="M 0 80 Q 295 80 590 80"

var string = document.querySelector(".stringeffect")

string.addEventListener("mousemove",function(det) {
    path = `M 0 80 Q ${det.offsetX} ${det.offsetY} 590 80`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.5,
        ease:"power3.out"
    })
})


string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:2,
        ease:"elastic(1,0.1)",
    })
})



var cont = document.querySelector(".project1")
var curs = document.querySelector(".projectpic")

cont.addEventListener("mousemove",function(movement){
    var rect = cont.getBoundingClientRect();
    curs.style.display="flex";

    curs.style.left=(movement.x- rect.left)+"px" ;
    curs.style.top=(movement.y- rect.top)+"px";
})


cont.addEventListener("mouseleave",function(movement){

    curs.style.display="none";

    
})


const page4btn = document.querySelector(".page4btn");

page4btn.addEventListener("mouseenter",function() {
    gsap.to(curs,{
        scale:0,
        opacity:0,
    })
})


page4btn.addEventListener("mouseleave",function() {
    gsap.to(curs,{
        scale:1,
        opacity:1,
    })
})


function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString(); 
    document.getElementById('time-display').innerText = timeString;
}

updateClock();
setInterval(updateClock, 1000);




var conter = document.querySelector(".magic")
var cursor = document.querySelector(".cursor")

conter.addEventListener("mousemove",function(movement){
    var rection = conter.getBoundingClientRect();

    cursor.style.left=(movement.x- rection.left)+"px" ;
    cursor.style.top=(movement.y- rection.top)+"px";
})



var t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3 ",  
        scroller: "body",
        
        start: "top 50%", 
        end: "top 15%",    
        
        scrub: 2, 
    }
});

t3.from(".page3 .section-title", {
    x: -100,      
    opacity: 0,
    duration: 0.8   
});

t3.from(".page3 .paragraph", {
    opacity: 0,
    duration: 2   
});


var t4 =gsap.timeline({
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"top 50%",
        end:"top 15%",
        scrub:2,
        
    }
})

t4.from(".page4 .projectheading",{
    x:-100,
    opacity:0,
    duration:0.8
})

t4.from(".page4 .project1",{
    x:-50,
    opacity:0,
    duration:2
})

t4.from(".page4 .project2",{
    x:-50,
    opacity:0,
    duration:2
})

t4.from(".page4 .project3",{
    x:-50,
    opacity:0,
    duration:2
})



var t5=gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:".page5",
        start:"top 90%",
        end:"top 70%",
        scrub:3,
        
    }
})

t5.from(".page5",{
    y:180,
    
    duration:1
})
