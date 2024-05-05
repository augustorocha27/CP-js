function verificarNumero() {
    let num = Number(window.prompt('Digite um número'));
    let res = window.document.getElementById('resultado');
    
    if (num > 0){
        res.innerHTML = `<p>${num} é positivo !</p>`;
    }
    else if (num==0){
        res.innerHTML = `<p>${num} é zero !</p>`;
    }
    else {
        res.innerHTML = `<p>${num} é negativo !</p>`;
    }
    
}

