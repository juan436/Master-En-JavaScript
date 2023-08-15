/*Calculadora
1-Pedir 2 números y validarlos
2-Sumar, restar, multiplicar y dividir ambas cifras en alert, consola y body*/

let n1, n2;

do {
    n1 = prompt("Ingrese un número: ", 0);
    n2 = prompt("Ingrese otro número: ", 0);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Debe ingresar solamente números");
    }
}while (isNaN(n1) || isNaN(n2));

n1 = parseFloat(n1);
n2 = parseFloat(n2);

const suma = n1 + n2;
const resta = n1 - n2;
const multiplicacion = n1 * n2;
const division = n1 > n2 ? n1 / n2 : n2 / n1;
const mensaje = `Para los números ${n1} y ${n2} tenemos que... \nLa suma es: ${suma} \nLa resta es: ${resta} \nLa multiplicación es: ${multiplicacion} \nLa división es: ${division}`;

alert(mensaje);
console.log(mensaje);
document.write(`Para los números ${n1} y ${n2} tenemos que <br>La suma es: ${suma} <br>La resta es: ${resta} <br>La multiplicación es: ${multiplicacion} <br>La división es: ${division}`);