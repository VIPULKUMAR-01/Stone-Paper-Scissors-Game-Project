let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const getCompChoice = () => {
    const options = [ "rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw, play game again!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`you Win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose! ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    // Generate computer choice -> Modular way of Programming (dividing program into fum=nctions(methods))
    const compChoice = getCompChoice();
    console.log("Comp choice = ", compChoice);

    if(userchoice === compChoice){
        // draw Game
        drawGame();
    } else{
        let userWin = true;
        if (userchoice === "rock") {
            // sccissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});

