const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]"); 
const userContainer = document.querySelector(".weather-container");
const grandAccessContainer = document.querySelector("grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

let oldTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
oldTab.classList.add("current-tab");
 

function switchTab(newTab){
    if(newTab != oldTab){
        oldTab.classList.remove("current-tab");
        oldTab = newTab;    
        oldTab.classList.add("current-tab");
            if(!searchForm.classList.contains("active"))
            {
                userInfoContainer.classList.remove("active");
                grandAccessContainer.classList.remove("active");
                searchForm.classList.add("active");
            }
            else{
                searchForm.classList.remove("active");
                userInfoContainer.classList.remove("active");
                getFromSessionStorage();
            }
        }
}


userTab.addEventListener("click", ()=>{
    //switching to another tab
    switchTab(userTab);
});

searchTab.addEventListener("click",()=>{
   switchTab(searchTab);
});

//check if coordinates are already present in session storage
function getFromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        //agar local coordintes nhi mile
        grandAccessContainer.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localCoordinates);  
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates){
    const {lat,lon} = coordinates;
    //make grantContainer Invisible;
    grandAccessContainer.classList.remove("active");
    //makeloader visible
    loadingScreen.classList.add("active");

    //API call
    try{
       const response = await fetch(`https://api.openweather.org./data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
       const data = await response.json();
       loadingScreen.classList.remove("active");
       userInfoContainer.classList.add("active");
       renderWeatherInfo(data);
    }
    catch(err){
        loadingScreen.classList.remove("active");
    //hw
    }
}

function renderWeatherInfo(weatherInfo){
//firstly we have to fetch the elements
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const description = document.querySelector("[data-watherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temperature = document.querySelector("[data-temp]");
    const windSpeed = document.querySelector("[data-windSpeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");


}