/*Tabla de multiplicar de un número introducido por pantalla*/

let n;

do{
    n = prompt("Ingrese un número: ", 1);
    if(isNaN(n)) alert("Debe ingresar solamente números");
    
}while(isNaN(n));

n = parseInt(n);

for(let i=0; i<=10; i++){
    document.write(`${n} x ${i} = ${n*i}<br>`);
}