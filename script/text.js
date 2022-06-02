const 
      discription_text = document.getElementById('discription__text'),
      discription = document.querySelector('.discription');
let   
      count = 0,
      count2 = 0,
      count3 = 0,
      i = 0,
      arr_span = [];
export function onScroll() { // запуск функции typeText когда скорлл будет на верхней границе блока discription
        const discription = document.getElementById(`discription`),
              posTop = discription.getBoundingClientRect().bottom;
        if(posTop<= window.innerHeight) {
          go(typeText,50)
          document.removeEventListener('scroll', onScroll);
        }

      }

function typeText(){ //функция для вывода текста в блок discription
  const
        text = 'HTML5/CSS3(Scss)/JavaScript/базовые знания Vue/базовые знания nodejs/FlexBox/Gulp/Адаптивная верстка/методология BEM/git',
        text_arr = text.split('/');
        let 
        arr = text_arr[count2].split('');
        if(count == arr.length-1){
          discription_text.innerHTML +=  `<span>${arr[count]}</span><br> `
          count = 0
          count2++
          if(count2 > text_arr.length -1){
            stop()
            go(color,100)
            return;
          }
          arr = text_arr[count2].split('')
        }
        if(arr[count] == ' '){
          discription_text.innerHTML += `&nbsp`
        }else{
          discription_text.innerHTML += `<span>${arr[count]}</span>`
        
        }
          count++
}

function color(){// функция изменения цвета span 
  for(let i = 0; i < discription_text.children.length; i++){
    if(discription_text.children[i].tagName == "SPAN"){
      (function(i) {
        setTimeout(function() { 
          discription_text.children[i].style.color = `rgb(${RandomColor(0,255)}, ${RandomColor(0,255)}, ${RandomColor(0,255)})` 
      }, 0.1 * i);
    })(i);
    }
    else{
      continue;
    }
  }
  stop()
  object()
}

function RandomColor(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function go(func,interval){
  window.timerId = window.setInterval(func, interval);
}

function stop(){
  window.clearInterval(window.timerId);
}
function object(){ // получения всех span и их ствойства, потом push в массив arr_li
    let span = document.querySelectorAll('#discription__text > span');
    for(let i =0 ; i < span.length; i++){
        let pt = {
          s: span[i].style,
          x: span[i].offsetLeft,
          y: span[i].offsetTop
      }
      arr_span.push(pt)
    }
    loop()
}

function update(){ //функция для распледения каждого span на определенное растояние 
  arr_span[count3].s.position = 'absolute'
  arr_span[count3].s.top = `${Random(discription.offsetTop,(discription.clientHeight+discription.offsetTop)-100)}px`;
  arr_span[count3].s.left = `${Random(discription.offsetLeft,(discription.clientWidth+discription.offsetLeft)-100)}px`;
  arr_span[count3].s.transform = `rotate(${Random(100,200)}deg)`
    count3++
}
function removeupadate(){// возвращения span в исходное положение
  setTimeout(function() {   
    if(i == arr_span.length){
      return
    }
    arr_span[i].s.position = 'absolute'
    arr_span[i].s.top = `${arr_span[i].y}px`;
    arr_span[i].s.left = `${arr_span[i].x}px`;
    arr_span[i].s.transform = `rotate(0deg) ` 
    i++;                    
    if (i < arr_span.length) {           
      removeupadate();           
    } 
  }, 500)
}
function loop(){// функция обновления фраймов
  requestAnimationFrame(loop)
  if(count3 == arr_span.length){
    removeupadate()
    return
  }
  update()
}
function Random(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}