//DECLARAR INICIALIZAR EL ARRAY (elementos empiezan desde 0, es decir (0,1,2) en este caso)
const flores = ["AMAPOLA", "MARGARITA", "ROSA"];
//DECLARAR INICIALIZAR UNA VARIABLE DE TEXTO                            BUCLE=ITERACIÓN                 REPITE DESDE ELEMENTO 0 HASTA EL ELEMENTO (N) SIEMPRE.  N < FLORES.LENGTH
let mitexto = "";

//LO QUE ESTAMOS HACIENDO AQUÍ ES ELIMINAR EL PRIMER ELEMENTO EN ESTE CASO AMAPOLA CON VALOR NÚMERICO= 0, PONER A TODOS LOS OTROS ELEMENTOS A LA IZQUIERDA (DESPLAZAR INDICES A LA IZQUIERDA), LO QUE HACE AL FINAL ES PONER EL PRIMER ELEMENTO DETRÁS.
for(let i=0; i <flores.length; i++){
    var lafloreliminada = flores.splice(0,1);
    flores[flores.length] = lafloreliminada;
    mitexto= mitexto + flores.toString()+"<br>";

}
 document.getElementById("demo").innerHTML= mitexto;

//DECLARAR INICIALIZAR ARRAY
const flores2 = ["AMAPOLA", "MARGARITA", "ROSA"];



// for (let i in flores) {
//     var lafloreliminada = flores.splice(0, 1);
//     flores [flores.length] = lafloreliminada;

//     mitexto = mitexto + flores.toString() + "<br>";
//   }

// document.getElementById("quelindasflores").innerHTML = mitexto;



// let i=0;
// do {
//     var lafloreliminada = flores2.splice(0,1);
//     flores2[flores2.length] = lafloreliminada;
//     mitexto= mitexto + flores2.toString()+"<br>";

//     i=i+1;
//    } while (i < flores2.length);
//  document.getElementById("demo2").innerHTML= mitexto;



// const hour = new Date().getHours(); 
// document.getElementById("demo1").innerHTML = hour;
// let greeting;

// if (hour < 13) {
//   greeting = "Good day";
// } else if (hour <20){
//   greeting = "Good evening";
// } else{
// }
// document.getElementById("demo2").innerHTML = greeting;

//EXERCISI FILL DE PUTA

const fruits=["Banana", "Orange", "Lemon", "Apple", "Mango"];
const orden = [2, 3, 1, 5, 4, 3];
console.log(orden[0]);
console.log(orden[1]);
console.log(orden[2]);
console.log(orden[3]);
console.log(orden[4]);
const fruitsOrd=[]


for (let index = 0; index < fruits.length; index++) {   //BUCLE O ITERACIÓN O LOOP FOR
    var frutaquetoca = fruits[index]; //Banana
    var ordenquetoca = orden[index] - 1; //2-1=1
    fruitsOrd[ordenquetoca] = frutaquetoca; //fruitsordenats[1] = "Banana";
}

document.getElementById("demo8").innerHTML = fruitsOrd.toString();



const nuevoArray = [];
for (let index = 0; index < fruits.length; index++) {
    nuevoArray[nuevoArray.Array] = fruits[index];

}
document.getElementById("demo9").innerHTML = nuevoArray.toString();