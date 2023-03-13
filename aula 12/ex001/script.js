function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora}Horas`)
    if(hora >= 0 && hora < 12){
        //Bom Dia
        foto.innerHTML = '<img src="img/manha.png">'
        document.body.style.background ='#E8B140'
    }else if(hora >= 12 && hora < 18){
        //Boa Tarde
        foto.innerHTML = '<img src="img/tarde.png">'
        document.body.style.background ='#BA391A'
    }else{
        //Boa Noite
         foto.innerHTML = '<img src="img/noite.png">'
         document.body.style.background ='#214055'
    }

}
