

var h5Timer=document.querySelector(".line h5")
var grow=0;
setInterval(()=>{
     if(grow<100){
        h5Timer.innerHTML= grow++;
      console.log(grow);
     }
     else{
        h5Timer.innerHTML= grow;
     }
},40)


var tl=gsap.timeline()

tl.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.6,
    delay:0.5
})

tl.from("#line1-part1",{
    opacity:0
})

tl.to(".line h2",{
animationName:"anime",
opacity:1

})

tl.to("#loader",{
opacity:0,
duration:0.2,
delay:4.7
})

tl.from("#page1",{
  y:1600,
  delay:0.2,
  opacity:0,
  ease:Power4,
  duration:0.5
})

tl.to("#loader",{
    display:"none"
})