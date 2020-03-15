const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li>a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});


// slider

(function() {
    const sliderInit = function(slider) {
        let sliders = slider.querySelectorAll('.phones');
        //   console.log(sliders);

        sliders[0].classList.add('activity');

        let buttonNext = document.createElement('div'),
            buttonPrev = document.createElement('div');

        buttonNext.innerHTML = ">";
        buttonPrev.innerHTML = "<";

        buttonNext.classList.add('next');
        buttonPrev.classList.add('prev');
        // console.log(buttonNext, buttonPrev);

        slider.append(buttonNext);
        slider.append(buttonPrev);

        buttonNext.addEventListener('click', function() {

            let activeElem = slider.querySelector('div.activity');

            if (activeElem != null) {
                let nextElem = activeElem.nextElementSibling;

                if (nextElem.classList.contains('phones')) {
                    activeElem.classList.remove('activity');
                    nextElem.classList.add('activity');
                } else {
                    activeElem.classList.remove('activity');
                    sliders[0].classList.add('activity');
                }
            }
        });

        buttonPrev.addEventListener('click', function() {

            let activeElem = slider.querySelector('div.activity');

            if (activeElem != null) {
                let prevElem = activeElem.previousElementSibling;

                if (!prevElem) {
                    activeElem.classList.remove('activity');
                    sliders[sliders.length - 1].classList.add('activity');

                } else if (prevElem.classList.contains('phones')) {
                    activeElem.classList.remove('activity');
                    prevElem.classList.add('activity');

                } else {
                    activeElem.classList.remove('activity');
                    sliders[1].classList.add('activity');
                }
            }
        });
    };

    this.slider = function(selector) {
        let slider = document.querySelector(selector);
        if (!slider) {
            return false;
        };
        sliderInit(slider);
    };
}());
slider('.slider');


// screen

let vertical = document.querySelector('.phone1');
let screen_V = document.querySelector('.screen1');

vertical.addEventListener('click', function(event) {
    screen_V.classList.toggle('turn-on');
});

let gorizontal = document.querySelector('.phone2');
let screen_G = document.querySelector('.screen2')

gorizontal.addEventListener('click', function(event) {
    screen_G.classList.toggle('turn-on');
});


// tag
let PICTURES = document.querySelector('.pictures');
let ROW = PICTURES.querySelectorAll('.pictures__col');
console.log(ROW);

let tags = document.querySelector('.portfolio__tags');
// console.log(tags);
tags.onclick = function(event) {
    let target = event.target;
    if (target.tagName != 'SPAN') return;
    active_tag(target);
};

function active_tag(span) {
    if (tags) {
        tags.classList.remove('active_tag');
    };
    tags = span;
    tags.classList.add('active_tag');

    let arr = [0, 1, 2, 3];
    let arrRandom = [];

    for (let i = 0; i < arr.length; i + 2) {
        let numRandom = Math.ceil(Math.random() * arr.length - 1);
        arrRandom.push(arr.splice(numRandom, 1));
    }
    let i = 0;
    ROW.forEach(element => {
        element.style.order = arrRandom[i];
        i++;
    })
};


//border

let PORTFOLIO = document.querySelector('.pictures');
let borderImg;
PORTFOLIO.addEventListener('click', function(event) {
    console.log(event);
    let target = event.target;
    if (target.tagName != 'IMG') return;
    getBorder(target);
});

function getBorder(img) {
    if (borderImg) {
        borderImg.classList.remove('active_border')
    }
    borderImg = img;
    borderImg.classList.add('active_border');
};