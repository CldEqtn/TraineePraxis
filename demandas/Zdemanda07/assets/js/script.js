function testLog(a){
    console.log(a.target)
}

const botaoRegistrar = document.getElementById('botaoRegistrar')

const tabelaCorpo = document.getElementById('tabelaCorpo')


botaoRegistrar.addEventListener('click', adicionarLinha)

function adicionarLinha(){
    const tableRow = document.createElement('tr')
    const tableHead = document.createElement('th')
    
    tabelaCorpo.appendChild(tableRow)
    
    contagem++
    tableRow.appendChild(tableHead)
    tableHead.innerHTML = contagem
    
    tableRow.addEventListener('click', selecionarLinha)

    const tableNomeColumn = document.createElement('td')
    tableRow.appendChild(tableNomeColumn)
    tableNomeColumn.innerHTML = registrarNome.value
    
    const tableCpfColumn = document.createElement('td')
    tableRow.appendChild(tableCpfColumn)
    tableCpfColumn.innerHTML = registrarCpf.value
    
    const tableEmailColumn = document.createElement('td')
    tableRow.appendChild(tableEmailColumn)
    tableEmailColumn.innerHTML = registrarEmail.value
    
    const tableTelefoneColumn = document.createElement('td')
    tableRow.appendChild(tableTelefoneColumn)
    tableTelefoneColumn.innerHTML = registrarTelefone.value
    
    // remove o valor dos inputs
    function inputClear(){
        registrarNome.value = ''
        registrarCpf.value = ''
        registrarEmail.value = ''
        registrarTelefone.value = ''
    }
    inputClear()
}


let contagem = 0




/* esse ou o de cima

botaoRegistrar.addEventListener('click', ()=>{
    const linha = adicionarLinha()
    // console.log(tabelaCorpo)
    tabelaCorpo.appendChild(linha)
})

// forma q daniel ensinou
function adicionarLinha(){
    const linha = document.createElement('tr')
    const linhaHead = document.createElement('th')
    contagem++
    
    linhaHead.innerHTML = contagem
    linha.appendChild(linhaHead)
    
    
    for(i=0; i<4; i++){
        const campoArray = [registrarNome.value, registrarCpf.value, registrarEmail.value, registrarTelefone.value]; // pq o telefone n aparece?
        let campoLinha = campoArray[i];        
        
        linhaCell = document.createElement('td')
        linhaCell.innerHTML = campoLinha
        linha.appendChild(linhaCell)
    }
    
    return linha
}

let contagem = 1
*/


const registrarNome = document.getElementById('registrarNome')
const registrarCpf = document.getElementById('registrarCpf')
const registrarEmail = document.getElementById('registrarEmail')
const registrarTelefone = document.getElementById('registrarTelefone')


let linhaSelecionada = ''
linhaSelecionada.addEventListener = ('click', testLog)

function selecionarLinha(){
    this.classList.add('selecionado')
    linhaSelecionada = this
    console.log(this)
    
    toggleRegistrarCorrigir()
}



const corrigirNome = document.getElementById('corrigirNome')
const corrigirCpf = document.getElementById('corrigirCpf')
const corrigirEmail = document.getElementById('corrigirEmail')
const corrigirTelefone = document.getElementById('corrigirTelefone')



/*
*/

// confere se tem algo no input, se houver, sobreescreve o respectivo campo
function corrigir(){

    let cells = linhaSelecionada.getElementsByTagName('td')
    
    // td = cell = campo // cada cell é uma coluna, que é um campo diferente
    nomeSel = cells[0]
    cpfSel = cells[1]
    emailSel = cells[2]
    telefoneSel = cells[3]

    for(i=0;i<4;i++){
        let campoSel = [nomeSel, cpfSel, emailSel, telefoneSel]
        let campo = [corrigirNome, corrigirCpf, corrigirEmail, corrigirTelefone]

        if(campo[i].value.length > 0){
            campoSel[i].innerHTML = campo[i].value
        }

    }

    // if (corrigirNome.value.length > 0) {
    //     nomeSel.innerHTML = corrigirNome.value
    // }
    // if (corrigirCpf.value.length > 0) {
    //     cpfSel.innerHTML = corrigirCpf.value
    // }
    // if (corrigirEmail.value.length > 0) {
    //     emailSel.innerHTML = corrigirEmail.value
    // }
    // if (corrigirTelefone.value.length > 0) {
    //     telefoneSel.innerHTML = corrigirTelefone.value
    // }

    // remove o valor dos inputs
    function inputClear(){
    corrigirNome.value = ''
    corrigirCpf.value = ''
    corrigirEmail.value = ''
    corrigirTelefone.value = ''
    }
    inputClear()
}

const botaoCorrigir = document.getElementById('botaoCorrigir')
botaoCorrigir.addEventListener('click', corrigir)




// BOTAO DE EXCLUIR 
const botaoExcluir = document.getElementById('botaoExcluir')
botaoExcluir.addEventListener('click', excluirLinha)

function excluirLinha(e){
    tabelaCorpo.removeChild(linhaSelecionada)
    toggleRegistrarCorrigir()
}

const botaoMostrarTabela = document.getElementById('botaoMostrarTabela')
botaoMostrarTabela.addEventListener('click', toggleTabela)

function toggleTabela(){
    const tabela = document.getElementById('tabela')
    tabela.classList.toggle('esconder')
}

function toggleRegistrarCorrigir(){          // usar quando algo for selecionado
    const formularioCorrigir = document.getElementsByClassName('formulario__corrigir')[0]
    formularioCorrigir.classList.toggle('esconder')
    
    const formularioRegistrar = document.getElementsByClassName('formulario__registrar')[0]
    formularioRegistrar.classList.toggle('esconder')
}
  

// minha mask

/////////

// // mask q peguei de laís
// function cpfMask(){
//     let cpfNum = registrarCpf || corrigirCpf
//     let arrayCpf = []
//     if(cpfNum.length == 11 && cpfNum.indexOf('.') == -1){
//         for(let i=1; i<12; i++){
//             if(i == 3 || i == 6){
//                 arrayCpf.push(cpfNum[i-1])
//                 arrayCpf.push('.')
//             }else if(i == 9){
//                 arrayCpf.push(cpfNum[i-1])
//                 arrayCpf.push('-')
//             }
//             else{
//                 arrayCPF.push(cpfNum[i-1])
//             }
//         }
//     }
// }
    // // roubei de weber KKKKKKK
    // // Verificar se algum campo está vazio
    // if (nome === '' || cpf === '' || email === '' || telefone === '') {
    //     alert('Preencha todos os campos do formulário.');
    //     return;
    // }

    
    // vv teste
    
    botaoRegistrar.addEventListener('click', testLog)
    botaoMostrarTabela.addEventListener('click', testLog)
    
    registrarNome.addEventListener('click', testLog)
    registrarCpf.addEventListener('click', testLog)
    registrarEmail.addEventListener('click', testLog)
    registrarTelefone.addEventListener('click', testLog)
    
    // ^^ teste 