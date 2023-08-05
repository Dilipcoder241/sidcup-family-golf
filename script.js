const cursor = document.getElementById('cursor');
const cursorBlur = document.getElementById('cursorBlur');
const h4All = document.querySelectorAll('#nav h4');

document.addEventListener("mousemove" , function(dot){
    
    console.log(dot.clientX,dot.clientY);
    cursor.style.top = dot.y-10 +"px";
    cursor.style.left = dot.x -10+'px';
    cursorBlur.style.top = dot.y - 200 +"px";
    cursorBlur.style.left = dot.x - 200+'px';

})

h4All.forEach(element => {
    element.addEventListener("mouseenter" , ()=>{
        cursor.style.backgroundColor = 'transparent';
        cursor.style.border = "1px solid white";
        cursor.style.scale = 4.3;
        element.style.color = '#a2d419';
    })
    element.addEventListener("mouseleave" , ()=>{
        cursor.style.backgroundColor = '#a2d419';
        cursor.style.border = "none";
        cursor.style.scale = 1;
        element.style.color = '#fff';
    })
});

gsap.to('#nav' ,{
    backgroundColor: "#000",
    height:'20%',
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
} )

gsap.to('#main' , {
    backgroundColor:'#000',
    scrollTrigger:{
        targget:'#main',
        scroller:"body",
        // markers:true,
        start:"top -20%",
        end:"top -80%",
        scrub:2

    }
})

gsap.from('#about-us img , #about-us-in' ,{
    y:50,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        trigger:'#about-us',
        scroller:'body',
        // markers:true,
        start:"top 50%",
        end:'top 30%',
        scrub:2
    }
})

gsap.from('.card' , {
    scale:0.6,
    scrollTrigger:{
        trigger: "#card-container",
        scroller:'body',
        start:'top 60%',
        end:'top 58%',
        // markers:true,
        scrub:2
    }
})

gsap.from('#colon1' , {
    y:-80,
    x:-80,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:'top 85%',
        end:'top 80%',
        // markers:true,
        scrub:4
    }
})

gsap.from('#colon2' , {
    y:80,
    x:80,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:'top 85%',
        end:'top 80%',
        // markers:true,
        scrub:4
    }
})

gsap.from("#page4 h1" , {
    y:70,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:'top 80%',
        end:"top 75%",
        scrub:2
    }
})