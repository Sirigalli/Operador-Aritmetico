// ============================================================
//   ATIVIDADE 04 – Operadores Aritméticos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-04.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Operações básicas
// ------------------------------------------------------------
// Declare duas variáveis: "num1" com valor 18 e "num2" com valor 5.
// Calcule e exiba no console, usando template literal, o cálculo e o resultado:
//    Exemplo: console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`);
// a) A soma dos dois números.
// b) A subtração (num1 - num2).
// c) A multiplicação.
// d) A divisão (use toFixed() para limitar o resultado a 2 casas decimais).
// e) O resto da divisão (módulo %).
// f) num1 elevado a num2 (potência).

// → Seu código aqui:

    var readline = require('readline-sync') ;

  //A) =
  // let num1 = 18;
  // let num2 = 5;

  // console.log(`Cálculo: ${num1} + ${num2} = ${num1 + num2}`);

  // //B) = 
  // console.log(`Cálculo: ${num1} - ${num2} = ${num1 - num2}`);

  // //C) =
  // console.log(`Cálculo: ${num1} * ${num2} = ${num1 * num2}`);

  // //D) =
  // console.log(`Cálculo: ${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`);

  // //E = 
  // console.log(`Cálculo: ${num1} % ${num2} = ${num1 % num2}`);

  // //F = 
  // console.log(`Cálculo: ${num1} ** ${num2} = ${num1 ** num2}`);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Área e perímetro
// ------------------------------------------------------------
// a) Declare as variáveis "largura" (valor 8) e "altura" (valor 5).
// b) Calcule a área do retângulo (largura * altura) e armazene em "area".
// c) Calcule o perímetro (2 * largura + 2 * altura) e armazene em "perimetro".
// d) Exiba no console usando template literal:
//    "Retângulo | Largura: <largura> | Altura: <altura> | Área: <area> | Perímetro: <perimetro>"

// → Seu código aqui:

//A) =
// let largura = 8;
// let altura = 5;

// //B) = 
// let areDoRetangulo = (largura * altura);
// let area = areDoRetangulo;

// //C) =
// let perimetro = (2 * largura + 2 * altura);

// //D) =
// console.log(`Retângulo | Largura: ${largura} | Altura: ${altura} | Área: ${area} | Perímetro: ${perimetro}.`);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculando desconto
// ------------------------------------------------------------
// a) Declare a variável "precoOriginal" com o valor 250.
// b) Declare a variável "percentualDesconto" com o valor 15 (representa 15%).
// c) Calcule o valor do desconto e armazene em "valorDesconto".
//    Dica: valorDesconto = precoOriginal * (percentualDesconto / 100)
// d) Calcule o preço final (precoOriginal - valorDesconto) e armazene em "precoFinal".
// e) Exiba no console usando template literal:
//    "Preço original: R$ <precoOriginal> | Desconto: R$ <valorDesconto> | Preço final: R$ <precoFinal>"
//    Use toFixed(2) nos valores em reais.

// → Seu código aqui:

//A) = 
// let precoOriginal = 250;

// //B) = 
// let percentualDesconto = 15

// //C) =
// let valorDesconto = precoOriginal * (percentualDesconto / 100);

// //D) = 
// let precoFinal = (precoOriginal - valorDesconto);

// //E = 
// console.log(`Preco original: R$ ${precoOriginal} | Desconto: R$ ${valorDesconto} | Preco final: R$ ${precoFinal}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Operadores de atribuição composta
// ------------------------------------------------------------
// a) Declare uma variável "pontos" com o valor 100.
// b) Some 50 pontos usando +=. Exiba o resultado.
// c) Subtraia 30 pontos usando -=. Exiba o resultado.
// d) Multiplique por 2 usando *=. Exiba o resultado.
// e) Divida por 4 usando /=. Exiba o resultado.
// f) Para cada operação, use template literal:
//    "Pontos após <tipo da operação>: <valor>"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Incremento e decremento
// ------------------------------------------------------------
// a) Declare uma variável "vidas" com valor 3.
// b) Exiba o valor atual com console.log().
// c) Use ++ para incrementar "vidas" duas vezes, exibindo após cada incremento.
// d) Use -- para decrementar "vidas" uma vez, exibindo o resultado.
// e) Declare uma variável "nivel" com valor 1.
// f) Incremente "nivel" três vezes usando ++nivel (prefixo) e exiba cada resultado.

// → Seu código aqui:

//A) =
// let vidas = 3;

// //B) = 
// console.log(vidas);

// //C) =
// vidas++;
// console.log(vidas);

// //D) =
// vidas--;
// console.log(vidas);

// //E) =
// let nivel = 1;

// //F) = 
// console.log(++nivel);
// console.log(++nivel);
// console.log(++nivel);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções matemáticas (Math)
// ------------------------------------------------------------
// a) Declare "nota" com o valor 7.3.
// b) Exiba o resultado de Math.round(nota), Math.floor(nota) e Math.ceil(nota).
//    Use template literal para identificar cada um.
// c) Declare "temperatura" com o valor -12.5.
// d) Exiba o valor absoluto usando Math.abs(temperatura).
// e) Use Math.max() para encontrar o maior entre: 42, 17, 89, 5, 63. Exiba o resultado.
// f) Use Math.min() para encontrar o menor entre 42, 17, 89, 5, 63. Exiba o resultado.

// → Seu código aqui:

//A) = 
// let nota = 7.3;

// //B) = 
// console.log(Math.round(nota));
// console.log(Math.floor(nota));
// console.log(Math.ceil(nota));

// //C) =
// let temperatura = -12.5;

