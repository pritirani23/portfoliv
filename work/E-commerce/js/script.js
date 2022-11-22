$(document).ready(function(){  // search

    $('#search, .fa-search').mouseenter(function(){
        $('.logo').hide();
    });

    $('#search, .fa-search').mouseleave(function(){
        $('.logo').show();
    });



    $('.fa-bars').click(function(){  //bar
        $('.navbar').toggle();  
        $(this).toggleClass('fa-times');
    });

    $('.navbar, .navbar a').click(function(){
        $('.navbar').hide();
        $('.fa-bars').removeClass('fa-times');
    });

});


// swiper 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0:{
       slidesPerView: 1,
    },

    650:{
       slidesPerView: 2,
    },


    1020:{
       slidesPerView: 3,
    },

 },
});


// counter 
      let  conutDate  = new Date('aug 1, 2022 00:00:00').getTime();

      function conutDown(){
        let now  = new  Date().getTime();
        gap = now - conutDate;

        let seconds = 1000;
        let minutes  =  seconds * 60;
        let hours = minutes * 60;
        let day  =  hours * 24;
        let d = Math.floor(gap / (day));
        let h = Math.floor((gap % (day))  / (hours));
        let m = Math.floor((gap % (hours))  / (minutes));
        let s = Math.floor((gap % (minutes))  / (seconds));

        document.getElementById('days').innerText = d;
        document.getElementById('hours').innerText = h;
        document.getElementById('minutes').innerText = m;
        document.getElementById('seconds').innerText = s;
      }

      setInterval(function(){
        conutDown()
      },1000);


      /* js for product  */
      
      var productimg  = document.getElementById("product-img");
      //console.log(productimg)
      var smalimg   = document.getElementsByClassName("smal-img");

      smalimg[0].onclick   = function()
        {
          productimg.src = smalimg[0].src;
        }

        smalimg[1].onclick   =  function()
        {
          productimg.src = smalimg[1].src;
        }

        smalimg[2].onclick   =  function()
        {
          productimg.src = smalimg[2].src;
        }

        smalimg[3].onclick   =  function()
        {
          productimg.src = smalimg[3].src;
        }

        smalimg[4].onclick   =  function()
        {
          productimg.src = smalimg[4].src;
        }

 
        window.addEventListener('scroll', function(){  //scroll 
          let header = document.querySelector('header')
           //console.log(navbar)
      
          if(window.pageYOffset  >= 40){
              header.classList.add('sticky');
             // console.log("hell")
      
          } else{
              header.classList.remove('sticky')
          }
      
      });
    
  