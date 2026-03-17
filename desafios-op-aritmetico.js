// ============================================================
//   DESAFIOS (para quem já terminou a atividade 04) – Operadores Aritméticos
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================

var readline = require('readline-sync') ;

// ------------------------------------------------------------
// DESAFIO 1 – Carrinho de compras
// ------------------------------------------------------------
// a) Peça ao usuário o nome e preço de 3 produtos.
// b) Crie um objeto "carrinho" contendo:
//    - produtos (array com os 3 produtos)
// c) Cada produto deve ser um objeto com:
//    nome
//    preco
//
// d) Calcule:
//    - valorTotal
//    - valorMedio dos produtos
//
// e) Exiba o carrinho com console.table().
// f) Exiba também:
//
// "O carrinho possui < X > produtos.
// Valor total: X
// Valor médio dos produtos: X"

// → Seu código aqui:


// let carrinho = {
//   produtos: [
//     produto1 = [
//       nome = readline.question("Digite o nome do primeiro produto: "),
//       preco = readline.questionFloat("Digite o preco do primeiro produto: ")
//     ],
//     produto2 = [
//       nome = readline.question("Digite o nome do segundo produto: "),
//       preco = readline.questionFloat("Digite o preco do segundo produto: ")
//     ],
//     produto3 = [
//       nome = readline.question("Digite o nome do terceiro produto: "),
//       preco = readline.questionFloat("Digite o preco do terceiro produto: ")
//     ]
//   ]
// };

// let valorTotal = (carrinho.produtos[0][1] + carrinho.produtos[1][1] + carrinho.produtos[2][1])
// console.log(`O valor total do carrinho e: ${valorTotal}`);

// let valorMedio = (carrinho.produtos[0][1] + carrinho.produtos[1][1] + carrinho.produtos[2][1]) / 3;
// console.log(`O valor medio das compras e: ${valorMedio}`);

// console.table(carrinho);

// console.log(`O carrinho possui ${carrinho.produtos.length} produtos.`);
// console.log(`O valor total dos produtos é R$${valorTotal}.`);
// console.log(`O valor medio dos produtos é R$${valorMedio}.`);


// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Controle de despesas
// ------------------------------------------------------------
// a) Peça ao usuário os valores de 4 despesas:
//    aluguel
//    internet
//    energia
//    alimentação
//
// b) Crie um objeto "despesas" com essas propriedades.
//
// c) Crie um array chamado "listaDespesas" contendo
//    todos os valores.
//
// d) Calcule:
//    - total de despesas
//    - média das despesas
//    - quanto sobra se o salário for 5000.
//
// e) Exiba:
//
// "Total de despesas: X"
// "Média de despesas: X"
// "Dinheiro restante: X"

// → Seu código aqui:

// let despesas = {
//   listaDespesas: [
//     aluguel = readline.questionFloat("Digite o valor do aluguel: "),
//     internet = readline.questionFloat("Digite o valor da internet: "),
//     energia = readline.questionFloat("Digite o valor da energia: "),
//     alimentacao = readline.questionFloat("Digite o valor da alimentacao: ")
//   ]
// };

// let totalDeDespesas = (despesas.listaDespesas[0] + despesas.listaDespesas[1] + despesas.listaDespesas[2] + despesas.listaDespesas[3]);
// console.log(`O total de despesas é: R$${totalDeDespesas}.`);

// let mediaDasDespesas = (despesas.listaDespesas[0] + despesas.listaDespesas[1] + despesas.listaDespesas[2] + despesas.listaDespesas[3]) / despesas.listaDespesas.length;
// console.log(`A media das despesas é: R$${mediaDasDespesas}.`);

// let salario = 5000;
// let sobra = (salario - totalDeDespesas);
// console.log(`A sobra é: R$${sobra}`);

