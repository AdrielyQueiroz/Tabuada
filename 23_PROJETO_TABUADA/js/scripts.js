document.addEventListener("DOMContentLoaded", function() {
    const multiplicationForm = document.querySelector("#multiplication-form");
    const numberInput = document.querySelector("#number");
    const multiplicationInput = document.querySelector("#multiplicator");
    const multiplicationOperations  = document.querySelector("#multiplication-operations");
    const multiplicationTitle = document.querySelector("#multiplication-title span");

    const createTable = (number, multiplicatorNumber) => {
        multiplicationOperations.innerHTML = "";

        for (let i = 1; i <= multiplicatorNumber; i++) {
            const result = number * i;

            const operationElement = document.createElement("div");
            operationElement.classList.add("row");
            operationElement.innerHTML = `
                <div class="operation">${number} X ${i} = </div>
                <div class="result">${result}</div>
            `;

            multiplicationOperations.appendChild(operationElement);
        }

        multiplicationTitle.innerText = number;
    };

    multiplicationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede a submissão do formulário

        const multiplicationNumber = parseInt(numberInput.value);
        const multiplicatorNumber = parseInt(multiplicationInput.value);

        if (!multiplicationNumber || !multiplicatorNumber) {
            multiplicationOperations.innerHTML = '<p>Preencha ambos os campos corretamente.</p>';
            multiplicationTitle.innerText = "";
            return;
        }

        createTable(multiplicationNumber, multiplicatorNumber);
    });

});