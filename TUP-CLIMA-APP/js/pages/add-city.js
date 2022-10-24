$(document).ready(function () {
    $('#Success').hide();
    $('#Warning').hide();
    $('#Error').hide();
});






$(document).ready(function () {
    
    $('#send').click(function () {
        //Captura de datos escrito en los inputs
        var nom = document.getElementById("agregociudad").value;
        for (var i in localStorage) {
            if (localStorage[i] === nom){
                $('#Warning').show();
            } else {
                function getCitiesFromLocalStorage() {
                    let cities = localStorage.getItem("CITIES");
                    if (cities) {
                        cities = JSON.parse(cities);
                    } else {
                        cities = [];
                    }
                    return cities;
                }
                
                function addNewCityToLocalStorage(newCity) {
                    let cities = getCitiesFromLocalStorage();
                    cities.push(newCity);
                    localStorage.setItem(“CITIES”, JSON.stringify(cities));
                }
                //Guardando los datos en el LocalStorage
                localStorage.setItem("agregociudad", nom);
                //Limpiando los campos o inputs
                document.getElementById("agregociudad").value = ""; 
                $('#Success').show();
            }
        }  
        });
});
