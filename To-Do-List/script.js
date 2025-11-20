const taskInput     = document.getElementById('taskInput');
const dateInput     = document.getElementById('dateInput');
const addBtn        = document.getElementById('addBtn');
const enCoursList   = document.getElementById('tachesEnCours');
const termineesList = document.getElementById('tachesTerminees');


function loadArr(key) {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

let enCoursArr   = loadArr('tachesEnCours');
let termineesArr = loadArr('tachesTerminees');

function save() {
  localStorage.setItem('tachesEnCours',   JSON.stringify(enCoursArr));
  localStorage.setItem('tachesTerminees', JSON.stringify(termineesArr));
}

function isValidDate(d) {
  const dt = new Date(d);
  return !isNaN(dt);
}

function existTache(texte, date) {
  return [...enCoursArr, ...termineesArr]
    .some(t => t.texte === texte && t.date === date);
}

function formatDMY(d) {
  const dt = new Date(d);
  const day   = String(dt.getDate()).padStart(2,'0');
  const month = String(dt.getMonth()+1).padStart(2,'0');
  const year  = dt.getFullYear();
  return `${day}/${month}/${year}`;
}

function liCreator({texte, date}, isTerminee) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="text">${texte}</span>
    <span class="date"> - ${formatDMY(date)}</span>
    <button class="toggle">${isTerminee ? 'En cours' : 'Terminer'}</button>
    <button class="modifier">Modifier</button>
    <button class="supprimer">Supprimer</button>
  `;

  
  const spanDate = li.querySelector('.date');
  const dt       = new Date(date); dt.setHours(0,0,0,0);
  const today    = new Date();     today.setHours(0,0,0,0);
  if (dt < today)           spanDate.style.color = 'red';
  else if (dt.getTime()===today.getTime()) spanDate.style.color = 'orange';
  else                     spanDate.style.color = 'green';

   
  li.querySelector('.toggle').addEventListener('click', () => {
    const src = isTerminee ? termineesArr : enCoursArr;
    const dst = isTerminee ? enCoursArr   : termineesArr;
    const idx = src.findIndex(t => t.texte===texte && t.date===date);
    dst.push(...src.splice(idx,1));
    save(); refresh();
  });

  
  li.querySelector('.modifier').addEventListener('click', () => {
    const newTxt  = prompt("Modifier la tâche :", texte);
    const newDate = prompt("Modifier la date (YYYY-MM-DD) :", date);
    if (!newTxt || !newDate) return;
    if (!isValidDate(newDate)) return alert("Date invalide !");
    if (existTache(newTxt.trim(), newDate.trim()))
      return alert("Cette tâche existe déjà !");
    const arr = isTerminee ? termineesArr : enCoursArr;
    const i   = arr.findIndex(t => t.texte===texte && t.date===date);
    arr[i] = { texte: newTxt.trim(), date: newDate.trim() };
    save(); refresh();
  });

  
  li.querySelector('.supprimer').addEventListener('click', () => {
    const arr = isTerminee ? termineesArr : enCoursArr;
    const i   = arr.findIndex(t => t.texte===texte && t.date===date);
    arr.splice(i,1);
    save(); refresh();
  });

  (isTerminee ? termineesList : enCoursList).appendChild(li);
}

function refresh() {
  enCoursList.innerHTML   = '';
  termineesList.innerHTML = '';
  enCoursArr.forEach(t => liCreator(t, false));
  termineesArr.forEach(t => liCreator(t, true));
}

addBtn.addEventListener('click', () => {
  const txt  = taskInput.value.trim();
  const date = dateInput.value;
  if (!txt)                 return alert("La tâche est vide !");
  if (!date)                return alert("Choisis une date !");
  if (!isValidDate(date))   return alert("Date invalide !");
  if (existTache(txt, date)) return alert("Cette tâche existe déjà !");
  enCoursArr.push({ texte: txt, date });
  save(); refresh();
  taskInput.value = '';
  dateInput.value = '';
  taskInput.focus();
});

refresh();
