// 1. Список песен
const playlist = [
    "media/music1.mp3",
    "media/music2.mp3",
    "media/music3.mp3",
    "media/music4.mp3"
];

let currentTrack = 0;

// 2. Находим элементы
const audio = document.getElementById('bg-music');
const playBtn = document.getElementById('play-button');
const skipBtn = document.getElementById('skip-button');

// 3. Загружаем первый трек
audio.src = playlist[currentTrack];

// 4. Логика кнопки Play/Pause
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸'; // Пауза
    } else {
        audio.pause();
        playBtn.textContent = '▶'; // Плей
    }
});

// 5. Логика кнопки Skip
skipBtn.addEventListener('click', () => {
    currentTrack++;
    if (currentTrack >= playlist.length) {
        currentTrack = 0;
    }
    
    audio.src = playlist[currentTrack];
    
    // Просто запускаем. Браузер разрешит, т.к. был клик.
    audio.play(); 
});