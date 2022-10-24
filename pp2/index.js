function calculatePrice() {
    let x = document.getElementById("cant").value;
    let y = document.getElementById("color").value;
    let z = document.getElementById("precio").value;
    let error = false;
    if (x < 1 || z == 0 || y == 0) {
        error = true;
    }
        if (error == true){
            alert("Una variable no fue definida");
        } else {
            
                if (z == '128gb') {
                var PrecioFinal = 150000 * x;
            } 
                if (z == '256gb') {
                var PrecioFinal = 165000 * x;
            }
                if (z == '512gb') {
                var PrecioFinal = 180000 * x;
            }
            var theDiv = document.getElementById("result");
            var content = document.createTextNode("Cotización: " + PrecioFinal);
            theDiv.appendChild(content);
    }

    
}