$(function(){ $(".module").draggable({
    // cancel: '.module-text',
    stack: ".module",
    zIndex: 100,
}); }); 

$(".module").resizable({
    //함께 커질영역
    alsoResize:".module-head",
    //커질때 애니메이션 발생 
    animate :  true,
    animateDuration: 300,
    animateEasing:"swing",
    //비율유지
    aspectRatio: true,
    //마우스 hover 아닐때 핸들러 숨기기
    autoHide: true,
    //minHeight, maxHeight, minWidth, maxWidth 최소,최대 크기지정 
  });

const linktext = document.querySelectorAll(".linktext");
for(let i = 0; i<linktext.length ; i++)
{
    linktext[i].innerHTML = "https://INTRODUCE"+(i+1)+".jiho.kr";
}

