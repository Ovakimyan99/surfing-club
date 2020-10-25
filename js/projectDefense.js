document.onkeydown = function(e) {
    e = e || window.event;
    if (e.ctrlKey && e.keyCode == 85 || e.ctrlKey && e.keyCode == 83 || 
        e.ctrlKey && e.shiftKey && e.keyCode == 73 || e.ctrlKey && e.keyCode == 91 || 
        e.ctrlKey && e.keyCode == 93) {
        e.preventDefault();
        clear();
    }
    return true;
}

const windowWidth = document.body.clientWidth;
const password = 'brainTigr?!123';
console.log(windowWidth);

// setTimeout(defense, 120000);
let timer = setInterval(defense, 2000);

function defense(e) {
    if (windowWidth != document.body.clientWidth) {
        if(prompt('Введите код доступа в течение 60 секунд!', '') == password){
            alert('входите, босс');
            clearInterval(timer);
        } else {
            clear();
            clearInterval(timer);
        }
    }
}

function clear() {
    console.log('победа');
    document.body.textContent = '';
    document.head.textContent = '';
}