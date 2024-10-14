// Calculator

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function backspace() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

// Currency Converter

function convertCurrency() {
    const sourceAmount = parseFloat(document.getElementById('sourceAmount').value);
    const sourceCurrency = document.getElementById('sourceCurrency').value;
    const targetCurrency = document.getElementById('targetCurrency').value;
    
    const exchangeRates = {
        'USD': { 'EUR': 0.85, 'CAD': 1.25, 'USD': 1 },
        'EUR': { 'USD': 1.18, 'CAD': 1.47, 'EUR': 1 },
        'CAD': { 'USD': 0.80, 'EUR': 0.68, 'CAD': 1 }
    };
    
    if (isNaN(sourceAmount)) {
        document.getElementById('result').textContent = 'Please enter a valid amount.';
        return;
    }
    
    const rate = exchangeRates[sourceCurrency][targetCurrency];
    const convertedAmount = sourceAmount * rate;
    
    document.getElementById('result').textContent = 
        `${sourceAmount} ${sourceCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
}

