const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li>a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

//menu 

document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY + document.getElementById('home').offsetHeight;
    const divs = document.querySelectorAll('.sec');
    const links = document.querySelectorAll('#menu a');

    divs.forEach((el) => {
        if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach(a => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active')
                }
            });
        }
    });
}

// slider

(function() {
    const sliderInit = function(slider) {
        let sliders = slider.querySelectorAll('.phones');
        //   console.log(sliders);

        sliders[0].classList.add('activity');

        let buttonNext = document.createElement('div'),
            buttonPrev = document.createElement('div');

        // buttonNext.innerHTML = "";
        // buttonPrev.innerHTML = "";

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
screen_V.addEventListener('click', function(event) {
    screen_V.classList.remove('turn-on');
});


let gorizontal = document.querySelector('.phone2');
let screen_G = document.querySelector('.screen2')

gorizontal.addEventListener('click', function(event) {
    screen_G.classList.toggle('turn-on');
});
screen_G.addEventListener('click', function(event) {
    screen_G.classList.remove('turn-on');
});



// tag
let PICTURES = document.querySelector('.pictures');
let ROW = PICTURES.querySelectorAll('.pictures__col');

let tags = document.querySelector('.portfolio__tags');
tags.onclick = function(event) {
    let target = event.target;
    if (target.tagName != 'SPAN') return;
    active_tag(target);


    ROW.forEach(element => {
        let arrImg = Array.from(element.querySelectorAll('img'));
        arrImg.sort(() => Math.random() - 0.5);
        element.innerHTML = '';
        arrImg.forEach(el => {
            element.append(el)
        })



    });

};

function active_tag(span) {
    if (tags) {
        tags.classList.remove('active_tag');
    };
    tags = span;
    tags.classList.add('active_tag');


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

//form
const FORM = document.getElementById('form');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');

FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    const textarea = document.getElementById('textarea').value.toString();
    const subject = document.getElementById('subject').value.toString();
    document.getElementById('result').innerText = subject;
    document.getElementById('message-block').classList.remove('hidden');

    if (subject == '' && textarea == '') {
        document.getElementById('result').innerHTML = 'Письмо отправлено <br/> Без темы <br/> Без описания';
    } else if (subject == '') {
        document.getElementById('result').innerHTML = 'Письмо отправлено <br/> Без темы  <br/> Описание: ' + textarea;
    } else if (textarea == '') {
        document.getElementById('result').innerHTML = 'Письмо отправлено <br/> Тема: ' + subject + '<br/> Без описания';
    } else document.getElementById('result').innerHTML = 'Письмо отправлено <br/> Тема: ' + subject + '<br/> Описание: ' + textarea;
    document.getElementById('pop-up_form').classList.remove('hidden');

});


CLOSE_BUTTON.addEventListener('click', () => {
    form.reset();
    document.getElementById('message-block').classList.add('hidden');
});