// console.log(`O total de despesas é: R$${totalDeDespesas}.`);
// console.log(`A media das despesas é: R$${mediaDasDespesas}.`);
// console.log(`O dinheiro restante é: R$${sobra}`);


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Estatísticas de jogador
// ------------------------------------------------------------
// a) Peça ao usuário:
//    nome do jogador
//    partidas jogadas
//    gols
//    assistências
//
// b) Crie um objeto "jogador".
//
// c) Crie um array "estatisticas" contendo:
//    [gols, assistencias]
//
// d) Calcule:
//    - participacoesEmGol = gols + assistencias
//    - mediaPorPartida = participacoesEmGol / partidas
//
// e) Exiba:
//
// "Jogador: X"
// "Participações em gol: X"
// "Média por partida: X"

// → Seu código aqui:

// let jogador = {
//   nome: readline.question("Digite o nome do jogador: "),
//   partidasJogadas: readline.questionFloat("Digite o numero de partidas jogadas: "),
//   estatisticas: [
//     gols = readline.questionInt("Digite o numero de gols: "),
//     assistencias = readline.questionInt("Digite o numero de assistencias: "),
//   ]
// };

// let participacoesEmGol = (jogador.estatisticas[0] + jogador.estatisticas[1]);
// let mediaPorPartida = (participacoesEmGol / jogador.partidasJogadas);

// console.log(`O nome do jogador é: ${jogador.nome}.`);
// console.log(`Participacoes em gols: ${participacoesEmGol}.`);
// console.log(`A media por partida é: ${mediaPorPartida.toFixed(2)}.`);


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Pedido de mercado
// ------------------------------------------------------------
// a) Peça ao usuário os dados de 4 produtos:
//    nome e preço.
//
// b) Crie um objeto "mercado" contendo:
//    - produtos (array)
//
// c) Calcule:
//    - valor total da compra
//    - valor com desconto de 10%
//
// Fórmula:
// desconto = total * 0.10
// valorFinal = total - desconto
//
// d) Exiba:
//
// "Total da compra: X"
// "Desconto: X"
// "Valor final: X"

// → Seu código aqui:

// let mercado = {
//   produtos: [
//     produto1 = [
//     nome = readline.question("Digite o nome do produto: "),
//     preco = readline.questionFloat("Digite o preco do produto: ")
//     ],
//     produto2 = [
//       nome = readline.question("Digite o nome do produto: "),
//       preco = readline.questionFloat("Digite o preco do produto: ")
//       ],
//       produto3 = [
//         nome = readline.question("Digite o nome do produto: "),
//         preco = readline.questionFloat("Digite o preco do produto: ")
//         ]
//   ]
// };

// let valorTotal = (mercado.produtos[0][1] + mercado.produtos[1][1] + mercado.produtos[2][1]);
// let desconto = (valorTotal * 0.10);
// let valorFinal = (valorTotal - desconto);

// console.log(`O total da compra é: R$${valorTotal}`);
// console.log(`O desconto do produto é: R$${desconto.toFixed(2)}`);
// console.log(`O valor final é: R$${valorFinal}`);


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Boletim escolar
// ------------------------------------------------------------
// a) Peça ao usuário 4 notas.
//
// b) Crie um objeto "boletim" contendo:
//    notas (array com as 4 notas)
//
// c) Calcule:
//    média das notas
//
// d) Calcule também:
//    pontosFaltantesPara10
//
// Fórmula:
// pontosFaltantes = 10 - media
//
// e) Exiba:
//
// "Notas: X"
// "Média: X"
// "Faltam X pontos para média 10."

// → Seu código aqui:

// let boletim = {
//   notas: [
//     nota1 = readline.questionFloat("Digite a primeira nota: "),
//     nota2 = readline.questionFloat("Digite a segunda nota: "),
//     nota3 = readline.questionFloat("Digite a terceira nota: "),
//     nota4 = readline.questionFloat("Digite a quarta nota: ")
//   ]
// };

