let modal = document.getElementById("modal-login");
let btn = document.getElementById("btnlogin");
let span = document.getElementsByClassName("loginModal__close")[0];

function openModal(){
    console.log("open")
    modal.style.display = "block";
}
function closeModal(){
    modal.style.display = "none";
}
btn.addEventListener('click', openModal);
span.addEventListener('click', closeModal);