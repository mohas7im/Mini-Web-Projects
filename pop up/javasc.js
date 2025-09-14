let popUp=document.getElementById("popup");
let submitBtn=document.getElementById("submit");
let okBtn=document.getElementById("ok-btn");    

function openPopup(){
    popUp.classList.add("open-popup");
}

function closePopup(){
    popUp.classList.remove("open-popup");
}

submitBtn.addEventListener("click",openPopup);
okBtn.addEventListener("click",closePopup);