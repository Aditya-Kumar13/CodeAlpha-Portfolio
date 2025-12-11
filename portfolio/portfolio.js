console.log("Aditya")

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
        markers:true,
        pin:true,
    }
})


gsap.to(".move-container", {
    xPercent: -50, 
    duration: 10, // Adjust speed here (higher is slower)
    repeat: -1,
    ease: "none",
});

// 2. Wheel Event
window.addEventListener("wheel", function(movement) {
    
    // Check if scrolling down (deltaY > 0)
    if (movement.deltaY > 0) {
        // Rotate arrow 180 degrees (Note the 'deg')
        // I targeted '.move img' because '.page3' was missing in your HTML
        gsap.to(".move img", {
            rotate: 270, 
            duration: 0.5
        });
        


        // OPTIONAL: If you want to reverse the marquee on scroll
        // gsap.to(".move-container", { timeScale: 1, duration: 1 });

    } else {
        // Reset rotation
        gsap.to(".move img", {
            rotate: 90,
            duration: 0.5
        });
        


        // OPTIONAL: If you want to reverse the marquee on scroll
        // gsap.to(".move-container", { timeScale: -1, duration: 1 });
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

    // 2. Calculate x/y inside the box (Mouse Global - Box Star
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


    // 2. Calculate x/y inside the box (Mouse Global - Box Star
    cursor.style.left=(movement.x- rection.left)+"px" ;
    cursor.style.top=(movement.y- rection.top)+"px";
})



var t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3 ",  // Triggers when the Title "PROJECTS" enters
        scroller: "body",
        
        // FIXED: Start at Middle (50%) -> End at Top (0%)
        // This gives you plenty of room to see the animation
        start: "top 50%", 
        end: "top 15%",    
        
        scrub: 2, // Smooths the movement
        markers: true // Keep this on to debug!
    }
});

t3.from(".page3 .section-title", {
    x: -100,      // Increased distance so movement is obvious
    opacity: 0,
    duration: 0.8   // Duration just sets the "ratio" of movement, not real time
    // REMOVED: delay: 5 (This was the killer)
});

t3.from(".page3 .paragraph", {
    x: 100,      // Increased distance so movement is obvious
    opacity: 0,
    duration: 2   // Duration just sets the "ratio" of movement, not real time
    // REMOVED: delay: 5 (This was the killer)
});


var t4 =gsap.timeline({
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"top 50%",
        end:"top 15%",
        scrub:2,
        markers:true
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