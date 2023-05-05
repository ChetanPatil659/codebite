var timel = gsap.timeline()


var deg = 30;
var num = 1

var stripes = document.querySelectorAll(`.stripe`)

stripes.forEach(function(val,ind){

    deg -=10;
    
    timel.to(`#circle`,{
        rotate: `${deg}deg`,
        duration: 0.3
    })


    timel.to(`.str${ind+1} .sec`,{
        marginLeft: `50px`,
        duration: 0.3,
        delay: -0.2,
        opacity:1
    })


    timel.to(`.str${ind+1} h4`,{
        fontSize: `4vw`,
        duration: 0.3,
        color: `black`,
        // fontSize: `60px`,
        
        delay: -0.2
    })

    timel.to(`.str${ind+1} .smcircle`,{
        backgroundColor: `#77ff00`,
        duration: 0.5,
        delay: -0.5,
        scale: 2
    })
    

    if(ind != 4){
        timel.to(`.str${ind+1} h4`,{
            fontSize: `2vw`,
            color: `#acacac`,
            duration:0.5,
            delay: -0.3
        })
    }


    if(ind != 4){
        timel.to(`.str${ind+1} .sec`,{
            marginLeft: `0px`,
            // delay: 
            duration: 0.5,
            delay: 0.5,
            opacity: 0.3
        })
    }


    timel.to(`.str${ind+1} .smcircle`,{
        backgroundColor: `#777777`,
        duration: 1,
        delay: -1,
        scale: 1
    })


})


timel.to(`.str1,.str2,.str3,.str4,.circle`, {
    // scale: 5,
    opacity: 0,
    duration: 0.5
})

timel.to(`.str5 h4`, {
    // scale: 5,
    opacity: 0,
    duration: 1
})
timel.to(`#preloader`,{
    display: `none`
    // top: `-100% `
})

