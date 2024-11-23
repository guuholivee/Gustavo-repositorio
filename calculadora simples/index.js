  let display = document.getElementById('display');
  let calcContainer = document.getElementById('calc-container');
  let powerBtn = document.getElementById('powerBtn');
  let isOn = false;

function toggleCalculator() {
    isOn = !isOn;
    if (isOn) {
        calcContainer.classList.remove('hidden');
        powerBtn.textContent = 'Desligar';
        display.value = '';
    } else {
        calcContainer.classList.add('hidden');
        powerBtn.textContent = 'Ligar';
        display.value = '';
    }
}

powerBtn.addEventListener('click', toggleCalculator);

function appendNumber(number) {
    if (!isOn) return;
    display.value += number;
}

function appendOperator(operator) {
    if (!isOn) return;
    display.value += operator;
}

function clearDisplay() {
    if (!isOn) return;
    display.value = '';
}

function calculate() {
    if (!isOn) return;
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}