// 3. Prochaine date dans une semaine
// Écris une fonction qui prend une date en entrée et retourne la date qui est exactement une
// semaine plus tard.

function addAWeek (week, date = new Date()) {  
  date.setDate(date.getDate() + week * 7)

  return date
}

console.log(addAWeek(1, new Date('2024-10-10')))