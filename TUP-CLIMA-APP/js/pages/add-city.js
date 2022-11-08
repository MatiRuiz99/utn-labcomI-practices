function ocultarAlerts() {
    document.getElementById('Error').style.display = "none";
    document.getElementById('Warning').style.display = "none";
    document.getElementById('Success').style.display = "none";
}
function mostrarAlertError() {
    document.getElementById('Error').style.display = "block";
}
function mostrarAlertWarning() {
    document.getElementById('Warning').style.display = "block";
}
function mostrarAlertSuccess() {
    document.getElementById('Success').style.display = "block";
}

function addCity(){
    let newCity = document.getElementById('agregociudad').value;
    let cities = getCitiesFromLocalStorage();
    if (cities.indexOf(newCity)>=0){
        ocultarAlerts();
        mostrarAlertWarning();
    } else {
        cities.push(newCity);
        ocultarAlerts();
        mostrarAlertSuccess();
    }
    localStorage.setItem("CITIES",JSON.stringify(cities));
}

const llamarDatos= async () => {
    try {
        let nuevciu = document.getElementById("agregociudad").value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${nuevciu}&appid=${apiKey}&units=metric&lang=es`;
        const res = await fetch(url);
        if (res.ok) {
            const datos = await res.json();
            addCity();
            console.log(datos);
        } else {
            console.log(res.status); // 404
            ocultarAlerts();   
            mostrarAlertError();    
        }
    } catch (err) {
        console.log(err);
    }
};

function getCitiesFromLocalStorage(){
    let cities = localStorage.getItem("CITIES");
    if (cities){
        cities = JSON.parse(cities);
    }else{
        cities=[];
    }
    return cities;
}
