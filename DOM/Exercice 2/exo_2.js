// 2. Calculatrice simple
// ● Énoncé : Crée deux champs de saisie <input type="number" id="number1">
// et <input type="number" id="number2">, ainsi qu'un bouton <button
// id="calculate">Calculer</button>. Ajoute un élément <p
// id="result">Résultat : </p> pour afficher le résultat. Lors du clic sur
// "Calculer", affiche la somme des deux nombres dans l'élément result.


document.getElementById('calculate').addEventListener('click', function () {
    const num1 = Number(document.getElementById('number1').value)
    const num2 = Number(document.getElementById('number2').value)

    const sum = num1 + num2
    document.getElementById('result').textContent = 'Résultat: ' + sum
})