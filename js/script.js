'use strict';

const btnsRequestConsult = document.querySelectorAll('.btn--request-consult');

btnsRequestConsult.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('click');
    })
})