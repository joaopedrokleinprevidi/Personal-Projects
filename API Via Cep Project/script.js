const containerPrincipal = document.querySelector('#containerPrincipal')
const cepInput = document.querySelector('#inputValueCep')
const iconeProcurar = document.querySelector('#procurarIcone')
const estado = document.querySelector('#estado')
const cidade = document.querySelector('#cidade')
const bairro = document.querySelector('#bairro')
const rua = document.querySelector('#rua')
let cep;

iconeProcurar.addEventListener('click', receberDadosDoUsuario)

function receberDadosDoUsuario() {
    cep = cepInput.value;
    if(cep.length > 9){ return alert('Cep Inválido')}
    else{ cep = cep.replace(/\s/g, '').replace('-', '') }
    consultarCEP(cep)
    cepInput.value = ''
    
} 

async function consultarCEP(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json()
    console.log(data)

    enviarDadosParaOUsuario(data)
}

function enviarDadosParaOUsuario(data) {
    containerPrincipal.classList.remove('display-none')
    estado.innerText = `Estado: ${data.uf}`
    cidade.innerText = `Cidade: ${data.localidade}`
    if(data.bairro == '') {bairro.innerText = '' }else {bairro.innerText = `Bairro: ${data.bairro}` }
    if(data.logradouro == '') { rua.innerText = ''} else {rua.innerText = `Rua: ${data.logradouro}` }
}
