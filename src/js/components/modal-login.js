let modal = document.getElementById("modal-login");
let btn = document.querySelectorAll(".btnlogin");
let span = document.getElementsByClassName("loginModal__close")[0];

function modalLogin() {
    function openModal(){
        console.log("open")
        modal.style.display = "block";
    }
    function closeModal(){
        modal.style.display = "none";
    }
    
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', openModal);
    }
    
    span.addEventListener('click', closeModal);
}


export {modalLogin}