// let mediaDasNotas = (boletim.notas[0] + boletim.notas[1] + boletim.notas[2] + boletim.notas[3]) / boletim.notas.length;
// let pontosFaltantes = 10 - mediaDasNotas;

// console.log(`Notas: ${boletim.notas[0]}, ${boletim.notas[1]}, ${boletim.notas[2]}, ${boletim.notas[3]}`);
// console.log(`Media: ${mediaDasNotas}`);
// console.log(`Faltam ${pontosFaltantes} pontos para media 10.`);


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 6 – Restaurante (cálculo de conta)
// ------------------------------------------------------------
// a) Peça ao usuário o preço de:
//    entrada
//    prato principal
//    sobremesa
//    bebida
//
// b) Crie um objeto "pedido".
//
// c) Crie um array "itens".
//
// d) Calcule:
//    subtotal
//
// e) Calcule taxa de serviço de 10%
//
// f) Calcule valor total.
//
// g) Exiba:
//
// "Subtotal: X"
// "Taxa de serviço: X"
// "Total a pagar: X"

// → Seu código aqui:

// let pedido = {
//   itens: [
//     entrada = readline.questionInt("Digite o preco do prato de entrada: "),
//     pratoPrincipal = readline.questionInt("Digite o preco do prato principal: "),
//     sobremesa = readline.questionInt("Digite o preco da sobremesa: "),
//     bebida = readline.questionInt("Digite o preco da bebida: ")
//   ]
// };

// let subTotal = (pedido.itens[0] + pedido.itens[1] + pedido.itens[2] + pedido.itens[3]);
// let taxaDeServico = (subTotal * 0.10);
// let valorTotal = (subTotal + taxaDeServico);

// console.log(`Subtotal: R$${subTotal}`);
// console.log(`Taxa de servico: R$${taxaDeServico.toFixed(2)}`);
// console.log(`Total a pagar: R$${valorTotal.toFixed(2)}`);



console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 7 – Análise de números
// ------------------------------------------------------------
// a) Peça 5 números ao usuário.
//
// b) Crie um objeto "analise".
//
// c) Crie um array "numeros".
//
// d) Calcule:
//    soma de todos
//    média
//    produto (multiplicação de todos)
//
// e) Exiba:
//
// "Soma: X"
// "Média: X"
// "Produto: X"

// → Seu código aqui:

// let analise = {
//   numeros: [
//     num1 = readline.questionFloat("Digite o primeiro numero: "),
//     num2 = readline.questionFloat("Digite o segundo numero: "),
//     num3 = readline.questionFloat("Digite o terceiro numero: "),
//     num4 = readline.questionFloat("Digite o quarto numero: "),
//     num5 = readline.questionFloat("Digite o quinto numero: ")
//   ]
// };

// let soma = (analise.numeros[0] + analise.numeros[1] + analise.numeros[2] + analise.numeros[3] + analise.numeros[4]);
// let media = (soma / analise.numeros.length);
// let produto = (analise.numeros[0] * analise.numeros[1] * analise.numeros[2] * analise.numeros[3] * analise.numeros[4]);

// console.log(`Soma: ${soma}`);
// console.log(`Media: ${media}`);
// console.log(`Produto: ${produto}`);


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 8 – Perfil financeiro
// ------------------------------------------------------------
// a) Peça ao usuário:
//    salário
//    renda extra
//    gastos fixos
//    gastos variáveis
//
// b) Crie um objeto "financeiro".
//
// c) Crie arrays:
//    receitas
//    despesas
//
// d) Calcule:
//    rendaTotal
//    gastoTotal
//    saldoFinal
//
// Fórmulas:
// rendaTotal = salario + rendaExtra
// gastoTotal = gastosFixos + gastosVariaveis
// saldoFinal = rendaTotal - gastoTotal
//
// e) Exiba:
//
// "Renda total: X"
// "Gastos totais: X"
// "Saldo final: X"

// → Seu código aqui:







console.log("_______________________________");