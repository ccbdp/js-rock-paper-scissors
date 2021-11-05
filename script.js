let playerOneScore = document.getElementById('player-one-score');
let computerScore = document.getElementById('computer-one-score');
let playerResult = document.querySelector('.player-result-img');
let computerResult = document.querySelector('.computer-result-img');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector ('.scissors');


playerOneScore = 1;
computerScore = 1;


const playMatch = () =>{
    const options = document.querySelectorAll ('.icons button');
    let playerResult = document.querySelector('.player-result-img');
    const computerResult = document.querySelector('.computer-result-img');
    const computerOptions = ['rock', 'paper', 'scissors'];
    

    
    options.forEach(option => {
        option.addEventListener('click', function(e){
            const computerNumber = Math.floor(Math.random() * 3 );
            const computerChoice = computerOptions[computerNumber];
            const playerChoice = e.target.id;
           
            
            playerResult.src = `images/${playerChoice}.png`;
            computerResult.src = `images/${computerChoice}.png`;
            //console.log(playerChoice);
            //console.log(computerChoice);
            compareHands(playerChoice, computerChoice);
           
        });
    });
    }
    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector('h2');
        const pScore = document.getElementById('player-one-score');
        const cScore = document.getElementById('computer-one-score');

        if(playerChoice === computerChoice){
            winner.textContent = 'It\'s a tie!';
            return;
        }

        //Check for rock vs scissors
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore.textContent = playerOneScore ++;
                return;
        }else{
                winner.textContent = 'Computer Wins';
                cScore.textContent =  computerScore++;
                return;
        }
    }
       
    //Check for paper vs scissors
        if(playerChoice ==='paper'){
            if(computerChoice === 'scissors'){
               winner.textContent = 'Computer Wins';
               cScore.textContent = computerScore++;
                return;
        }else{
                winner.textContent = 'Player Wins';
                pScore.textContent = playerOneScore ++;
                return;
            }
        }
    //Check for paper vs rock
        if(playerChoice ==='paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore.textContent = computerScore++;
                return;
        }else{
                winner.textContent= 'Player Wins';
                pScore.textContent = playerOneScore ++;
                return;
            }
        }

        }
           


playMatch();
