const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice =()=>{
    const choiceArr=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return choiceArr[randIdx];
} 

const drawGame= ()=>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor="#d6d4e0"
}

const ShowWinner=(userWin)=>{
    if(userWin){
        userScorePara.innerText= +userScorePara.innerText + 1;
        msg.innerText="You Win";
        msg.style.backgroundColor="#5b9aa0"
    }
    else{
        compScorePara.innerText=+compScorePara.innerText + 1;
        msg.innerText="You Loose";
        msg.style.backgroundColor="#e06377"
    }
}

const playGame =(userChoice)=>{


    const compChoice = genCompChoice();
    console.log("winner",userChoice,compChoice);
    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock")
        {
            //scissor,paper
            userWin=compChoice ==="paper"?false:true;
        }
        else if(userChoice === "paper")
        {
            //scissor,rock
            userWin=compChoice ==="rock"?true:false;
        }
        else{
            //paper,rock
            userWin=compChoice ==="paper"?true:false;
        }
        ShowWinner(userWin);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});