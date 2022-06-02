import {onScroll}  from './text.js'
export function Startrotate(){ // функция повора карточек
  const    cards = document.querySelectorAll('.portfolio__image');
  for(let i = 0 ; i < cards.length; i++){
    cards[i].addEventListener('mousemove',rotate);
    cards[i].addEventListener('mouseout',stopRotate)
  }
  
  function rotate(event){
  const height = this.offsetHeight/2;
  this.style.transform = 'rotateX('+ -(event.offsetY - height)/5 +'deg) rotateY('+ -(event.offsetX - height)/5 +'deg)'
  }
   function stopRotate(event){
    this.style.transform = 'rotate(0)'
  }
}
Startrotate()
document.addEventListener('scroll', onScroll); // события которая запускает функцию onScrolll




