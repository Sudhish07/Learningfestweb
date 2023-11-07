document.getElementById('calculate').addEventListener('click', function () {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);

    if (!isNaN(loanAmount) && !isNaN(annualInterestRate) && !isNaN(loanTerm)) {
        const monthlyInterestRate = annualInterestRate / 12;
        const emi = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
        document.getElementById('emiResult').textContent = `Your monthly EMI is: ₹${emi.toFixed(2)}`;
    } else {
        document.getElementById('emiResult').textContent = 'Please enter valid values.';
    }
});
