var text = document.getElementById('text');
var list = [
    'Vííí!', 'Soha ne add fel!', 'Az idő mindent megold. Komolyan, csak gondolj bele!',
    'Egyszer egy barátom azt mondta: Never don\'t give up! Kicsit összezavarodott, de a motiváció megvan.',
    'Szép vagy 😝', '🌈', 'Yeet magyarul: Sutty'
];

document.getElementById('fab').addEventListener('click', () => {
    text.innerText = list[Math.floor(Math.random() * list.length)];
});