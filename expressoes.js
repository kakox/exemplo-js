// declaração de função

function minhaFuncao (){
    
    // bloco de codigo

}

// minhaFuncao("param")

// expressão de função


// console.log(soma(3, 3))

// diferença principal HOISTING
// funções e var são "listadas" no topo do arquivo.

console.log(apresentar())

function apresentar(){
    return "olá";
}

console.log(soma(1, 1))
const soma = function (num1, num2){ return num1 + num2 }