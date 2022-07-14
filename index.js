
// --------------------- JUMP ---------------------

const player = document.getElementById("player")

document.addEventListener("click", function(){
    player.classList.add("playerJump")
})
player.addEventListener('animationend', () => {
    player.classList.remove("playerJump")
})

// --------------------- SCORE ---------------------
let score = 0;
let timeNow;
function scoreInterval(){
    timeNow = setInterval(() => {
        score++;
        document.getElementById("score").innerText = score; 
    }, 1000);
}
scoreInterval();



// --------------------- PLAY / STOP ---------------------
const playPauseChange = document.getElementById("playPause");
const fontAwesomeBut = document.getElementById("fontAwesomeBut")
const backGround = document.getElementById("container")
const cacto = document.getElementById("cacto")

playPauseChange.addEventListener('click', playPauseFn);

function pauseGame(){
    cacto.style.animationPlayState = 'paused';
    player.style.animationPlayState = 'paused';
    backGround.style.animationPlayState = 'paused';
    clearInterval(timeNow)
}

function resumeGame(){
    cacto.style.animationPlayState = 'running';
    player.style.animationPlayState = 'running';
    backGround.style.animationPlayState = 'running';
    scoreInterval();
}

function playPauseFn(){
    if(fontAwesomeBut.classList.contains("fa-play")){
        resumeGame()
    }else{
        pauseGame()
    }
    fontAwesomeBut.classList.toggle("fa-play");
    fontAwesomeBut.classList.toggle("fa-pause");
};


