//let nombre = prompt ("Ingrese su nombre")
//console.log (nombre + correo)
let nombre;
let correo;
let cantidadPiezas;
let usuario;

alert ("Lista para hacer tu RECREO?! Hacele lugar a tu creatividad! Empecemos!" );

class Usuario {
    constructor(nombre, correo, evento, cantidadPiezas) {
        this.nombre = nombre;
        this.correo = correo;
        this.evento = evento;
        this.cantidadPiezas = cantidadPiezas;
    }
}

const paula = new Usuario ("Paula Villamil", "paulivillamil@gmail.com", 3, 2);
const gloria = new Usuario ("Gloria Llorente", "gloriallorente@gmail.com", 1, 3);

const arrayUsuarios = [paula, gloria];

console.log(arrayUsuarios);


function menu() {
    alert("Sobre que evento querés recibir información?");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Workshops \n 2) Kids \n 3) Team Building \n 4) Otros"));
    return opcion;
}

function workshops() {
    nombre = prompt("Ingresa tu nombre y apellido");
    correo = prompt ("Ingresa tu correo elctrónico");
    cantidadPiezas = prompt ("Ingresa la cantidad de piezas que desea reservar")
    usuario = new Usuario(nombre, correo, cantidadPiezas, 1);
    arrayUsuarios.push(usuario);
    console.log(arrayUsuarios);
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
}


function kids () {
    nombre = prompt("Ingresa tu nombre y apellido");
    correo = prompt ("Ingresa tu correo elctrónico");
    cantidadPiezas = prompt ("Ingresa la cantidad de piezas que desea reservar")
    usuario = new Usuario(nombre, correo, cantidadPiezas, 2);
    arrayUsuarios.push(usuario);
    console.log(arrayUsuarios);
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
}


function teamBuilding () {
    nombre = prompt("Ingresa tu nombre y apellido");
    correo = prompt ("Ingresa tu correo elctrónico");
    cantidadPiezas = prompt ("Ingresa la cantidad de piezas que desea reservar")
    usuario = new Usuario(nombre, correo, cantidadPiezas, 3);
    arrayUsuarios.push(usuario);
    console.log(arrayUsuarios);
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
}


function otros () {
    nombre = prompt("Ingresa tu nombre y apellido");
    correo = prompt ("Ingresa tu correo elctrónico");
    cantidadPiezas = prompt ("Ingress la cantidad de piezas que desea reservar")
    usuario = new Usuario(nombre, correo, cantidadPiezas, 4);
    arrayUsuarios.push(usuario);
    console.log(arrayUsuarios);
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
}

console.log (cantidadPiezas)

let opcion = menu(); 

switch(opcion) {
    case 1: 
        workshops();
        break;
    case 2: 
        kids();
        break;
    case 3: 
        teamBuilding();
        break;
    case 4:
        otros();
        break;
    default: 
        alert("Por favor ingresa un número del 1 al 4")
        break;
}