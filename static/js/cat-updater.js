const intervalInput = document.getElementById('intervalInput');
const catImage = document.getElementById('catImage');
const catCounter = document.getElementById('catCounter');
const errorMessage = document.getElementById('errorMessage');

let updateInterval;
let catCount = 0;


function updateCatImage() {
    catImage.src = `https://cataas.com/cat?t=${new Date().getTime()}`;
    catCount++;
    catCounter.textContent = catCount;
}

function setUpdateInterval() {
    if (updateInterval) {
        clearInterval(updateInterval);
    }

    const interval = intervalInput.value;

    if (interval > 0) {
        updateInterval = setInterval(updateCatImage, interval * 1000);
        console.log(`Интервал обновления установлен на ${interval} секунд`);
        errorMessage.style.display = 'none';
    } else {
        console.log('Пожалуйста, введите положительное число секунд');
        errorMessage.style.display = 'block';
    }
}

intervalInput.addEventListener('input', function(e) {
    if (e.target.value.startsWith('-')) {
        e.target.value = '';
        errorMessage.style.display = 'block';
    }
    setUpdateInterval();
});

updateCatImage();