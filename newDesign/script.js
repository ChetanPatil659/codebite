//  landing page animations start ---->

gsap.timeline({
        scrollTrigger: {
            trigger: `.middle`,
            scrub: true,
            start: `200% 200%`,
            end: `100% 0%`
        }
    })
    .from(`.front-img1`, {
        left: `50%`,
        scale: 1
    })
    .from(`.triangle`, {
        clipPath: `polygon(100% 100%, 100% 100%, 100% 100%)`,
        transition: `linear`
    })
    .to(`.triangle`, {
        clipPath: `polygon(0% 0%, 50% 0%, 0% 100%)`,
        transition: `linear`
    })
    .to(`.triangle`, {
        clipPath: `polygon(0% 0%, 0% 0%, 0% 0%)`,
        transition: `linear`
    })




gsap.timeline({
        scrollTrigger: {
            trigger: `.middle`,
            scrub: true,
            start: `200% 200%`,
            end: `100% 0%`
        }
    })
    .from(`.front-img2`, {
        left: `87%`,
        scale: 0.8
    })
    .from(`.middle`, {
        clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 100% 100%, 0% 100%)`,
        transition: `linear`
    })
    .to(`.middle`, {
        clipPath: `polygon(0% 0%, 100% 0%, 40% 0%, -10% 100%, 0% 100%)`,
        transition: `linear`
    })
    .to(`.middle`, {
        clipPath: `polygon(0% 0%, 100% 0%, -10% 0%, -10% 0%, 0% 100%)`,
        transition: `linear`
    })



// particle animation ---->

gsap.to(`.particle`, {
    scrollTrigger: {
        trigger: `.particle`,
        start: `top top`,
        end: `215% top`,
        pin: true
    },
})

gsap.to(`.particle2`, {
    scrollTrigger: {
        trigger: `.particle2`,
        start: `top top`,
        end: `bottom top`,
        pin: true,
    },
})

//

// about-us ---->

gsap.to(`.service2`,{
    scrollTrigger: {
        trigger: `.services >div`,
        // markers: true,
        start:`top 60%`,
        end: `top 30%`,
        scrub: 3
    },
    left: `75%`,
    
})

gsap.to(`.service1`,{
    scrollTrigger: {
        trigger: `.services >div`,
        // markers: true,
        start:`top 60%`,
        end: `top 30%`,
        scrub: 3
    },
    right: `75%`,
    
})

gsap.to(`.service3`,{
    scrollTrigger: {
        trigger: `.services >div`,
        // markers: true,
        start:`top 40%`,
        end: `top 10%`,
        scrub: 3
    },
    right: `75%`,
    
})

gsap.to(`.service4`,{
    scrollTrigger: {
        trigger: `.services >div`,
        // markers: true,
        start:`top 40%`,
        end: `top 10%`,
        scrub: 3
    },
    left: `75%`,
    
})