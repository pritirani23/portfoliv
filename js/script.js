$(document).ready(function(){
  $('#menu').click(function(){
      $(this).toggleClass('fa-times-rectangle');
      $('header').toggleClass('toggle');
  });
  
  $(window).on('scroll load', function(){
      $('#menu').removeClass('fa-times-rectangle');
      $('header').removeClass('toggle');

  });
});  


  // loader 
  function loader(){
    document.querySelector('.loader').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut();  
