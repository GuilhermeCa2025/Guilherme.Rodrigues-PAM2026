// Variáveis globais
var numero1;
var numero2;
var soma;
var subtracao;
var multiplicacao;
var divisao;
var exponenciacao;
var raiz;

// Entrada de dados
numero1 = Number(prompt("Digite o primeiro número:"));
numero2 = Number(prompt("Digite o segundo número:"));

// Cálculos
soma = numero1 + numero2;
subtracao = numero1 - numero2;
multiplicacao = numero1 * numero2;
divisao = numero1 / numero2;
exponenciacao = numero1 ** numero2;
raiz = Math.sqrt(numero1);

// Saída de dados
alert(
    "Soma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao +
    "\nExponenciação: " + exponenciacao +
    "\nRaiz quadrada: " + raiz
);
