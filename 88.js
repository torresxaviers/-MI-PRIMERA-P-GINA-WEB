function cambiaNumero() {
   var miNumeroString = document.getElementById("miNumero").value;
   var miNumero = parseInt(miNumeroString, 10);
   miNumero = miNumero + 1;
   if (miNumero > 3) {
       miNumero = 0;
    }
    document.getElementById("miNumero").value = miNumero;


    var gato01 = "https://images.vexels.com/media/users/3/139880/isolated/preview/5c7018165ca328f070d73ea0b92c61e7-gato-corriendo-secuencia-3-by-vexels.png"
    var gato02 = "https://images.vexels.com/media/users/3/139884/isolated/preview/7ffed8bcebaa6bbcba2d11bae1d6f5d5-gato-corriendo-secuencia-7-by-vexels.png"
    var gato03 = "https://images.vexels.com/media/users/3/139874/isolated/preview/a1ed019282a0573875216eddc0dc697b-gato-corriendo-secuencia-15-by-vexels.png"
    var gato04 = "https://images.vexels.com/media/users/3/139878/isolated/preview/ef0393ca5af17e8c22cdbca3fd3889a4-gato-corriendo-secuencia-19-by-vexels.png"
    const gatos = [gato01, gato02, gato03, gato04];

    var gatoseleccionado = gatos [miNumero];
    document.getElementById('miImagen').src=gatoseleccionado;
   cambiaNumeroreloj();
}
function cambiaNumeroreloj() {
   cambiaNumero();
   console.log("cambiaNumero", 100);

}