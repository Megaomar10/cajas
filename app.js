const cajas = document.querySelectorAll('.cajas');
const btn_par = document.querySelector('#btn_par');
const btn_impar = document.querySelector('#btn_impar');
const btn_clear = document.querySelector('#btn_clear');

btn_par.addEventListener("click", () => {
    for (let index = 0; index < cajas.length; index++) {
        if (index % 2 == 0) {
            cajas[index].style.background = "red";
        }

    }
});

btn_impar.addEventListener("click", () => {
    for (let index = 0; index < cajas.length; index++) {
        if (index % 2 != 0) {
            cajas[index].style.background = "lime";
        }

    }
});

btn_clear.addEventListener("click", () => {
    for (let index = 0; index < cajas.length; index++) {
        cajas[index].style.background = "aqua";
    }


});