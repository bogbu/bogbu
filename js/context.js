const content = "CREATE DEVELOPER = IT's ME!";
const text = document.querySelector(".title");
const module = document.querySelector(".module1");
const module2 = document.querySelector(".module2");
const module3 = document.querySelector(".module3");
/*more-menu*/
// const menu = document.querySelector(".menu");
const uiBtn = document.querySelector(".ui-wrap");

// menu.addEventListener("click",(e)=>{
//     e.preventDefault();
//     if(uiBtn.classList.contains('on'))
//     {
//         uiBtn.classList.remove("on");
//     }
//     else
//     {
//         uiBtn.classList.add("on");
//     }
// });

/*more-menu*/
const muted = document.querySelector(".muted");
let index = 0;

window.addEventListener("load",()=>{
    const timer = setInterval(function typing(){
        text.textContent+= content[index++];
        if(index > content.length-1){
            clearInterval(timer);
        }
    }, 200);

    setTimeout(function() {
        module.classList.add("start");
        setTimeout(function() {
            module2.classList.add("start");
            setTimeout(function() {
                module3.classList.add("start");
                setTimeout(function() {
                    uiBtn.classList.add("on");
                    document.querySelector(".alect").style.opacity = 1;
                },300);
            },700);
        },500);
    }, 200*(content.length+1));

    setInterval(function() {
        muted.classList.toggle("on");
        // if(muted.classList.contains("on")){
        //     console.log(muted.classList.contains("on"));
        //     muted.classList.remove("on");
        // }
        // else {
        //     console.log(muted.classList.contains("on"));
        //    muted.classList.add("on");
        // }
    }, 3000);
    


});