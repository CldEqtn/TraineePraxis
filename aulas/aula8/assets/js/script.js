const botaoRegistrar = document.getElementById('botaoRegistrar')
const botaoExcluir = document.getElementById('botaoExcluir')


botaoRegistrar.addEventListener('click', adicionarParagrafo)

botaoExcluir.addEventListener('click', excluirParagrafo)

function seMostrar(e){
    console.log(e.target)

    /*
    if(this == botaoExcluir){
        console.log(true)
    }else if(this == botaoRegistrar){
        console.log(false)
    }else{
        console.log('deu merda')
    }
    */

}

const container = document.getElementById('container')


            /* NÃO FAZER ISSO vvvv; pq? vc repetiu o "selecionarParagrafo" lá embaixo */
// container.addEventListener('click', selecionarParagrafo)



/* innerHTML serve pra basicamente sobrescrever algo dentro do html, tanto que NÃO é recomendado por ser perigoso; o motivo é que ele pode acidentamenlte apagar algo importante, como por exemplo o body do código, sumindo com tudo */

// container.innerHTML = '<p>oi</p>'

        /* mesmo efeito esses 2 vvvvv */
// container.innerHTML = container.innerHTML + 'oi'
// container.innerHTML += '<p>OOOOI</p>'

                    /* o de cima de outro jeito */
// const paragrafo = document.createElement('p')
// paragrafo.classList.add('paragrafo')
// paragrafo.innerHTML = '<p>bom</p><p>dia</p>' + '<a href="https://www.google.com/">AAAAAA</a>'
// container.appendChild(paragrafo)


let contagem = 0

const registrarNome = document.getElementById('registrarNome')
registrarNome.addEventListener('click', seMostrar) 

function adicionarParagrafo(){
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('paragrafo'+contagem)
    contagem+=1
    paragrafo.addEventListener('click', selecionarParagrafo)
    paragrafo.textContent = registrarNome.value
    container.appendChild(paragrafo)
}

let paragrafoSelecionado = ''

function selecionarParagrafo(){
    this.classList.add('selecionado')
    paragrafoSelecionado = this
    console.log(this)
}

function excluirParagrafo(e){
    container.removeChild(paragrafoSelecionado)
}

registrarNome.value = 'nome completo'
