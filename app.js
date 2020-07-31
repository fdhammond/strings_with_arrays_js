/* Strings Js */
/*
let mensaje = 'Hello from Guayerd';


console.log(mensaje.toUpperCase());
console.log(mensaje.toLowerCase());
console.log(mensaje.length);
//word position.
console.log(mensaje.indexOf('from'));
//replace text
console.log(mensaje.replace('from', 'to'));
//cut some string
console.log(mensaje.slice(9, 14));
//split string
let changeText = mensaje.split(" ");
//join string
console.log(changeText.join("|"));

for (let i = 0; i < mensaje.length; i++) {
    console.log(mensaje[i]);
}
*/

/*
 Dado el siguiente texto CSV (Comma Separated Value) con este FORMATO:
 Nombre, Apellido, DNI, Fecha de Nacimiento, email
 let persona = "Hugo,Perez,34888333,10/09/1990,hperez@unmail.com";
 1 - Mostrar en pantalla: NOMBRE, APELLIDO (Mayusculas)
 2 - Mostrar en pantalla: Nombre (email)
 */

/*
let persona = "Hugo,Perez,34888333,10/09/1990,hperez@unmail.com";
let arrayPersona = persona.split(",");


console.log(arrayPersona[0].toUpperCase() + ' ' + arrayPersona[1].toUpperCase());
console.log(arrayPersona[0] + ' (' + arrayPersona[4] + ")");
*/




/*
    Ejercicios previos a resolver por separado para adquirir confianza con las herramientas: 
        1- Poner en Mayusculas un String
        2- Imprimir solo el primer caracter de un String
        3- Recorrer un String usando FOR. Imprimir letra a letra el texto. Recordar la propiedad "length" de los textos
        3- Convertir una frase en un Arreglo de Palabras usando split(" ")
        4- Convertir una palabra en un arreglo de letras usando split("")
        5- Convertir el arreglo ["H","o","l","a"] en un string usando join("")
    Ejercicio integrador: 
        6-     Vamos a hacer un programa para hacer Camel Case una FRASE y convertirla en una sola Palabra.
    Siendo el ingreso:
        "Que bonito dia"
    La salida debe ser:
        "QueBonitoDia"
    (Ojo)==> Si ingresan doble espacio en el texto ("  ") puede fallarles la logica, no se preocupen.
*/


//Ejercicio 7
let frase = "Que bonito dia";
let arrPalabras = frase.split(" ");
let palabrasMayusculas = [];

for (let i = 0; i < arrPalabras.length; i++) {
    let palabra = arrPalabras[i];
    let letras = palabra.split("");
    letras[0] = letras[0].toUpperCase();
    arrPalabras[i] = letras;
    palabrasMayusculas.push(letras.join(""));
}
console.log(palabrasMayusculas.join(""))