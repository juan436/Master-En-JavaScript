/*Pedir dos números e indique el número mayor, el número menor o si son iguales.*/


let n1 = prompt("Ingrese un número: ");
let n2 = prompt("Ingrese otro número: ");

if(isNaN(n1) || isNaN(n2)){

    alert("Debe ingresar solamente números");

}else{

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    if(n1>n2) {
        alert(n1 + " es mayor que " + n2);
    }else if(n1<n2){
        alert(n1 + " es menor que " + n2);
    }else{
        alert(n1 + " es igual que " + n2);
    }

}