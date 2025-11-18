// 1. Afficher un message selon la valeur saisie
// ● Énoncé : Crée un champ de saisie <input id="userInput"
// placeholder="Tapez quelque chose...">, un élément <p
// id="message"></p> pour afficher un message et un bouton. Lorsque
// l'utilisateur tape un mot précis "Bonjour" et clique sur le bouton, affiche
// le message "Bonne journée !" Dans ces cas-là, la couleur du message
// doit être vert. S'il tape "Au revoir", affiche "À la prochaine !". Pour toute
// autre saisie, affiche "Je ne comprends pas" en rouge.

    const userInput = document.getElementById('userInput')
    const textback = document.getElementById('message')
    const button = document.getElementById('button')


    button.addEventListener('click', function() {
        if(userInput.value.includes('Bonjour')) {
          textback.innerHTML = 'Bonne journée !'
          textback.style.color = 'green'  
        } else if(userInput.value.includes('Au revoir')) {
            textback.innerHTML = 'A la prochaine !'
        } else {
            textback.innerHTML = 'Je ne comprends pas'
            textback.style.color = 'red'
        }
        })
