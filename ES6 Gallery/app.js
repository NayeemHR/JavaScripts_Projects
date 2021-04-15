import people from './data.js';

// console.log(people);

const container = document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// set slides 

container.innerHTML = people.map((person, slideIndex) => {
    const {img,name,job,text} = person;
    
    let position = 'next';
    if (slideIndex === 0) {
        position = 'active';
    }
    if (slideIndex === people.length - 1) {
        position = 'last';
    }
    return `
    <article class="slide ${position}">
    <img src="${img}" alt="${name}" class="img">
    <h4>${name}</h4>
    <p class="title">${job}</p>
    <p class="text">
    ${text}
    </p>
    <div class="quote-icon" >
    <div class="fas fa-quote-right"></div>
    </article>`;
})
.join('');

const startSlider = (type) => {
    const active = document.querySelector('.active');
    const last = document.querySelector('.last');
    let next = active.nextElementSibling;
    if (!next) {
        next = container.firstElementChild;
    }
    active.classList.remove(['active']);
    last.classList.remove(['last']);

    if (type === 'prev') {
        active.classList.add('next');
        last.classList.add('active');
        next = last.previousElementSibling;
        if(!next) {
            next = container.lastElementChild;
        }
        next.classList.remove(['next']);
        next.classList.add('last');
        return;
    }
    next.classList.remove(['next']);

    active.classList.add('last');
    last.classList.add('next');
    next.classList.add('active');
};

nextBtn.addEventListener('click', () => {
    startSlider();
});

prevBtn.addEventListener('click', () => {
    startSlider('prev');
});
