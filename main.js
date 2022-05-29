const iniciar = document.querySelector('.iniciar');
const relogio = document.querySelector('#relogio');
const zerar = document.querySelector('.zerar');
const parar = document.querySelector('.parar');
const retorno = document.querySelector('#retorno');

let segundos = 0;
let timer;

function criarSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('iniciar')) {

        clearInterval(timer);
        iniciar.disabled = true;
        parar.disabled = false;

        relogio.classList.remove('text-danger');

        timer = setInterval(() => {
            segundos++
            relogio.innerHTML = criarSegundos(segundos);
        }, 1000);
    }
    if (el.classList.contains('parar')) {

        iniciar.disabled = false;
        parar.disabled = true;

        clearInterval(timer);
        relogio.classList.add('text-danger');
    }
    if (el.classList.contains('zerar')) {

        clearInterval(timer);
        iniciar.disabled = false;
        parar.disabled = false;

        segundos = 0;

        relogio.innerHTML = criarSegundos(segundos);
        relogio.classList.remove('text-danger');

    }
})
