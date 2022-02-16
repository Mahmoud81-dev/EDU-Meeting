
//plugins

AOS.init();




//pages button

let pagesBtn = document.querySelector("header .edu-meeting .pages");

let pages= document.querySelector("header .pages-btn")

//UL-header

let navUl=document.querySelector("header .edu-meeting ul");
let navLi=document.querySelectorAll("header .edu-meeting ul li a");



//add active class on click

navUl.addEventListener("click",(e)=>{

    // to check that click on target

    let check = e.target;
    

    if(check){

        navLi.forEach((m)=>{

            m.classList.remove('active-header');

            //to non display pages when click any li

            e.target.classList.add('active-header');

            //to remove pages if click any li
            if(check.dataset.mark != 'pages'){

                pages.classList.remove('show')
            }

        })

    }

})

//PAGES
pagesBtn.addEventListener('click',()=>{

    pages.classList.toggle('show')
  

})




//slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    // centeredSlides: true,
    spaceBetween: 40,
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "fraction",
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    //auto play

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },


    //responsive

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40
        },

        1020: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
  });
//===============================


// slider2

var swiper = new Swiper(".mySwiper2", {
    effect: "cards",
    grabCursor: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

  });













