document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseover', () => {
        const start = parseInt(box.getAttribute('data-start'));
        const end = parseInt(box.getAttribute('data-end'));
        const numberElement = box.querySelector('.number');

        let currentNumber = start;
        const interval = setInterval(() => {
            currentNumber = Math.floor(Math.random() * (end - start + 1)) + start;
            numberElement.textContent = currentNumber;
        }, 50);

        box.addEventListener('mouseleave', () => {
            clearInterval(interval);
            numberElement.textContent = start;
        }, { once: true });
    });
});