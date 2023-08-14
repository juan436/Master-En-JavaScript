/*Indicar si un número es par o impar
1.Prompt
2.Validar Número
*/

let n;

do {
    n = prompt("Ingrese un número: ", 0);
    if(isNaN(n)){
        alert("Debe ingresar solamente números");
    }
}while(isNaN(n));

n = parseInt(n);

n%2==0 ? alert("El número ingresado es par") : alert("El número ingresado es impar");
