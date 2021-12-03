
const liHeader = document.querySelector(".liHeader");
const li = document.querySelectorAll(".direction");
const liBody = document.querySelectorAll(".tabs");
const tabBody = document.querySelector(".headerWrapper");

for(let i = 0; i < li.length; i++){
    li[i].addEventListener("click", ()=>{
        liHeader.querySelector(".liActive").classList.remove("liActive");
        li[i].classList.add("liActive");
        tabBody.querySelector(".active").classList.remove("active");
        liBody[i].classList.add("active");
    })
}








