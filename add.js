const button = document.querySelector('button')
const text = document.querySelector('textarea')


let local = JSON.parse(localStorage.getItem('twitte'))
if(local == null){
    let tt = ["i love Germany"]
localStorage.setItem("twitte" , JSON.stringify(tt))
}

button.addEventListener('click' , ()=>{
let newt = text.value
local.push(newt)
console.log(local);
localStorage.removeItem('twitte')
localStorage.setItem("twitte" , JSON.stringify(local))
location.href= "index.html"



})