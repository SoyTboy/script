let miVariable;
const MICONSTANTE = 25;

let num1 = 2;
let num2 = 4;
let num3 = 8;
let num4 = 16;
let num5 = 32;
let num6 = 64;

console.log (typeof(num2));

if (num1 > num2){
    console.log("el número mayor es", num1);
}else{
    console.log("el número mayor es", num2);
}
if (num1<num2) {
    console.log("esto es real");
} else {
    console.log("este número no es real");
}
if (num2=num5) {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}
if (MICONSTANTE !== num6) {
    console.log("Sí,son distintos");
} else {
    console.log("No,no son iguales");
}
if (num1 = num2 && num3 == num4) {
   console.log("son iguales");
} else {
    console.log("no son iguales");
}