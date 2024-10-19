function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${minutos}.`;
    
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png';
        document.body.style.background = '#cccbc9';
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png';
        document.body.style.background = '#e4c0a1';
    } else {
        img.src = 'noite.png';
        document.body.style.background = '#352528';
    }
}
