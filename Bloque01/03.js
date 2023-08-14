/*Utilizando un bucle, mostrar la media y la suma de los númereos ingresados.
El bucle termina cuando se ingresa un número negativo.*/

let suma = 0;
let i = 0;
let n;


do{

    do{
        n = prompt("Ingrese un número (Si ingresa el número negativo, el ciclo terminará): ");
        if(isNaN(n)){
            alert("Debe ingresar solamente números");
        }
    }while(isNaN(n));

    n = parseFloat(n);

    if(n>=0){
        suma = suma + n;
        i++;
    }
    
}while(n>=0);

alert("Se ingresaron " + i + " números mayores o iguales a 0");
alert("La suma de los números positivos ingresados es: " + suma);
alert("La media de los numeros positivos ingresados es: " + (suma/i));

