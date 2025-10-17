/* Exercici 1
let numero = Number(prompt("Introdueix un número:"));
if (numero < 0) {console.log("El número és negatiu");} */
/*EXERCICI 2
let numero=Number(prompt("Escriu un nombre:"));
if (numero % 2 ==0) {
    console.log("El numero és parell")
}else {console.log("El numero és senar ")}; */
/*13.4
let numero=Number(prompt("Introdueix un numero"));
let numero2=Number(prompt("Introdueix un segon numero"));
if (numero>numero2) {console.log(numero);

}else {console.log(numero2)};*/
/*13.5
let num1=Number(prompt("Escriu un numero"))
let num2=Number(prompt("Escriu un segon numero"))
let num3=Number(prompt("Escriu un tercer numero"))
let el_mes_gran;
if (num1> num2 && num1>num3){
    el_mes_gran=num1
    console.log("El numero mes gran és",el_mes_gran)
}else if (num2> num1 && num2>num3){
    el_mes_gran=num2
    console.log("El numero mes gran és",el_mes_gran)
}else{
    el_mes_gran=num3 
    console.log("El numero mes gran és",el_mes_gran)}*/
/*15.1
var num = Number(prompt("Introdueix un numero del 1 al 12"))
switch (num) {
    case 1:
    console.log("És  Gener")
    break;

    case 2:
    console.log("És  Febrer")
    break;

    case 3:
    console.log("És  Març")
    break;

    case 4:
    console.log("És  Abril")
    break;

    case 5:
    console.log("És  Maig")
    break;

    case 6:
    console.log("És  Juny")
    break;

    case 7:
    console.log("És  Juliol")
    break;

    case 8:
    console.log("És  Agost")
    break;

    case 9:
    console.log("És  Setembre")
    break;

    case 10:
    console.log("És  Octubre")
    break;

    case 11:
    console.log("És  Novembre")
    break;

    case 12:
    console.log("És  Desembre")
    break;

    default:
    console.log("AQUEST MES NO EXISTEIX")
}*/
/*15.2 let gelat = prompt("Quin gelat vols? Pots triar entre terrina (t) o conus (c)")
let sabors;
if (gelat=="c") {
    console.log("El preu base es de 3.45 euros")
    sabors= prompt("Quin sabor vols?")
    switch (sabors) {
        case "Vainilla":
        case "Xocolata":  
        console.log("El preu a pagar és de",3.45,"euros")  
        break;

        case "Torró": 
        case "Menta": 
        case "Oreo":
        console.log("El preu a pagar és de",3.45+0.5,"euros")
        break;

        case "Crema":
        case "Ametlles":
        case "Gerds":
        console.log("El preu a pagar és de",3.45+1,"euros")
        break;
        default :
            console.log("Error dades mal introduïdes")
        break;
    
    
}}else if (gelat=="t") {
    console.log("El preu base és de 3.95 euros")
    sabors=prompt("Quin sabor vols?")
    switch (sabors) {
        case "Vainilla":
        case "Xocolata":  
        console.log("El preu a pagar és de",3.95,"euros")  
        break;

        case "Torró": 
        case "Menta": 
        case "Oreo":
        console.log("El preu a pagar és de",3.95+0.5,"euros")
        break;
        

        case "Crema":
        case "Ametlles":
        case "Gerds":
        console.log("El preu a pagar és de",3.95+1,"euros")
        break;
        default :
            console.log("Error dades mal introduïdes")
        break;
}}else {
    console.log("Error dades mal introduïdes")
}*/
/*15.3 
console.log("INFORMACIÓ")
console.log("l-dilluns","m-dimarts","x-dimecres","j-dijous","v-divendres","s-dissabte","d-diumenge")
dia=prompt("Escriu una de les lletres anteriors per saber si el dia és laborable o no")
switch (dia){
    case "l":
    case "m":
    case "x":
    case "j":
    case "v":
    console.log("El dia és laborable")
    break;
    case "s":
    case "d":
    console.log("El dia és festiu")
    break;
}*/
/*17.1
let contador=0
while (contador<10) {
    console.log("Estem fent bucles")
    contador++
}*/
/*17.2
num=5
while (num<21){
    console.log(num)
    num++
}*/
paraula = "hola"
if (paraula.length === 4) {
    console.log("La paraula té 4 lletres")
}