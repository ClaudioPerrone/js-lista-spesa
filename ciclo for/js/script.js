/* 
Data una lista della spesa:
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];
- Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
- Svolgete questo esercizio col ciclo for.
*/

//INPUT DATI
const list = [ 
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

//ELABORAZIONE DATI
//Selezionare la ul tramite Id
const listaSpesa = document.getElementById('lista-spesa');
// Ciclo for per printare gli elementi della lista
for (let i = 0; i < list.length; i++) {
    //Creare l'elemento li
    const oggettoLista = document.createElement('li');
    oggettoLista.textContent = list[i];
    
    //OUTPUT DATI
    //appendere gli elementi della lista dentro la lista
    listaSpesa.appendChild(oggettoLista);
}