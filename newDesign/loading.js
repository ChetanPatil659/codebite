var tl = gsap.timeline();

tl.to(`.img1`, {
    scale: 1,
    duration: 1,
    opacity: 1,
    // easing: `0.5 cubic-bezier(.46,.1,.73,.83)`,
    top: `15%`,
    left: `40%`
})

tl.to(`.img2`, {
    scale: 1,
    duration: 1,
    opacity: 1,
    delay: -0.5,
    // transition: `0.5 cubic-bezier(.46,.1,.73,.83)`,
    top: `30%`,
    left: `25%`,
})

tl.to(`.img3`, {
    scale: 1,
    duration: 1,
    opacity: 1,
    delay: -0.5,
    // easing: `0.5 cubic-bezier(.46,.1,.73,.83)`,
    top: `30%`,
    left: `57%`
})

tl.to(`.img4`, {
    scale: 1,
    duration: 1,
    opacity: 1,
    delay: -0.5,
    // transition: `0.5 cubic-bezier(.46,.1,.73,.83)`,
    top: `55%`,
    left: `45%`
})

tl.to(`.img5`, {
    scale: 1,
    duration: 1,
    opacity: 1,
    delay: -0.5,
    // transition: `0.5 cubic-bezier(.46,.1,.73,.83)`,
    top: `45%`,
    left: `55%`
})

tl.to(`.img6`, {
    scale: 1,
    duration: 1,
    opacity: 1,
    delay: -0.5,
    // transition: `0.5 cubic-bezier(.46,.1,.73,.83)`,
    top: `20%`,
    left: `30%`
})

tl.to(`.img7`, {
    scale: 1.2,
    duration: 1,
    opacity: 1,
    delay: -0.5,
    // transition: `0.5 cubic-bezier(.46,.1,.73,.83)`,
})

tl.to(`.path`, {
    opacity: 1,
    duration: 4,
    delay: -0.5,
    strokeDashoffset: 0,
})
tl.to(`.overlay`, {
    opacity: 1,
    duration: 3,
    delay: -4,
})
tl.to(`.loading-animation`, {
    top: `-100%`,
    duration: 1.5,
    delay: -1.5,
    transition: `0.5 ease-out`
})
tl.to(`.underlay`, {
    top: `-100%`,
    duration: 1.5,
    delay: -1,
    // transition: `0.5 cubic-bezier(.24,.26,1,.7)`,
    backgroundColor: `#421201`
})
