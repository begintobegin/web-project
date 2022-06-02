import {Startrotate} from '../index.js'
$("document").ready( function(){ // загрузка контена
  setTimeout(function(){
    window.scrollTo(0, 0);
}, 1);
})
$(".portfolio").on('click', '.portfolio__btn', async function(){ 
  let 
  image = $(this).prev().find('#i').attr('src'); // получения src картинки
  await ajax('page/block.html','.portfolio','html')// загрузка контента
  // console.log(image)
  // await ajax(image,".portfolio__image",'image/png')
  $('#i').attr('src',`https://begintobegin.github.io/web-project/${image}`);// добавление src
  $('.portfolio__image').css({//свойства
    "margin-top": "100px",
  })
  $('.portfolio__colum').css({
    "display": "flex",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
    "padding": "50px 0px 50px 0px"
  })
  $('.portfolio__text').css({
    "font-family": 'Inter',
    "font-style": "normal",
    "line-height": "160%",
    "color": "white",
    "margin-top": "50px",
  });
  $('.porfolio__arrow').css({
    "position": "absolute",
    "top": "0",
    "left": "0",
    "cursor": 'pointer',
  })
});
$(".portfolio").on('click', '.porfolio__arrow',  function(){// возврат на начальный фрейм
  $('.porfolio__arrow').css({
    "display": "none",
  })
  ajax('page/portfolio.html','.portfolio','html')
})
async function ajax(url,elem,dataType){ //функция загрузки контента
  await $.ajax({
    url: `https://begintobegin.github.io/web-project/${url}`, 
    type: 'GET',
    dataType: dataType,
    beforeSend: function(){
        $(elem).empty(); 
    },
    success: function(responce){  
            $(elem).append(responce);
    },
    error: function(){
        alert("error");            
    }
});
Startrotate()
}