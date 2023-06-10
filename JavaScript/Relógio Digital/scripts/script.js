const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const mensagem = document.getElementById('mensagem')

const relogio = setInterval(function time(){
    var dataToday = new Date();
    var hr = dataToday.getHours();
    var min = dataToday.getMinutes();
    var seg = dataToday.getSeconds();

    var bomdia = 'Bom dia!'
    var boatarde = 'Boa tarde!'
    var boanoite = 'Boa noite!'
    

    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (seg < 10) seg = '0' + seg

    if (hr >= 0 && hr < 12) mensagem.textContent = bomdia
    if (hr >= 12 && hr < 18) mensagem.textContent = boatarde
    if (hr >= 18 && hr < 24) mensagem.textContent = boanoite
    
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})
