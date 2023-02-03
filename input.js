//Adding event listener to submit form for weather data 

const form = document.querySelector(".top-banner form");
    form.addEventListener ("submit", e => {
        e.preventDefault();
        const inputVal = input.value;
    })


//Performing Ajax request using Personal API key

const apiKey = "2f9271df87b5da3ebe220fa3b68bfeed";
const inputVal = input.value;

const url = "https://api.openweathermap.org/data/2.5/weather?q={inputVal}&appid={apiKey}&units=metric"


fetch(url)
    .then(response => response.json())
    .then(data=> {
        //
    })

.catch(()=> {
    msg.textContent = "Please serach for a valid city"
    
})

