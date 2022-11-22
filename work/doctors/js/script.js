window.addEventListener('scroll', function(){  //scroll 
    let header = document.querySelector('header')
     //console.log(navbar)

    if(window.pageYOffset  >= 40){
        header.classList.add('sticky');
       // console.log("hell")

    } 
    else{
        header.classList.remove('sticky')
    }

});


window.onscroll = () =>{     //button 
    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }

    else{
        document.querySelector('#scroll-top').classList.remove('active');
    }
}


let menu = document.querySelector('#menu')  //icon
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-window-close');
    navbar.classList.toggle('active')
}


$('.count').counterUp({  //counter 
    delay: 10,
    time: 1000
});


 let fullImgBox = document.getElementById("fullImg-box")  // imgages gallay
 //console.log(fullImgBox)

 let fullImg  = document.getElementById("fullImg")
 //console.log(fullImg)

  function openFullImg(pic){
      fullImgBox.classList.add("activ")
      fullImg.src = pic;
  }

  function  closeFullImg(){
    fullImgBox.classList.remove("activ")

  }


  let btn = document.querySelector('.btn');  // video button 
  btn.onclick =  function(){
      btn.classList.add('activ')
  }


  // accordions 

  let  accordions = document.querySelectorAll('.accordion-container .accordion');
  accordions.forEach(acco =>{
      acco.onclick = () =>{
          acco.classList.add('active');
      }
  })
  
     


  // Swiper JS 
  // Initialize Swiper 
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints:{
         0:{
            slidesPerView: 2,
         },

         200:{
            slidesPerView: 1,
         },


         800:{
            slidesPerView: 2,
         }

      }
    });


  
let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")
let button4 = document.querySelector(".button4")
let button5 = document.querySelector(".button5")



let  box1 = document.querySelector(".box1")
let  box2 = document.querySelector(".box2")
let  box3 = document.querySelector(".box3")
let  box4 = document.querySelector(".box4")
let  box5 = document.querySelector(".box5")


button1.addEventListener('click', function(){
    box1.classList.add("active")
    box2.classList.remove("active")
    box3.classList.remove("active")
    box4.classList.remove("active")
    box5.classList.remove("active")

    button1.classList.add("active-button")
    button2.classList.remove("active-button")
    button3.classList.remove("active-button")
    button4.classList.remove("active-button")
    button5.classList.remove("active-button")
})


  
button2.addEventListener('click', function(){
    box2.classList.add("active")
    box1.classList.remove("active")
    box3.classList.remove("active")
    box4.classList.remove("active")
    box5.classList.remove("active")


    button2.classList.add("active-button")
    button1.classList.remove("active-button")
    button3.classList.remove("active-button")
    button4.classList.remove("active-button")
    button5.classList.remove("active-button")
})


button3.addEventListener('click', function(){
    box3.classList.add("active")
    box1.classList.remove("active")
    box2.classList.remove("active")
    box4.classList.remove("active")
    box5.classList.remove("active")

    button3.classList.add("active-button")
    button1.classList.remove("active-button")
    button2.classList.remove("active-button")
    button4.classList.remove("active-button")
    button5.classList.remove("active-button")
})
  


button4.addEventListener('click', function(){
    box4.classList.add("active")
    box1.classList.remove("active")
    box2.classList.remove("active")
    box3.classList.remove("active")
    box5.classList.remove("active")

    button4.classList.add("active-button")
    button1.classList.remove("active-button")
    button2.classList.remove("active-button")
    button3.classList.remove("active-button")
    button5.classList.remove("active-button")
})
  

button4.addEventListener('click', function(){
    box5.classList.add("active")
    box1.classList.remove("active")
    box2.classList.remove("active")
    box3.classList.remove("active")
    box4.classList.remove("active")


    button5.classList.add("active-button")
    button1.classList.remove("active-button")
    button2.classList.remove("active-button")
    button3.classLis.remove("active-button")
    button4.classList.remove("active-button")
})
  