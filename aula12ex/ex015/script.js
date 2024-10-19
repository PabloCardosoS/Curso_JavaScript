function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e digite novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebeH.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovemH.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'adultoH.png');
            } else {
                img.setAttribute('src', 'idosoH.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebeM.png');
            } else if (idade < 21) { 
                img.setAttribute('src', 'jovemM.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'adultoM.png');
            } else {
                img.setAttribute('src', 'idosoM.png');
            }
        }
        res.style.textAlign = 'center';   
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }

}