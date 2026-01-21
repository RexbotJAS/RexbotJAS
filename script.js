function show() {
    let numeroRandom = Math.floor(Math.random() * 2);
    let resultado  = document.querySelector(".resultado");
    let imagen = document.querySelector(".moneda-img");

    if (numeroRandom === 0) {
        resultado.textContent = "Heads";
        imagen.src = "img/Moneda.png";
        imagen.style.width = "120px";
    } else {
        resultado.textContent = "Tails";
        imagen.src = "img/MonedaSello.png";
        imagen.style.width = "100px";
    }
}