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
/*prova
paraula = "hola"
if (paraula.length === 4) {
    console.log("La paraula té 4 lletres")
}*/ 
/*EXAMEN
let numero = Number(prompt("Escriu un número"));
if (numero > 0) {
    console.log("El número és positiu");
}else if (numero < 0) {
    console.log("El número és negatiu")
}else {console.log("El número és 0")}*/
/*numero=Number(prompt("Introdueix un nombre"));
switch (numero) {
    case 1:
    console.log("dilluns")
    break;
    case 2:
    console.log("dimarts")
    break;
    case 3:
    console.log("dimecres")
    break;
    case 4:
    console.log("dijous");
    break;
    case 5:
    console.log("divendres");
    break;
    case 6:
    console.log("Es dissabte");
    break;
    case 7:
    console.log("És diumenge");
    break;
}*/
/*l
let nombre = Number(prompt("Introdueix un nombre"));
let num = 1;
while (nombre>num) {
    console.log(num)
    num++
}
for (let num=1; nombre>num; num++)
    console.log(num)*/
/*num=Number(prompt("Introdueix un nombre"));
if (num>0 && num%2==0) {
    console.log("El numero es positiu i parell")
}else if (num<0 && num%2==0) {
    console.log("El numero és negatiu i parell");
}else if (num>0 && num%2!==0) { 
    console.log("El numero és positiu i senar");
}else {
    console.log("El numero es negatiu i senar")
}*/
/*let num1= Number(prompt("Introdueix un nombre"));
let num2= Number(prompt("Introdueix un nombre"));
let num3= Number(prompt("Introdueix un nombre"));
let major;
if (num1 > num2 && num1>num3) {
    major=num1
}else if (num2>num1 &&num2>num3) {
    major=num2
}else if (num3>num1 && num3>num2) {
    major=num3
}else{
    console.log("Hi ha un empat")
}
console.log(major);*/
/*let num= Number(prompt("Introdueix un nombre"));
let contador=0;
let sol;
while (contador<=10) {
    sol= num*contador
    console.log(num,"x",contador,"=",sol)
    contador ++;
}*/
/*let num=1
for (num; num<=10;num++)
    if (num%2==0) {
        console.log(num)
    }*/
/*let num=2;
while (num<=20) {
    if (num%2==0) {
        console.log(num) 
    }
    num ++
}*/
/*suma=0
for (let num=1;num<=100; num++) {
    suma=suma+num
}
console.log(suma)*/
/*for (let num=10; num>=1; num--) {
    console.log(num)
}*/
/*let num1= Number(prompt("Introdueix un nombre"));
let num2= Number(prompt("Introdueix un nombre"));
let suma=0
for (let num3=num1; num3<=num2; num3++) {
    if (num3%2!==0) {
        suma=suma + num3
    }
}
console.log(suma)*/
/*let num1= Number(prompt("Introdueix un nombre"));
let num2= Number(prompt("Introdueix un nombre"));
contador = 0
for (num3=num1;num3<=num2;num3++) {
    if (num3%2==0) {
        contador=contador + 1
    }
}
console.log(contador)*/
/*let num= Number(prompt("Esciu numero"))
let num1=1;
while(num1<=num){
    if (num1%2==0)
        console.log(num1)
    num1 ++
}*/
/*CODI QUE SUMA ELS MULTIPLES DE 3 
let num1= Number(prompt("Esciu numero"))
suma=0
let num2=1
for (num1; num2<=num1; num2++) {
    if (num2%3==0) {
        suma=suma+num2
    }
}
console.log(suma)*/
/*PROGRAMA QUE CONTA TOTS ELS NUMMEROS MULTIPLES DEL 1 FINS A UN ESCRIT PER NOSALTRES
let num1= Number(prompt("Introdueix un nombre"));
let num2= Number(prompt("Introdueix un nombre"));
contador=0
for (let num3=num1;num3<=num2;num3++){
    if (num3%5==0) {
        contador=contador + 1
    }
}
console.log(contador)*/
/*Programa que suma tots els numeros entre dos numeros dit per el usuari amb un while
let num1= Number(prompt("Introdueix un nombre"));
let num2= Number(prompt("Introdueix un nombre"));
let suma=0;
let num3;
num3=num1;
while(num3<=num2){
    suma=suma + num3
    num3++
}
console.log(suma)*/
/*PROGRAMA QUE MOSTRA TOTS ELS NUMEROS MULTIPLES DE 3 I SENARS
let num1= Number(prompt("Introdueix un nombre"));
let num2=1;
while(num1>=num2) {
    if (num2%3==0 && num2%2!==0) {
        console.log(num2)
    }
    num2++;
}   */
/*PROGRAMA QUE SUMA TOTS ELS NUMEROS SENARS DEL 1 A UN ALTRE
let num=Number(prompt("Introdueix un nombre: "));
let num1=1;
suma=0
while (num>=num1) {
    if (num1%2!==0) {
        suma=suma+num1
    }
    num1++
}
console.log(suma)*/
let num1=Number(prompt("Introdueix un nombre: "));
let num2=Number(prompt("Introdueix un nombre: "));
let suma=0
for (let num3=num1;num3<=num2;num3++)
    if (num3%2!==0) {
        suma=suma+num3
    }
console.log(suma)