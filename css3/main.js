
let list = document.querySelector('.list-container');

window.setInterval(() => {
    if(list.classList.contains('step-one')) {
        list.classList.remove('step-one');
        list.classList.add('step-two');
    }else {
        list.classList.add('step-one');
        list.classList.remove('step-two');
    }
}, 1000);