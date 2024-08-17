function getAlphabetByNumber(num) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    try {
        num = parseInt(num, 10); // Converte a string para um número inteiro

        // Validação para números negativos e maiores do que o alfabeto
        if (isNaN(num) || num < 1 || num > alphabet.length) {
            throw new Error('Por favor, insira um número entre 1 e ' + alphabet.length + '.');
        }

        // Lógica para obter a letra correspondente
        for (let i = 0; i < num && i < alphabet.length; i++) {
            result = alphabet[i];
        }

    } catch (error) {
        result = error.message;
    }

    return result;
}

function performSearch() {
    let input = document.getElementById('search').value;
    let result = getAlphabetByNumber(input);
    document.getElementById('result').innerText = result;
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    performSearch();
});

function runTests() {
    let testCases = [
        { input: '1', expected: 'a' },
        { input: '5', expected: 'e' },
        { input: '26', expected: 'z' },
        { input: '27', expected: 'Por favor, insira um número entre 1 e 26.' },
        { input: '-1', expected: 'Por favor, insira um número entre 1 e 26.' },
        { input: 'abc', expected: 'Por favor, insira um número entre 1 e 26.' }
    ];

    let resultsDiv = document.getElementById('test-results');
    resultsDiv.innerHTML = '';

    testCases.forEach(test => {
        let result = getAlphabetByNumber(test.input);
        let resultElement = document.createElement('div');
        resultElement.textContent = `Entrada: ${test.input}, Esperado: ${test.expected}, Obtido: ${result}, Aprovado: ${result === test.expected ? 'Sim' : 'Não'}`;
        resultElement.classList.add('test-result');
        resultsDiv.appendChild(resultElement);
    });
}