function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if  (hora >= 0 && hora < 12) {  
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#dfbc7a'
    }else if(hora >= 12 && hora <= 18)
        { 
        //Boa Tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#fc7802'
    }else{
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#1b262a'
    }

}