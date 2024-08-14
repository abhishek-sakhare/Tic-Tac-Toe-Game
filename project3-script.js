const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");
const box5 = document.querySelector("#box5");
const box6 = document.querySelector("#box6");
const box7 = document.querySelector("#box7");
const box8 = document.querySelector("#box8");
const box9 = document.querySelector("#box9");

const borders = document.querySelectorAll(".border");

box1.addEventListener("click", () => {
    box1.innerText = "X";
    playGame(userChoice);
});
box2.addEventListener("click", () => {
    box2.innerText = "X";
    playGame(userChoice);
});
box3.addEventListener("click", () => {
    box3.innerText = "X";
    playGame(userChoice);
});
box4.addEventListener("click", () => {
    box4.innerText = "X";
    playGame(userChoice);
});
box5.addEventListener("click", () => {
    box5.innerText = "X";
    playGame(userChoice);
});
box6.addEventListener("click", () => {
    box6.innerText = "X";
    playGame(userChoice);
});
box7.addEventListener("click", () => {
    box7.innerText = "X";
    playGame(userChoice);
});
box8.addEventListener("click", () => {
    box8.innerText = "X";
    playGame(userChoice);
});
box9.addEventListener("click", () => {
    box9.innerText = "X";
    playGame(userChoice);
});

const genCompChoice = () => {
    const options = [box1,box2,box3,box4,box5,box6,box7,box8,box9]
    const randIdx = Math.floor(Math.random()*9);
    return options[randIdx];

}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice !== compChoice) {
        console.log(compChoice);
    compChoice.innerText = "O";

    }
    else {
        playGame(userChoice);
    }
    
}
borders.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        choice.disabled = true;
        playGame(userChoice);
        

    })
});
