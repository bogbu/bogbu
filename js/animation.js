const uiWrap = document.querySelectorAll(".ui-wrap li");
const body = document.querySelector("body");

const moduleAll = document.querySelectorAll(".module");
// const module = document.querySelector(".module1");
// const module2 = document.querySelector(".module2");

for(let i = 0 ; i < uiWrap.length ; i++)
{
    uiWrap[i].addEventListener("click",(e)=>{
        e.preventDefault();
        for(let j=0; j<uiWrap.length ; j++)
        {
            uiWrap[j].classList.remove("click");
        }
        e.currentTarget.classList.add("click");

        if(uiWrap[i].classList.contains("click")==true)
        {

            for(let j=0; j<moduleAll.length ;j++)
            {
                moduleAll[j].classList.add("end");
            }
            // for(let j = 0 ; j<uiWrap.length; j++)
            // {
            //     const introeselect = document.querySelectorAll(".introduce");
            // }


            introduceeselect = document.querySelector(".introduce" + ( i + 1 ));
            introduceeselect.classList.add("start");
            for(let j=0; j<uiWrap.length ; j++)
            {
                body.classList.remove("bg"+(j+1));
            }
            body.classList.add("bg"+(i+1));
            if(introduceeselect.classList.contains("end"))
            {
                introduceeselect.classList.remove("end");

            }

        }
    });
}
uiWrap[0].addEventListener("click",()=>{

    if(module.classList.contains("end"))
    {
        module.classList.remove("end");
        module2.classList.remove("end");

    }
    if(!(module.classList.contains("start")))
    {
        module.classList.remove("end");
        module2.classList.remove("end");
    }
});
uiWrap[2].addEventListener("click",()=>{
    setTimeout(function() {
        document.querySelector(".introduce3-1").classList.add("start");
    }, 1000);

    if(document.querySelector(".introduce3-1").classList.contains("end"))
    {
        document.querySelector(".introduce3-1").classList.remove("end");

    }
    if(!(document.querySelector(".introduce3-1").classList.contains("start")))
    {
        document.querySelector(".introduce3-1").classList.remove("end");
    }
});

