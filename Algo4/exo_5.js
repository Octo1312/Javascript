// 5. Formatage personnalisé d'une date
// Écris une fonction qui prend une date en entrée et la formate sous la forme "Jour de la
// semaine mois jour année". Utilise toLocaleDateString() pour obtenir le format
// correct.

function formatCustomDate(date) {
    return date.toLocaleDateString('fr-FR', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
const datevoulu = new Date('2025-02-19');
console.log(formatCustomDate(datevoulu))