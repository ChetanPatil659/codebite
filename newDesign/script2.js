var menu = document.querySelector('.menu')
var flag = true
document.querySelector(`.i`).innerHTML = `<i class="ri-menu-line" style="font-size: 20px;"></i>`
menu.addEventListener(`click`,function(){
    if(flag){
        var tl = gsap.timeline()
    .to('.menu',{
        left: 0,
        duration: 1,
        transition: 'ease-out'
    })
    .to(`.black`,{
        display: `block`,
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
        duration: 1,
        delay: -1
    })
    .to(`.svg`,{
        rotate: `90deg`,
        delay:-1
    })

    document.querySelector(`.i`).innerHTML = `<i class="ri-close-line" style="font-size: 30px;"></i>`

    flag = false
    }
    else{
        var tl2 = gsap.timeline()
        .to('.menu',{
            left: `-47%`,
            duration: 1,
            transition: 'ease-out'
        })
        .to(`.black`,{
            // opacity:0,
            display: `none`,
            delay:-1
        })
        .to(`.svg`,{
            rotate: `0deg`,
            delay: 1.5
        })
        document.querySelector(`.i`).innerHTML = `<i class="ri-menu-line" style="font-size: 20px;"></i>`

        flag = true
    }
})

var tl = gsap.timeline()

tl.to(`.card-wrapper`,{
    x: -window.innerWidth - 100,
    opacity: 1
})

// gsap.to(`.card`,{
//     scrollTrigger:{
//         trigger: `.card-wrapper`,
//         scrub:true,
//         start: `center center`,
//         end: `center top`
//     },
//     opacity: 1,
// })

ScrollTrigger.create({
    animation: tl,
    trigger: `.card-wrapper`,
    start: `center center`,
    end: `+=4500`,
    scrub: true,
    pin: true,
    // letterSpacing: `5px`
})


document.querySelector(`.about`).addEventListener(`click`, function(){
    window.scrollTo({
        top: document.querySelector(`.about-page`).getBoundingClientRect().top,
        behavior: `smooth`
    })
    // alert(document.querySelector(`.about-page`).offsetHeight)
})
var contact = document.querySelector(`.page4`)

document.querySelector(`.contact`).addEventListener(`click`, function(){
    window.scrollTo({
        top: document.querySelector(`.contact-page`).getBoundingClientRect().top ,
        behavior: `smooth`
    })
})

var home = document.querySelector(`.line-drawing0`)

document.querySelector(`.home`).addEventListener(`click`, function(){
    window.scrollTo({
        top: 0,
        behavior: `smooth`
    })
})

document.querySelectorAll(`.card`).forEach(function(elem){
    elem.addEventListener(`click`, function(){
        window.open(
        "/card/card.html", "_blank");
    })
})

var cursor = document.querySelector(`.cursor`)

window.addEventListener(`mousemove`, function(dets){
    gsap.to(`.cursor`,{
        left: dets.x - 20 + `px`,
        top: dets.y - 20 +`px`,
        duration: 0.3
    })

})
var cards = document.querySelectorAll(`.card`)

cards.forEach(function(elem){
    elem.setAttribute(`id`, `cursor-style`)
})

var curSty = document.querySelectorAll(`#cursor-style`)

curSty.forEach(function(elem){
    elem.addEventListener(`mouseenter`,function(dets){
        // console.log(dets)
        
        gsap.to(`.cursor`,{
            clipPath: `polygon(15% 15%, 50% 100%, 100% 50%)`,
            backgroundColor: `rgba(0, 0, 0, 0)`,
            backdropFilter: `invert(100%)`,
            height: `50px`,
            width: `50px`,

        })
        
    })

})

curSty.forEach(function(elem){
    elem.addEventListener(`mouseleave`,function(dets){
        // console.log(dets)
        gsap.to(`.cursor`,{
            clipPath: `circle(50% at 50% 50%)`,
            backgroundColor: `rgba(0, 0, 0, 0)`,
            backdropFilter: `invert(100%)`,
            height: `30px`,
            width: `30px`,
        })
    })
    
})

document.querySelector(`.login`).addEventListener(`click`, function(dets){
    window.open(`/login.html`, `_self`)
})

document.querySelector(`#cancel`).addEventListener(`click`, function(dets){
    history.back()
})

