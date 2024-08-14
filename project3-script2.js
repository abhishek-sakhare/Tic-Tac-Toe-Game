let boxes2 = document.querySelectorAll(".border");

boxes2.forEach((box) => {
    box.addEventListener("click", () => {
    box.innerText = "X";
    console.log("box is clicked");
    playGame();
}) });


const genCompChoice = () => {
    const options = [box1,box2,box3,box4,box5,box6,box7,box8,box9]
    const randIdx = Math.floor(Math.random()*9);
    return options[randIdx];

};

const playGame = (userChoice) => {
    
    boxes2.forEach((choice) => {
        choice.addEventListener("click", () =>{
            const userChoice = choice.getAttribute("id");
            console.log(userChoice);
            choice.disabled = true;
            //playGame(userChoice);
            
    
        })
    });

    const compChoice = genCompChoice();
    if(userChoice !== compChoice) {
        console.log(compChoice);
    compChoice.innerText = "O";
    compChoice.disabled = true;

    }
    else {
        playGame(userChoice);
    };
    
};

