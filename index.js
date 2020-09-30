var text = document.getElementById('text');
var list = [
    'Vííí!', 'Soha ne add fel!', 'Az idő mindent megold. Komolyan, csak gondolj bele!',
    'Egyszer egy barátom azt mondta: Never don\'t give up! Kicsit összezavarodott, de a motiváció megvan.',
    'Szép vagy 😝', '🌈', 'Yeet magyarul: Sutty', '👉👈', '✨',
    'coder girl (noun)\nA girl with magical powers who can hack your day.\nSynonyms: sorceress, witch, fairy, Luca'
];

console.log(list.length + ' elem betöltve');

document.getElementById('fab').addEventListener('click', () => {
    text.innerText = list[Math.floor(Math.random() * list.length)];
});