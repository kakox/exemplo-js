// parametros de funções 


function soma(num1, num2){

        return num1 + num2;
}

// console.log(soma(-100, 20))
// console.log(soma(20, 20))
// console.log(soma(210, 20))
// console.log(soma(220, 20))
// console.log(soma(230, 20))

//parametros x argumentos

// ordem dos parametros

function nomeIdade(nome, idade){

return `Me chamo ${nome} e tenho ${idade} anos.`

}

// o terminal irá ler ao contrario devido a ordem dos parametros:

console.log(nomeIdade(24, "Kauãn"))

function multiplica(num1 = 1,num2 = 1){

    return num1 * num2;
}

                         // 9        // num 6
console.log(multiplica(soma(4,5)))

