// Simple Version Dark-Mode
const html = document.querySelector("html")
const darkMoon= document.querySelector(".ph-moon")


darkMoon.addEventListener("click", function (){

    if(darkMoon){

        html.classList.toggle("dark-mode")
    }
    
})

// DarkMode with LocaStorage

// const theMoon = document.querySelector("#clickMoon")


// if(localStorage.getItem("darkMode") === null){
//     localStorage.setItem("darkMode", "false")
// }
