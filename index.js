let paddle1 = document.querySelector('.paddle1');
let paddle2 = document.querySelector('.paddle2'); 

let upPressed = false; 
let downPressed = false;

window.addEventListener('keydown', keyDownHandler, false);
window.addEventListener('keyup', keyUpHandler, false);
    
function keyDownHandler(e) {
    if (e.key == 'ArrowUp' || e.key =='Up') {
        upPressed = true;
        //paddle2 +=7;
    }
    else if(e.key == 'ArrowDown' || e.key =='down'){
        downPressed = true;
        //paddle2 -= 7;
    }
}

function keyUpHandler(e) {
    if (e.key == 'ArrowUp' || e.key =='Up') {
        upPressed = false;
    }
    else if(e.key == 'ArrowDown' || e.key =='down'){
        downPressed = false;
    }
}
