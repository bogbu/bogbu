const closeBtn = document.querySelectorAll(".modulebtn .close");
const introcloseBtn = document.querySelectorAll(".introduce .close");
const introclose31 = document.querySelector(".introduce3-1 .close");

// const module = document.querySelector(".module1");
// const module2 = document.querySelector(".module2");
// const module3 = document.querySelector(".module3");

for(let i = 0 ; i < closeBtn.length ; i++)
{
    closeBtn[i].addEventListener("click",(e)=>{
        e.preventDefault();
        const moduleselect = document.querySelector(".module" + ( i + 1 ));
        moduleselect.classList.add("end");
    });
}

for(let i = 0 ; i < introcloseBtn.length ; i++)
{
    introcloseBtn[i].addEventListener("click",(e)=>{
        e.preventDefault();
        introduceeselect = document.querySelector(".introduce" + ( i + 1 ));
        introduceeselect.classList.add("end");
        body.classList.remove("bg"+(i+1));
    });

}

introclose31.addEventListener("click",(e)=>{
    e.preventDefault();
    const introcloseBtn31 = document.querySelector(".introduce3-1");
    introcloseBtn31.classList.add("end");
});

const introduce2btn = document.querySelectorAll(".introduce2 .introduce-text .left ul li");
const sectionWrap = document.querySelector(".introduce2 .introduce-text .right");

for(let i = 0; i<introduce2btn.length ; i++)
{
    introduce2btn[i].addEventListener("click",(e)=>{
        e.preventDefault();
        for(let j = 0; j <introduce2btn.length ; j++)
        {
            introduce2btn[j].classList.remove("on");
        }

        if(!(introduce2btn[i].classList.contains("on")))
        {
            introduce2btn[i].classList.add("on");
        }
        sectionWrap.style.transform = "translateY(-" + (33.33333333*i) + "%)";

    });

}

const introduce3Img = document.querySelector(".introduce3-1 .introduce-text .right");
const portfolioBtn  = document.querySelectorAll(".portfolioBtn > li");

for(let i = 0 ; i<portfolioBtn.length ; i++)
{
    portfolioBtn[i].addEventListener("mouseover",(e)=>{
        e.preventDefault();
        document.querySelector(".introduce3-1 .introduce-text .text-wrap").style.display = "none";
        for(let j=0; j<portfolioBtn.length ; j++)
        {
            portfolioBtn[j].classList.remove("on");
            introduce3Img.classList.remove("bg"+j);
        }
        portfolioBtn[i].classList.add("on");
        introduce3Img.classList.add("bg"+i);
    });

    portfolioBtn[i].addEventListener("mouseout",(e)=>{
        e.preventDefault();
        document.querySelector(".introduce3-1 .introduce-text .text-wrap").style.display = "flex";
        for(let j=0; j<portfolioBtn.length ; j++)
        {
            portfolioBtn[j].classList.remove("on");
            introduce3Img.classList.remove("bg"+j);
        }
    });
}