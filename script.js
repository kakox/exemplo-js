// UTILIZANDO VAR >> não é recomendado usar hj em dia por ser muito solta.

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area);
//var area;

// UTILIZANDO LET >> permite trocar os valores, porem deve ser declarada antes de ser utilizada

//let forma="retângulo";
//let altura=5;
//let comprimento=7;
//let area;

//if (forma === "retângulo"){

 //   area = altura * comprimento;
//}
//else{
//    area = (altura * comprimento) / 2;
//}

//console.log(area);

// UTILIZANDO CONST >> o valor fica fixo nela e tambem deve ser declarado antes de ser utilizada

const forma="triangulo";
const altura = 5;
const comprimento =7;
let area;

if (forma === "quadrado"){
    
    area = altura * comprimento;
}
else {
    area = (altura * comprimento) / 2;
}

console.log(area);