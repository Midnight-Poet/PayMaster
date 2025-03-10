

let openMenuBtnContent = 'fa-light fa-grid-2-plus menu-btn'
let closeMenuBtnContent = 'fa-light fa-square-xmark menu-btn'
let popnav = document.querySelector('.res-nav')

let menuBtn = document.querySelector('.menu-btn')

let restFunc = () => {
    let x = 100
    for (let i = 0; i < popnav.children.length; i++) {
        x += 100
        gsap.set(popnav.children[i], {
            // opacity: 0,
            y: -x
        })
    }
}
restFunc()

document.addEventListener('resize', () => {
    restFunc()
    if (window.innerWidth > 800) {
        
    }
})


menuBtn.addEventListener('click', () => {
    let timeLine = gsap.timeline()
    if (menuBtn.className == openMenuBtnContent) {
        menuBtn.classList = closeMenuBtnContent
        timeLine.to('.res-nav', {
            display: 'flex',
            duration: 0.1
        }).to(popnav.children, {
            y: 0,
            // opacity: 1,
            duration: 1,
            stagger: {
                each: 0.1
            }
        })
        // gsap.from()

    } else {
        menuBtn.classList = openMenuBtnContent
        timeLine.to(popnav.children, {
            y: -350,
            duration: 1,
            stagger: {
                each: 0.1,
                from: 'end'
            }
        }).to(popnav, {
            display: 'none'
        })
    }
})

let rotate = document.querySelectorAll('.hey')
let num = 0

rotate[num].classList += ' active'

setInterval(() => {
    for (let i = 0; i < rotate.length; i++) {
        rotate[i].classList = 'hey'
    }
    rotate[num].classList +=  ' active'
    num += 1
    if (num == rotate.length) {
        num = 0
    }

}, 1500);





// Scr0ll Trigger Animation
gsap.registerPlugin(ScrollTrigger)

let text = document.querySelectorAll('.txt')
let subSections = document.querySelectorAll('.animate')
let pop = document.querySelectorAll('.pop')
let revealer = document.querySelector('.rotate')

ScrollTrigger.create({
    trigger: 'body',
    start: 'top -15%',
    toggleClass: {targets: '.side-nav', className: 'shoot'},
    duration: 1,

})
// gsap.set(revealer, {
//     rotate: '45deg',
//     x: 1000,
//     opacity: 0
// })
// let popp = gsap.utils.toArray(pop)
// popp.forEach( element => {
    
//     gsap.from(element.children, {
// 		scrollTrigger: {
// 			trigger: element.children,
// 			start: 'top 100%',
// 		markers: true,
//     },
// 		y: 200,
// 		opacity: 0,
// 		duration: 1,
// 	})
// })

// gsap.to(revealer, {
//     scrollTrigger: {
//         trigger: revealer,
//         start: 'top 70%'
//     },
//     rotate: '45deg',
//     x: 0,
//     opacity: 1,
//     duration: 1

// })
// gsap.from(revealer.parentElement.children[0].children, {
//     scrollTrigger: {
//         trigger: revealer,
//         start: 'top 60%'
//     },
//     y: 100,
//     filter: 'blur(20px)',
//     opacity: 0,
//     delay: 2,
//     duration: 1
// })

// text = gsap.utils.toArray(text)
// subSections = gsap.utils.toArray(subSections)

// text.forEach(element => {
    
//     gsap.from(element.children, {
//         scrollTrigger: {
//             trigger: element,
//             start: 'top 60%',
//             // markers: true
//         },
//         y: 100,
//         filter: 'blur(20px)',
//         opacity: 0,
//         duration: 1,
//         stagger: {
//             each: 0.3
//         }
//     })
// });

// subSections.forEach(element => {
    
//     gsap.from(element.children, {
//         scrollTrigger: {
//             trigger: element,
//             start: 'top 60%',
//             // markers: true
//         },
//         y: 100,
//         // filter: 'blur(20px)',
//         opacity: 0,
//         duration: 2,
//         stagger: {
//             each: 0.3
//         }
//     })
// });


