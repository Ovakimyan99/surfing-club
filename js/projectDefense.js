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
const windowHeight = document.documentElement.clientHeight;
const password = 'brainTigr?!123';
console.log(windowWidth);

let timer = setInterval(defense, 7000);

console.log(windowHeight);

function defense(e) {
console.log(windowHeight);

    if (windowWidth != document.body.clientWidth || windowHeight != document.documentElement.clientHeight) {
        if(prompt('Введите код доступа в течение 57 секунд!', '') == password){
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