import prompt from 'prompt-sync'
let ler = prompt()

// Configurando nosso ambiente
const CIANO = '\x1b[36m%s\x1b[0m';
const MAGENTA = '\x1b[35m%s\x1b[0m';
const ERRO = '\x1b[1;31m%s\x1b[0m';
const SUCESSO = '\x1b[1;32m%s\x1b[0m';
const AVISO = '\x1b[1;33m%s\x1b[0m';

const TITULO = `    
 ██████╗ █████╗ ███████╗███████╗████████╗███████╗██████╗ ██╗ █████╗ 
██╔════╝██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔════╝██╔══██╗██║██╔══██╗
██║     ███████║█████╗  █████╗     ██║   █████╗  ██████╔╝██║███████║
██║     ██╔══██║██╔══╝  ██╔══╝     ██║   ██╔══╝  ██╔══██╗██║██╔══██║
╚██████╗██║  ██║██║     ███████╗   ██║   ███████╗██║  ██║██║██║  ██║
 ╚═════╝╚═╝  ╚═╝╚═╝     ╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝                                                                                                                                              
`;

// Inicio do programa

console.clear()
console.log(TITULO)

console.log()
console.log(CIANO, 'Qual nome do cliente?');
let nome = ler()

console.log()
console.log(MAGENTA, `Vamos ao pedido do ${nome}!`);
console.log()
console.log('Pressione alguma tecla para continuar')

// usar o comando apenas para o terminal aguardar um enter
ler()

// CAFÉ

console.clear()
console.log(TITULO)

console.log('Vamos aos pedidos de hoje!')
console.log(CIANO, `
Qual tamanho de café você deseja?
0- Nenhum
1- Pequeno (R$ 1.50)
2- Médio (R$ 2.50)
3- Grande (R$ 3.00)
`);
let tamanhoCafe = ler()

let valorTotal = 0
let cafeEscolhido = false
if (tamanhoCafe >= 1 && tamanhoCafe <= 3) {
    cafeEscolhido = true
    console.log(AVISO, 'Item adicionado com sucesso!')
} else {
    console.log(ERRO, 'Produto não encontrado! Nenhum item adicionado ao carrinho.')
}

if (tamanhoCafe == 1) {
    valorTotal += 1.50
} else if (tamanhoCafe == 2) {
    valorTotal += 2.50
} else if (tamanhoCafe == 3) {
    valorTotal += 3.00
}

// Empadinhas

console.clear()
console.log(TITULO)

if (tamanhoCafe == 1 || tamanhoCafe == 2) {
console.log(CIANO, `
    Quantas empadinhas o(a) ${nome} deseja? Cada uma custa R$ 2.30, 
    mas se levar um café pequeno ou médio e pelo menos 6 empadas, 
    tem desconto de 15% do valor final do pedido
`);
} else if (tamanhoCafe == 3) {
console.log(CIANO, `
    Quantas empadinhas o(a) ${nome} deseja? Cada uma custa R$ 2.30, 
    mas se levar um café grande e pelo menos 4 empadas, 
    tem desconto de 20% do valor final do pedido
`);
} else {
console.log(CIANO, `
    Quantas empadinhas o(a) ${nome} deseja? Cada uma custa R$ 2.30!
`);
}


let quantidadeEmpadinhas = Number(ler())

let empadinhaEscolhida = false
if (quantidadeEmpadinhas >= 1) {
    empadinhaEscolhida = true
    console.log(AVISO, 'Item adicionado com sucesso!')
} else {
    console.log(ERRO, 'Produto não encontrado! Nenhum item adicionado ao carrinho.')
}

let valorEmpada = 2.30
valorTotal += (valorEmpada * quantidadeEmpadinhas)

// Conceder desconto

let valorDesconto = 0
if (tamanhoCafe == 3 && quantidadeEmpadinhas >= 4) {
    valorDesconto = (valorTotal * 0.2)
    valorTotal -= valorDesconto
} else if ((tamanhoCafe == 1 || tamanhoCafe == 2) && quantidadeEmpadinhas >= 6) {
    valorDesconto = (valorTotal * 0.15)
    valorTotal -= valorDesconto
}

// Imprimindo total

console.clear()
if (valorTotal > 0) {
    console.log(TITULO)
    console.log('----------- PEDIDO -----------')
    if (cafeEscolhido) {
        console.log(`Café escolhido: ${tamanhoCafe}`)
    }
    if (empadinhaEscolhida) {
        console.log(`Quantidade de empadinhas: ${quantidadeEmpadinhas}`)
    }
    console.log('----------- PEDIDO -----------')
    
    console.log()
    console.log(`Valor de desconto R$ ${valorDesconto}`)
    console.log()
    console.log(SUCESSO, `O valor total do pedido é R$ ${valorTotal}`)    
} else {
    console.log(TITULO)
    console.log(ERRO, 'Nenhum item foi adicionado ao carrinho! Até a próxima.')
}