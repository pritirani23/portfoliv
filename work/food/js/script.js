let menu = document.querySelector('#menu-bar');  //icon
//console.log(menu)
let navbar = document.querySelector('.navbar');
//console.log(navbar)

menu.onclick = () =>{
    menu.classList.toggle('fa-times-rectangle-o');
    navbar.classList.toggle('active')
}

menu.onscroll = () =>{
    menu.classList.remove('fa-times-rectangle-o');
    navbar.classList.remove('active')
}


/*
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
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
  });  */

  // loader 

  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut();