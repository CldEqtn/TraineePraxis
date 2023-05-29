/*
var nome = 'jonas'      // existe em todo o código
let idade = '18'        // 
const altura = '175'    // se usa quando não se quer alterar o valor após ser definido, ou seja, não se pode fazer alterações fora da declaração
*/


//  parametro é basicamente uma variável exclusiva da função

/*
function teste(parametro){
    console.log(parametro)
}
*/



//  prática


/*
let nome = "Daniel"

let array_nome = ['D', 'a', 'n', 'i', 'e', 'l']

for (let y = 0; y < nome.length; y++){
    // array_nome[y] = nome[y]
    // console.log(nome[y])

    array_nome.push(nome[y])
    console.log(array_nome)
}
*/

// prática calculadora

let calculadora = {
    soma: (a, b)=>{
        return a+b
    },
    subtracao: (a, b)=>{
        return a-b
    },
    multiplicacao: (a, b)=>{
        return a*b
    },
    divisão: (a, b)=>{
        return a/b
    },
    expoente: (a,b)=>{
        return a**b
    },
}

console.log(calculadora.expoente(2,6))


const nomedoID = document.getElementById('')    //  como diz no nome, pega um ID
const nomedaCLASS = document.getElementsByClassName('')    //  pegar class

// ^^^^ essas 2 declarações fazem o ID e a CLASS serem uma constante, para que não haja erros


