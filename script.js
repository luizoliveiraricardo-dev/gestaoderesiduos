// Seleção de elementos
const input1 = document.querySelector('#entrada1');
const input2 = document.querySelector('#entrada2');
const botao = document.querySelector('#processar');
const saida = document.querySelector('#saida');

// Função de validação
function validarDados(valor1, valor2) {
    if (!valor1 || valor1.trim() === '') {
        return 'O campo "Entrada 1" não pode ficar vazio.';
    }
    if (valor2 === '' || isNaN(valor2)) {
        return 'O campo "Entrada 2" deve conter um número válido.';
    }
    if (Number(valor2) < 0) {
        return 'O número digitado em "Entrada 2" não pode ser negativo.';
    }
    return null;
}

// Função de processamento
function processarDados() {
    const valor1 = input1.value;
    const valor2 = input2.value;

    // Validação estrita
    const erro = validarDados(valor1, valor2);
    if (erro) {
        saida.textContent = erro;
        saida.style.color = 'red';
        return;
    }

    // Aqui você pode implementar qualquer lógica de processamento
    // Exemplo: concatenar texto e multiplicar o número por 2
    const numeroProcessado = Number(valor2) * 2;
    const resultadoFinal = `Olá, "${valor1}". O número processado é: ${numeroProcessado}.`;

    // Renderizando o resultado na página de forma elegante
    saida.textContent = resultadoFinal;
    saida.style.color = 'var(--cor-primaria)';
}

// Adicionando escutador de eventos
botao.addEventListener('click', processarDados);
