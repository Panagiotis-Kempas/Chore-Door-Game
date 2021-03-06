let doorImage1 = document.getElementById('door1');
let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';


let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
let currentlyPlaying = true;

function isBot(door) {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}


function isClicked(door) {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }

}


function playDoor(door) {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
}




function randomChoreDoorGenerator() {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor3 = beachDoorPath
    } else if (choreDoor === 2) {
        openDoor3 = botDoorPath;
        openDoor1 = spaceDoorPath;
        openDoor2 = beachDoorPath;
    }
}

doorImage1.onclick = () => {

    if (currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        startButton.onclick = () => {
            if (currentlyPlaying === false) {
                startRound();
            }
        }
        playDoor(doorImage1);
    }

}
doorImage2.onclick = () => {

    if (currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        startButton.onclick = () => {
            if (currentlyPlaying === false) {
                startRound();
            }
        }
        playDoor(doorImage2);

    }
}
doorImage3.onclick = () => {

    if (currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        startButton.onclick = () => {
            if (currentlyPlaying === false) {
                startRound();
            }

        }

        playDoor(doorImage3);
    }
}

function startRound() {
    numClosedDoors = 3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}





let startButton = document.getElementById('start');


function gameOver(status) {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    }
    else {
        startButton.innerHTML = 'Game over! Play again?';
    }
    currentlyPlaying = false;
}


startRound();



