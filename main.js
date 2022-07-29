let generalbtn= document.querySelector(".generalbtn")
let allbtn  = document.querySelector(".allbtn")
let btn1 =document.createElement("button")
let btn2 =document.createElement("button")
let btn3 =document.createElement("button")
let pidv =document.createElement("div")
let p =document.createElement("p")
let p1 =document.createElement("p")
let p2 =document.createElement("p")



allbtn.appendChild(pidv)
pidv.appendChild(p)
pidv.appendChild(p1)
pidv.appendChild(p2)
pidv.classList.add("pidiv")



btn1.classList.add("btn1")
btn2.classList.add("btn2")
btn3.classList.add("btn3")
allbtn.appendChild(btn1)
allbtn.appendChild(btn2)
allbtn.appendChild(btn3)
window.addEventListener("keydown",function(e){
    allbtn.style.display="block"
    generalbtn.style.display="none"
    p1.innerHTML="event.keycode"
    p.innerHTML="event.key"
    p2.innerHTML="eventcode"
   btn1.innerHTML=e.key
   btn2.innerHTML=e.keyCode
   btn3.innerHTML=e.code

    
    
})