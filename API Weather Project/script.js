const inputCidade = document.querySelector('#nomeDaCidade');
const buttonProcurar = document.querySelector('#iconSearch')
let nomeDaCidade;

buttonProcurar.addEventListener('click', () =>{
    console.log('clicou para buscar')
    nomeDaCidade = inputCidade.value;
    weather(nomeDaCidade)
    inputCidade.value = '';

})


async function weather(nomeDaCidade) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${nomeDaCidade}&appid=4655fdf4d7fc72d811d4e2e4a143c991`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(response.status);
        }else {
            console.log(data)
        }

    } catch (e) {
        console.error(e);
    }
}

function carregarDadosProUsuario