'use strict';
let arrImg = [
    "g.jpg",
    "g1.jpg",
    "g2.jpg",
    "g3.jpg",
    "g4.jpg",
    "g5.jpg",
    "g6.jpg",
];

let currIndex = 0;

let turnLeft = document.querySelector('.fa-angle-double-left'),
    turnRight = document.querySelector('.fa-angle-double-right'),
    img = document.querySelector('img'),
    para = document.querySelector('.para');
turnLeft.style.display = 'none';
para.style.display = 'none';
turnRight.addEventListener('click', function () {
    currIndex++;
    if (currIndex < arrImg.length) {
        let imgUrl = `Pictures/${arrImg[currIndex]}`;
        img.src = imgUrl;
        document.body.style.background = `linear-gradient(to left, rgba(0, 0, 0, .7), rgba(0, 0, 0, .8)), url(${imgUrl}) no-repeat`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = '0% 30%';
        turnLeft.style.display = 'block';
        para.style.display = 'none';
    }
    if (currIndex == arrImg.length - 1) {
        this.style.display = 'none';
        para.style.display = 'block';
    }
});

turnLeft.addEventListener('click', function () {
    currIndex--;
    if (currIndex >= 0) {
        let imgUrl = `Pictures/${arrImg[currIndex]}`;
        img.src = imgUrl;
        document.body.style.background = `linear-gradient(to left, rgba(0, 0, 0, .7), rgba(0, 0, 0, .8)), url(${imgUrl}) no-repeat`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = '0% 30%';
        turnRight.style.display = 'block';
        para.style.display = 'none';
    }
    if (currIndex == 0) {
        this.style.display = 'none';
    }
});
