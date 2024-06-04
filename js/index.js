let player = document.querySelector(`#player`);

// начальная координата квадрата
let x = 0;

document.addEventListener(`keydown`, function (evt) {

    // если нажата стрелка Вправо
    if (evt.key == `ArrowRight`) {
        x += 100;

        // если нажата стрелка Влево
    } else if (evt.key == `ArrowLeft`) {
        x -= 100;
    }

    player.style.left = x + "px";
    
    if (x == 0) {
        player.classList.add(`player-1`);
        player.classList.remove(`player-2`);
        player.innerHTML = 1;
    } else if (x == 100) {
        player.classList.add(`player-2`);
        player.classList.remove(`player-3`);
        player.style.backgroundColor == `#FAC71B`;
        player.innerHTML = 2;
    } else if (x == 200) {
        player.classList.add(`player-3`);
        player.classList.remove(`player-4`);
        player.style.backgroundColor == `#E53E09`;
        player.innerHTML = 3;
    } else if (x == 300) {
        player.classList.add(`player-4`);
        player.style.backgroundColor == `#780402`;
        player.innerHTML = 4; 
    }
});