// //D) =
// console.log(Math.abs(temperatura));

// //E) =
// console.log(Math.max(42, 17, 89, 5, 63));
// console.log(Math.min(42, 17, 89, 5, 63));


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Média de notas
// ------------------------------------------------------------
// a) Peça ao usuário 3 notas (use questionFloat()).
// b) Calcule a média aritmética das 3 notas.
// c) Exiba no console:
//    "Nota 1: <n1> | Nota 2: <n2> | Nota 3: <n3>"
//    "Média: <media>" (com 2 casas decimais usando toFixed(2))

// → Seu código aqui:

//A) =
// let nota1 = readline.questionFloat("Digite o primeiro numero: ");
// let nota2 = readline.questionFloat("Digite o segundo numero: ");
// let nota3 = readline.questionFloat("Digite a terceira nota: ");

// //B) = 
// let media1 = (nota1 + nota2 + nota3) / 3;

// //C) = 
// console.log(`Nota 1: ${nota1} | Nota 2: ${nota2} | Nota 3: ${nota3}
//   Media: ${media1.toFixed(2)}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Calculadora de troco
// ------------------------------------------------------------
// a) Peça ao usuário o valor total da compra (questionFloat()).
// b) Peça ao usuário o valor entregue pelo cliente (informando que deve ser maior que o valor da compra) (questionFloat()).
// c) Calcule o troco (valorEntregue - totalCompra).
// d) Exiba no console:
//    "Total da compra:  R$ <total>"
//    "Valor entregue:   R$ <entregue>"
//    "Troco:            R$ <troco>"
//    Use toFixed(2) em todos os valores.

// → Seu código aqui:

//A) =
// let totalCompra = readline.questionFloat("Digite o valor da compra: ");

// //B) = 
// let valorEntregue = readline.questionFloat("Digite o valor entregue pelo cliente: ");

// //C) =
// let troco = (valorEntregue - totalCompra);

// //D) =
// console.log(`Total da compra: R$${totalCompra.toFixed(2)}.`);
// console.log(`Valor entregue: R$${valorEntregue.toFixed(2)}.`);
// console.log(`Troco: R$${troco.toFixed(2)}`);



// ------------------------------------------------------------
// EXERCÍCIO 9 – Valor total de listas
// ------------------------------------------------------------
// a) Dada uma lista de preços, calcule e exiba o total.
let precos = [29.90, 49.99, 15.75, 99.90];
// b) Dada uma lista de notas, calcule e exiba a média.
let notas = [7.5, 8.2, 6.5, 9.0];
// c) Dada uma lista de idades, exiba a maior e a menor idade utilizando das funções Math().
let idades = [15, 22, 30, 18, 25];

// → Seu código aqui:

// //A) = 
// console.log(29.90 + 49.99 + 15.75 + 99.90);
// let total = precos.reduce((soma, precos) => soma + precos, 0);
// console.log(`Total: R$${total.toFixed(2)}`);

// //B) =
// let total2 = (7.5 + 8.2 + 6.5 + 9.0);
// console.log(total2.toFixed(2));
// let media = (total2 / notas.length);
// console.log(`Media: ${media.toFixed(2)}`);

// //C) =
// console.log(Math.max(...idades));
// console.log(Math.min(...idades));

// //Obs: (...) Spread Operator - Espalha os valores da lista


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Trabalhando com objetos
// ------------------------------------------------------------
// Dado o objeto turma:
let turma = {
  aluno1: {
    nome: "João",
    notas: []
  },
  aluno2: {
    nome: "Maria",
    notas: []
  },
  aluno3: {
    nome: "Pedro",
    notas: []
  }
}
// a) Sem alterar o objeto (utilize somente push), peça para o usuário 3 notas para cada aluno, indicando a quem pertencerá cada nota
// b) Calcule a média de notas de cada aluno e exiba no console, indicando a quem pertence cada média
// c) Exiba a média geral da turma
// d) Exiba a nota mais alta e a mais baixa de cada aluno
// e) Exiba a nota mais alta e a mais baixa da turma

// → Seu código aqui:

//A) = 
turma.aluno1.notas.push(
    readline.questionFloat("Digite a primeira nota: "),
    readline.questionFloat("Digite a segunda nota: "),
    readline.questionFloat("Digite a terceira nota: ")
);
turma.aluno2.notas.push(
    readline.questionFloat("Digite a primeira nota: "),
    readline.questionFloat("Digite a segunda nota: "),
    readline.questionFloat("Digite a terceira nota: ")
);
turma.aluno3.notas.push(
    readline.questionFloat("Digite a primeira nota: "),
    readline.questionFloat("Digite a segunda nota: "),
    readline.questionFloat("Digite a terceira nota: ")
);

//B) =
let mediaAluno1 = (turma.aluno1.notas[0] + turma.aluno1.notas[1] + turma.aluno1.notas[2]) / turma.aluno1.notas.length;
console.log(`A media do ${turma.aluno1.nome} e: ${mediaAluno1.toFixed(2)}`);
let mediaAluno2 = (turma.aluno2.notas[0] + turma.aluno1.notas[1] + turma.aluno2.notas[2]) / turma.aluno2.notas.length;
console.log(`A media do ${turma.aluno2.nome} e: ${mediaAluno2.toFixed(2)}`);
let mediaAluno3 = (turma.aluno2.notas[0] + turma.aluno1.notas[1] + turma.aluno3.notas[2]) / turma.aluno3.notas.length;
console.log(`A media do ${turma.aluno3.nome} e: ${mediaAluno3.toFixed(2)}`);



console.log("_______________________________");