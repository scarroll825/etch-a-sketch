const container = document.querySelector('.container');

for (i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    container.appendChild(div);
};