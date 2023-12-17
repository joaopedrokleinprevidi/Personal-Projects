const containerPrincipal = document.querySelector('#principalContainer')
const inputCidade = document.querySelector('#nomeDaCidade');
const buttonProcurar = document.querySelector('#iconSearch')
const cidadeEscolhida = document.querySelector('#cidadeEscolhida')
const temperaturaDaCidade = document.querySelector('#temperaturaDaCidade')
const velocidadeDoVento = document.querySelector('#velocidadeDoVento')
const iconeTemperaturaDaCidade = document.querySelector('#iconeTemperatura')
let nomeDaCidade;

buttonProcurar.addEventListener('click', () =>{
    console.log('clicou para buscar')
    nomeDaCidade = inputCidade.value;
    weather(nomeDaCidade)
    if (!nomeDaCidade == ''){
    containerPrincipal.classList.add('principal-content-container')
    containerPrincipal.classList.remove('display-none')
    }

    inputCidade.value = '';
})


async function weather(nomeDaCidade) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nomeDaCidade}&units=metric&appid=4655fdf4d7fc72d811d4e2e4a143c991`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(response.status);
        }else {
            carregarDadosProUsuario(data)
            console.log(data)
        }

    } catch (e) {
        console.error(e);
    }
}

function carregarDadosProUsuario(data) {
    cidadeEscolhida.innerText = data.name + ", " + data.sys.country
    console.log(cidadeEscolhida.value)
    temperaturaDaCidade.innerText = `Temperatura: ${Math.floor(data.main.temp)}° C` 
    console.log(temperaturaDaCidade.innerText)
    velocidadeDoVento.innerText =  `Vento: ${data.wind.speed} km/h`
    iconeTemperaturaDaCidade.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
}