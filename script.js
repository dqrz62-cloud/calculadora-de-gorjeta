// ==========================================================================
// Seleção dos Elementos do DOM
// ==========================================================================
const billAmountInput = document.getElementById('bill-amount');
const tipPercentageInput = document.getElementById('tip-percentage');
const calculateButton = document.getElementById('calculate-button');
const tipAmountDisplay = document.getElementById('tip-amount-display');
const totalAmountDisplay = document.getElementById('total-amount-display');

// ==========================================================================
// Função Auxiliar de Formatação em Moeda Brasileira (R$)
// ==========================================================================
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// ==========================================================================
// Função Principal para Calcular a Gorjeta
// ==========================================================================
function calculateTip() {
    // 1. Obter e converter os valores dos campos de entrada
    const billValue = parseFloat(billAmountInput.value);
    const tipPercentValue = parseFloat(tipPercentageInput.value);

    // 2. Validações básicas: campos vazios, NaN ou valores <= 0
    if (isNaN(billValue) || billValue <= 0) {
        alert('Por favor, insira um valor válido e maior que zero para a conta.');
        billAmountInput.focus();
        return;
    }

    if (isNaN(tipPercentValue) || tipPercentValue < 0) {
        alert('Por favor, insira uma porcentagem de gorjeta válida (0 ou superior).');
        tipPercentageInput.focus();
        return;
    }

    // 3. Fórmulas de cálculo
    // Valor da Gorjeta = (Valor da Conta * Porcentagem) / 100
    const tipAmount = (billValue * tipPercentValue) / 100;
    
    // Total a Pagar = Valor da Conta + Valor da Gorjeta
    const totalAmount = billValue + tipAmount;

    // 4. Atualizar os textos na tela formatados com R$ e duas casas decimais
    tipAmountDisplay.textContent = formatCurrency(tipAmount);
    totalAmountDisplay.textContent = formatCurrency(totalAmount);
}

// ==========================================================================
// Configuração do Evento de Clique
// ==========================================================================
calculateButton.addEventListener('click', calculateTip);
