// 4. Filtrer une liste d'éléments
// ● Énoncé : Crée une liste de pays dans un <ul id="countryList"> (par exemple
// : France, Allemagne, Espagne) et un champ de saisie <input
// id="filterInput" placeholder="Filtrer les pays...">. Lorsqu'un
// utilisateur tape quelque chose dans le champ, affiche uniquement les pays qui
// contiennent le texte saisi.

const countryList = document.getElementById('countryList')
const input = document.getElementById('filterInput')
const data = []

for (i = 0 ; i < countryList.childElementCount; i++) {
    data.push(countryList.children[i].textContent)
}

input.addEventListener('input', function(event) {
    const query = event.target.value.trim().toLowerCase();
    countryList.innerHTML = '';
    
    const filteredData = data.filter(item => 
        item.toLowerCase().includes(query) || 
        item.toLowerCase().includes(query)
    );

    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const items = document.createElement('li');
            items.textContent = item;
            countryList.appendChild(items);
        });
    } else {
        const items = document.createElement('li');
        items.textContent = 'Aucun résultat trouvé.';
        countryList.appendChild(items);
    }
})