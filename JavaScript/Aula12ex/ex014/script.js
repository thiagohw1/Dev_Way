function carregar(){
    var msg = document.getElementById('mensagem')
    var img = document.getElementById('foto')
    var horas = new Date()
    //var hora = horas.getHours()
    var hora = 19
    var minuto = horas.getMinutes()
    var segundo = horas.getSeconds()


    msg.innerHTML=`Olá, agora são ${hora}:${minuto}:${segundo}`
    if (hora >= 0 && hora < 12){
        img.src = './img/manha.jpg'
        document.body.style.background = 'rgb(255, 188, 5)'
    }else if(hora >= 12 && hora < 18){
        img.src = './img/tarde.jpg'
        document.body.style.background = '#FF8247'
    }else{
        img.src='./img/noite.jpg'
        document.body.style.background = '#551A8B'
    }
}