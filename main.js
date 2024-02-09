// let quote = document.querySelector(".display-5");
// let form = document.querySelector("form");
// let h1=document.querySelector(".display1")
// let h2=document.querySelector(".display2");
// let p=document.querySelector("p");
// let input=document.querySelector("input");
// let img=document.querySelector("img")

// const fetchQuote = async () => {
//   const response = await fetch("https://quotable.io/random");
//   const data = await response.json();
//   quote.innerText = data.content + " - " + data.author;
// };

// setInterval(() => {
//   fetchQuote();
// }, 10000);


// const getWeather = async(e) => {
//   e.preventDefault();
//   try{
// const response =  await fetch(
    
//   `https://api.weatherapi.com/v1/current.json?key=1251c57f94ad433c82471238232712&q=${input.value}&aqi=yes`);
  

//  const data = await response.json();
//   h1.innerText = data.current.temp_c;
//   h2.innerText = data.location.name;
//   p.innerText = data.current.condition.text;
//   img.setAttribute("src", data.current.condition.icon);
//   fetchQuote();
  
// } catch {
//   window.alert("Invalid City Name");
// }

// form.reset();

// };
// form.addEventListener("submit", getWeather);

// // let quote = document.querySelector(".display-5");
// // let form = document.querySelector("form");
// // let input = document.querySelector("input");
// let h1 = document.querySelector(".display-1");
// let h2 = document.querySelector(".display-2");
// let p = document.querySelector("p");
// let img = document.querySelector("img");
// let h3= document.querySelector(".display-3");




// const fetchQuote = async () => {
//   const response = await fetch("https://quotable.io/random");
//   const data = await response.json();

//   quote.innerText = data.content + " - " + data.author;
// };

// setInterval(() => {
//   fetchQuote();
// }, 1000);

// const getWeather = async (e) => {
//     e.preventDefault();
//     try {
//     const response = await fetch(
//       `https://api.weatherapi.com/v1/current.json?key=1251c57f94ad433c82471238232712&q=${input.value}&aqi=yes`
//     );
//     // console.log(response);
//      const data = await response.json();
//         // console.log(data);
       
//     //  getWeather();
//     h1.innerText = data.current.temp_c +`°C`;
  
//     h2.innerText = data.location.name;
//     h3.innerText = data.current.humidity + ` %` + `humidity`;
//     h6.innerText=data.current.wind_kph;
//     img.setAttribute('src', data.current.condition.icon)
//     p.innerText = data.current.condition.text;
     
//     // console.log(data.current);
      
    
//     }
//     catch(error) 
//      {
//         window.alert("invaild city name ");
//      }
//     form.reset();
//     fetchQuote();
//   };
//   form.addEventListener("submit", getWeather);
 let quote = document.querySelector(".display-5");
let form = document.querySelector("form");
let input = document.querySelector("input");
let h1 = document.querySelector(".display-1");
let h2 = document.querySelector(".display-2");
let p = document.querySelector("p");
let img = document.querySelector("img");
let h3 = document.querySelector(".display-3")
let h6= document.querySelector(".display-4")
let btnSearch= document.querySelector("#btnSearch")

// const fetchQuote = async () => {
//   const response = await fetch("https://quotable.io/random");
//   const data = await response.json();
//   quote.innerText = data.content + " - " + data.author;
// };

// setInterval(() => {
//   fetchQuote();
// }, 10000);
const d = new Date();
quote.innerText=d

// document.getElementById("demo").innerHTML = d;

const getWeather = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=1251c57f94ad433c82471238232712&q=${input.value}&aqi=yes`
    );
    const data = await response.json();
    h1.innerText = data.current.temp_c +`°C`;
    h2.innerText = data.location.name;
    h3 .innerText = data.current.humidity +`%`+`humidity`
   p.innerText = data.current.condition.text;
    h6.innerText=data.current.wind_kph +`kph`

  
  
    img.setAttribute("src", data.current.condition.icon);
    // fetchQuote();
    d();
  } catch {
    window.alert("Invalid City Name");
  }

  form.reset();
};

form.addEventListener("submit", getWeather);


