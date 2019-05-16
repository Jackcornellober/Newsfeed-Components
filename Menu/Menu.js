let num = 0
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  // menu.classList.toggle('menu--open')
  
  if (num === 0) {
   TweenMax.to(menu, 2,{x:0}); num++;}
  
  else {TweenMax.to(menu, 2,{x:-450});num--} 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu.

menuButton.addEventListener('click', (event) => toggleMenu())

TweenMax.to(menu, 0,{x:-450})