const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li>a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

// slider

(function() {
    const sliderInit = function(slider) {

        let sliders = slider.querySelectorAll('.slider > .phones');

        //   console.log(sliders);

        sliders[0].classList.add('activity');

        let buttonNext = document.createElement('div'),
            buttonPrev = document.createElement('div');

        buttonNext.innerHTML = ">";
        buttonPrev.innerHTML = "<";

        buttonNext.classList.add('next');
        buttonPrev.classList.add('prev');

        //console.log(buttonNext, buttonPrev);

        slider.appendChild(buttonNext);
        slider.appendChild(buttonPrev);

        buttonNext.addEventListener('click', function() {

            //console.log('Click next');

            let activeElem = slider.querySelector('div.activity');

            if (activeElem != null) {
                activeElem.classList.remove('activity');

                let nextElem = activeElem.nextElementSibling.classList.add('activity');

                if (nextElem == null) {
                    activeElem.classList.remove('activity');
                    // nextElem.classList.add('active');
                    activeElem.previousElementSibling.classList.add('activity');

                }
            }
        });

        buttonPrev.addEventListener('click', function() {

            let activeElem = slider.querySelector('div.activity');

            if (activeElem != null) {
                activeElem.classList.remove('activity');

                let nextElem = activeElem.previousElementSibling.classList.add('activity');

                if (nextElem == null) {
                    activeElem.classList.remove('activity');
                    activeElem.previousElementSibling.classList.add('activity');
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