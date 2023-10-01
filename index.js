document.getElementById("botonMas").addEventListener("click", suma);
document.getElementById("botonMenos").addEventListener("click", resta);

function suma() {

  let cantidad = parseInt(document.querySelector(".cantidad").innerHTML);
  cantidad = cantidad + 1;
  document.querySelector(".cantidad").innerHTML=cantidad.toString();

  const precioBase = parseInt(document.querySelector(".precio-inicial").innerHTML);

  let total = parseInt(document.querySelector(".valor-total").innerHTML);
  total = precioBase*cantidad;
  document.querySelector(".valor-total").innerHTML=total.toString();
}

function resta(){

    let cantidad = parseInt(document.querySelector(".cantidad").innerHTML);
    cantidad = cantidad - 1;
    document.querySelector(".cantidad").innerHTML=cantidad.toString();
  
    const precioBase = parseInt(document.querySelector(".precio-inicial").innerHTML);
  
    let total = parseInt(document.querySelector(".valor-total").innerHTML);
    total = precioBase*cantidad;
    document.querySelector(".valor-total").innerHTML=total.toString();

}