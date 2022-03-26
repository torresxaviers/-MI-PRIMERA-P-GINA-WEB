let flores= ["rosa", "clavel","tulipan"];
//Hemos declarado una array y la mostramos//
document.getElementById("demo1").innerHTML = flores;


flores[flores.length]= "lafloreliminada";
//Luego añadimos un elemento al final con "flores" [flores.length]="Margarita"; y lo mostramos//
document.getElementById("demo2").innerHTML= flores;

flores[1]="Amapola";
//Hemos substituïdo el elemento 1 por otro elemento llamado "Amapola" y lo mostramos//
document.getElementById("demo3").innerHTML= flores;

//flores.splice(2, 1) Con esto eliminamos en concreto el valor de la posición 2 y solo ese valor marcado "Amapola" y lo mostramos//

var floreliminada= flores.splice (2, 1); //Con esto eliminamos en concreto el valor de la posición 2 y solo ese valor marcando"1 es decir (2, 1)

var floreliminada= flores.splice(2, 1); //Con esto creamos una variable que contendrá el valor que hemos eliminado y posteriormente mostramos la array y mostramos la eliminada.
//posteriormente mostramos la array y mostramos la eliminada//
document.getElementById("demo4").innerHTML= flores;
document.getElementById("demo5").innerHTML=floreliminada;

var floreliminada= flores.splice (0, 1);
document.getElementById("demo6").innerHTML=flores;
document.getElementById("demo7").innerHTML=floreliminada;

flores[flores.length]=floreliminada; //Con esto hemos puesto la nueva flor eliminada (Rosa) al final del array//
document.getElementById("demo8").innerHTML=flores;



for (let i=0; i<flores.length;i++) {
    var lafloreliminada=flores.splice(0,1),
    flores [flores.length]=lafloreliminada;
    mitexto= mi texto + flores.toString()+"<br>";
    
}

mostrar = mitexto;