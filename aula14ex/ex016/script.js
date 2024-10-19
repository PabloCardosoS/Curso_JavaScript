function contar() {
    let inicio = document.getElementById('txtinicio');
    let final = document.getElementById('txtfinal');
    let passo = document.getElementById('txtpasso');
    let res = document.getElementById('res');

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!';
        window.alert('[ERRO] Faltam dados!');
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(inicio.value);
        let f = Number(final.value);
        let p = Number(passo.value);
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F383}`;
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F382}`;
            }
            res.innerHTML += `\u{1F3C1}`;
        }    
    }
}