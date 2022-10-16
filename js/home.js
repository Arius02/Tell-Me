"use strict"
let logo =   document.querySelector(".navbar-brand img")
let slide = document.getElementById("slide-item")
let staticImage= "img/logo-dark.png"
let staticDesc = "mesh 3aref a2ol eh bs el maoqe3 makatabsh description :("

document.addEventListener("DOMContentLoaded",function(){
    document.documentElement.setAttribute('data-theme', 'light')
})

document.getElementById("darkMode").onclick = function () {

let currentTheme = document.documentElement.getAttribute('data-theme')
let switchToTheme = currentTheme === 'light' ? 'dark' : 'light'

document.documentElement.setAttribute('data-theme', switchToTheme)
if(document.querySelector("[data-theme='dark']")){
  logo.src = "img/logo-dark.png"
} else {
  logo.src = "img/logo-no-background.png"
}}

document.getElementById("weather").addEventListener("click", function(){
            window.location.href = 'weather.html';
})
document.getElementById("sports").addEventListener("click", function(){
            window.location.href = 'sports.html';
})
document.getElementById("home").addEventListener("click", function(){
            window.location.href = 'home.html';
})
document.getElementById("contact").addEventListener("click", function(){
            window.location.href = 'news.html';
})