// document.getElementById('burger').addEventListener('click', () => {
//     document.querySelector('.nav_header').style.right = '0'
// })

// setTimeout(() => {
//     var swiper = new Swiper(".slider_clients .slides", {
//         loop: true,
//         watchSlidesProgress: true,
//         slidesPerView: 4,
//         spaceBetween: 60,
//         autoplay: {
//             delay: 2000,
//         },
//     });
// }, 500);

// let taille = 4;
// document.addEventListener('DOMContentLoaded', () => {
//     console.log(window.innerWidth);
//     if (window.innerWidth < 768) {
//         slidesPerView(2)
//     } else {
//         slidesPerView()
//     }
// })



// function slidesPerView(params = 4) {
//     var swiper = new Swiper(".swiper", {
//         loop: true,
//         spaceBetween: 20,
//         slidesPerView: params,
//         // navigation: {
//         //     nextEl: ".blocs .swiper-button-next",
//         //     prevEl: ".blocs .swiper-button-prev",
//         // },
//         pagination: {
//             // el: "",
//             clickable: true,
//         },
//     });
// }

// var swiper = new Swiper(".swiper", {
//     // loop: true,
//     effetct: "fade",
//     spaceBetween: 20,
//     slidesPerView: 4,
//     // navigation: {
//     //     nextEl: ".blocs .swiper-button-next",
//     //     prevEl: ".blocs .swiper-button-prev",
//     // },
//     pagination: {
//         // el: "",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });


var swiper = new Swiper(".swiper_search", {
        // loop: true,
        effetct: "fade",
        spaceBetween: 20,
        slidesPerView: 4,
    pagination: {
        // type: "progressbar"
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// var swiper = new Swiper(".swiper_Latest_releases", {
//     // loop: true,
//     effetct: "fade",
//     spaceBetween: 20,
//     slidesPerView: 4,
// pagination: {
//     // type: "progressbar"
//     clickable: true,
// },
// navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
// },
// autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
// },
// });

// var swiper = new Swiper(".swiper_genre", {
//     // loop: true,
//     effetct: "fade",
//     spaceBetween: 20,
//     slidesPerView: 4,
// pagination: {
//     // type: "progressbar"
//     clickable: true,
// },
// navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
// },
// autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
// },
// });