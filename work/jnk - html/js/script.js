
let menu = document.querySelector('#menu')  //icon
//console.log(menu)
let navbar = document.querySelector('.nav-items')
//console.log(navbar)

menu.onclick = () =>{
    menu.classList.toggle('fa-window-close');
    navbar.classList.toggle('active')
}
