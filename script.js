//relogio

const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr < 10) hr = "0" + hr
    if (min < 10) min = "0" + min
    if (seg < 10) seg = "0" + seg

    horas.innerHTML = hr;
    minutos.innerHTML = min;
    segundos.innerHTML = seg;
})


// tempo

const key = '4354b3459660f93f0ff1ca7162706561';

function colocarDadosNaTela(dados) {
    console.log(dados)

    document.querySelector('.cidade').innerHTML = "Tempo em: " + dados.name;
    document.querySelector('.tempo').innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector('.max').innerHTML = 'Máxima: ' + Math.floor(dados.main.temp_max) + '°C';
    document.querySelector('.min').innerHTML = 'Mínima: ' + Math.floor(dados.main.temp_min) + '°C';
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description;
    document.querySelector('.umidade').innerHTML = "Umidade: " + dados.main.humidity + "%"
}


// ASYNC = vai buscar uma resultado no servidor
// AWAIT = espera resposta do servidor para continuar executando o código.
// THEN = recebe a resposta do servidor e esta passando para o formato JSON() e vai armazenar tudo na variavel criada DADOS
async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    colocarDadosNaTela(dados)
}


function cliqueiNoBotao() {
    const cidade = document.querySelector('.input-cidade').value;

    buscarCidade(cidade)

    console.log(cidade)
}

