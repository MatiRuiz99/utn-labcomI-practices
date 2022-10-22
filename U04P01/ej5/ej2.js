function compara(){
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    if (x<y){
        alert(y + " es el num mas grande")
    } else if (x>y){
        alert(x + " es el num mas grande")
    } else {
        alert("los num son iguales")
    }
}