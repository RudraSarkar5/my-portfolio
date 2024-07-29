const hambar = document.querySelector("#ham-bar");
const menuBar = document.querySelector(".menu-bar-details");


hambar.addEventListener("click",(e)=>{
    console.log(e.target);
    console.log("clicked");
    menuBar.classList.toggle("menu-bar");
},false)