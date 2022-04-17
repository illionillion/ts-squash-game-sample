"use strict";
window.addEventListener('load', e => {
    const box = document.getElementById('box');
    let num = 0;
    box.addEventListener('click', e => {
        num++;
        e.target.innerHTML = `${num}`;
    });
});
