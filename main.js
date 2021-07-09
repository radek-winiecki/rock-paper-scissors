const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add("fadeIn");
        });
    };
    // Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        // Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach((options) => {
            options.addEventListener('click', function () {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                compareHands(this.textContent, computerChoice);

                // Update images
                playerHand.src = `assets/${this.textContent}.png`;
                computerHand.src = `assets/${computerChoice}.png`;
            })
        })
    }

    const updateScore = () => {
        const  playerScore = document.querySelector('.player-score p');
        const  computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        // Update text
        const  winner = document.querySelector(".winner");
        // Checking for a draw
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a draw";
            return;
        }
        // Check for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = "player wins";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
        // Chech for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = "computer wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "player wins";
                pScore++;
                updateScore();
                return;
            }
        }
        // Check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = "computer wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "player wins";
                pScore++;
                updateScore();
                return;
            }
        }
    }
    startGame();
    playMatch();
};
game();