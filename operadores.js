let suma = 7+5;
console.log(suma);
let resta = 5-2;
console.log(resta);
let multiplicacion = 3*5;
console.log(multiplicacion);
let division =4/2;
console.log(division);
let modulo = 10 %4;
console.log(modulo);
let sumMultMod = 3+3*2%3;
console.log(sumMultMod);
let restMultDivSum= 5-7*8/2+3;
console.log(restMultDivSum);
const persona = {
    nombre: "Carlos",
    edad: 25,
    ocupacion: "Desarrollador"
};

const colores = ["rojo", "verde", "azul"];
console.log(persona);
console.log(colores);
persona.edad;
console.log(persona.edad);
console.log(persona.nombre);
console.log(persona.ocupacion);
console.log('Mi nombre es ' +persona.nombre+' y tengo '+ persona.edad)+' años';
persona["apellido"]="Perez";
console.log(persona);
persona["ci"]=1234567;
console.log(persona);
persona.nombre ="Maria";
console.log(persona);
persona.edad = 20;
console.log(persona);
persona.ocupacion="Bailarina";
console.log(persona);
console.log(colores.length);
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]);
for( let i=0;i<colores.length;i++){
    console.log("Elemento " +colores[i]+" indice "+i);
}
colores.push("amarillo");
colores.push("violeta");
colores.push("rosado");
console.log(colores);
colores.reverse();
console.log(colores);
colores.sort();
colores.push("Naranja");
colores.push("Celeste");
colores.sort();
colores.push(1);
colores.push(2);
colores.push(3);
colores.push(1.67889);
colores.push(true);
colores.sort();
colores.push([7,9,2]);
colores.sort();
console.log(colores);
var elemento=colores.pop();
console.log(elemento);
console.log(colores);
colores.find("violeta");
