function pnn(){
    let x = document.getElementById("x").value;
    
    if (x<0){
        alert(x + " es negativo")
    } else if (x>0){
        alert(x + " es positivo")
    } else {
        alert("Es nulo")
    }
}