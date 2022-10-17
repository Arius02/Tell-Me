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
let myObj = {}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b6898047dmsh1ae70660b50e013p1019bdjsnbda44bb4a578',
		'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
	}
};

async function getTable() {
  let req= await fetch('https://api-football-beta.p.rapidapi.com/standings?season=2022&league=39', options)
  let res = await req.json()
  console.log(res.response[0])
  let myLeague = res.response[0].league
  let standing = myLeague.standings[0]
  let html = ``
  // for(let i =0 ; i<standing.length ; i++){
  //   html += ` <div class="row mt-4 border-bottom">
  //               <div class="col-4">
  //                 <div class="d-flex align-items-center">
  //                   <img src="${myLeague.flag}" class="logo" alt="">
  //                   <h6 class="mt-1 ms-3 fw-bold">${myLeague.country}</h6>
  //                 </div>
  //               </div>
  //               <div class="col-4">
  //                 <div class="d-flex align-items-center">
  //                   <img src="${myLeague.logo}" class="logo-1 rounded-circle " alt="">
  //                   <p class="fw-semibold mt-1 ms-3">${myLeague.name}</p>
  //                 </div>
  //               </div>
  //               <div class="col-4">
  //                 <div class="d-flex justify-content-end">
  //                   <select >
  //                     <option value="">2022</option>
  //                     <option value="">2021</option>
  //                     <option value="">2020</option>
  //                     <option value="">2019</option>
  //                   </select>
  //                 </div>
  //               </div>
  //             </div>
  //             <div class="row">
  //               <div class="col-12">
  //                 <div class="row mt-2">
  //                   <div class="col-5">
  //                     <div>
  //                       <p>club</p>
  //                     </div>
  //                   </div>
  //                   <div class="col-7">
  //                     <div class="row">
  //                       <div class="col-1 text-center"> MP</div>
  //                       <div class="col-1 text-center">W</div>
  //                       <div class="col-1 text-center">D</div>
  //                       <div class="col-1 text-center">L</div>
  //                       <div class="col-1 text-center">GF</div>
  //                       <div class="col-1 text-center">GA</div>
  //                       <div class="col-1 text-center">GD</div>
  //                       <div class="col-1 text-center">Pts</div>
  //                       <div class="col-4 text-center">Last 5</div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div class="col-5">
  //                 <div>
  //                   <p></p>
  //                 </div>
  //                 </div>
  //                 <div class="col-7">
  //                     <div class="row">
  //                       <div class="col-1 text-center"> 10</div>
  //                       <div class="col-1 text-center">8</div>
  //                       <div class="col-1 text-center">3</div>
  //                       <div class="col-1 text-center">3</div>
  //                       <div class="col-1 text-center">42</div>
  //                       <div class="col-1 text-center">44</div>
  //                       <div class="col-1 text-center">32</div>
  //                       <div class="col-1 text-center">43</div>
  //                       <div class="col-4 text-center">WWWDW</div>
  //                     </div>
  //                 </div>
  //             </div>`
  // }
  document.getElementById("table").innerHTML= html
}


getTable()