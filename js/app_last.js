console.log("Connected!");
let yes = document.querySelector('#yes'),
    no = document.querySelector('#no'),
    yesChoice = document.querySelector('.yesChoice'),
    noChoice = document.querySelector('.noChoice'),
    exit = document.querySelectorAll('.fa-times-circle');

yes.addEventListener('click', function () {
    noChoice.style.display = 'none';
    yesChoice.style.display = 'flex';
});

no.addEventListener('click', function () {
    noChoice.style.display = 'block';
    yesChoice.style.display = 'none';
});

for (let i = 0; i < exit.length; i++) {

    exit[i].addEventListener('click', function () {
        noChoice.style.display = 'none';
        yesChoice.style.display = 'none';
    });
}
