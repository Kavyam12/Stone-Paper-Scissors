let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll('.choice');
const compScorePara = document.querySelector("#comp-score");

const userScorePara = document.querySelector("#user-score");
const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const drawGame = (compChoice) => {
    msg.innerText = `Draw !, Computer choose ${compChoice}`;
    msg.style.backgroundColor = "rgb(63, 56, 56)";
}

const showWinner = (userWin, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win :) Computer choose ${compChoice}`;
        msg.style.backgroundColor = "green";
        // userScore++;
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Loose :( Computer choose ${compChoice}`;
        msg.style.backgroundColor = "#BA0021";
    }
}

const playGame = (userChoice) => {
    console.log("Userchoice is =", userChoice);
    const compChoice = genCompChoice();
    console.log("The computer choice is =", compChoice);


    if (userChoice === compChoice) {
        drawGame(compChoice);
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});

