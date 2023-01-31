let nombre = prompt ("Ingrese su nombre")
let correo = prompt ("ingrese su correo elctrónico")
console.log (nombre + correo)

let cantidadPiezas = prompt ("Ingrese la cantidad de piezas que desea reservar")
console.log (cantidadPiezas)

if (cantidadPiezas == 0)
{
    alert ("Ingrese un número mayor a 0");
    cantidadPiezas = prompt ("Ingrese la cantidad de piezas que desea reservar");
};

while (cantidadPiezas > 0 )
{
    if (cantidadPiezas <= 5)
    {
        alert ("El precio final de su compra es de " + (cantidadPiezas*180));
    }
    else {
        alert ("El precio final de su compra es de " + (cantidadPiezas*160));
    }
    break;

};

