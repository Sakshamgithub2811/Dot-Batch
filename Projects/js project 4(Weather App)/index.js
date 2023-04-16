const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]"); 
const userContainer = document.querySelector(".weather-container");
const grandAccessContainer = document.querySelector("grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

let currentTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
currentTab.classList.add("current-tab");
 

function switchTab(){
    if()
}


userTab.addEventListener("click", ()=>{
    //switching to another tab
    switchTab();
});

searchTab.addEventListener("click",()=>{
   switchTab();
});