function suma() {
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    let sum = x+y;
    if (sum < 1){
        sum = sum * -1;
        alert(sum + " es el resultado de la suma de " + x + ' y ' + y);
    } else {
        alert(sum + " es el resultado de la suma de " + x + ' y ' + y);
    }
}