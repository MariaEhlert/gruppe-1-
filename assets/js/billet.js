const btn = document.querySelectorAll(".btn")
const msg = document.querySelectorAll(".hidden-msg")
 
for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener("click" , (event) => {
        event.preventDefault();
        event.target.parentNode.parentNode.parentNode.querySelector(".hidden-msg").classList.toggle("active")
    })
 
 
}