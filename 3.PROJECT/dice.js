const p1score = document.querySelector('#score--0').innerHTML = 0;
const p2score = document.querySelector('#score--1').innerHTML = 0;
const diceblock = document.querySelector('.dice-block');
const diceroll = document.querySelector('.btn--roll');
const dicehold = document.querySelector('.btn--hold');
let btnnew = document.querySelector('.btn1');
let p0currentscore = document.querySelector('#current--0');
let p1currentscore = document.querySelector('#current--1');
let player = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');


diceblock.classList.add('hidden')
let curscore;
// hold the current player
let currentplayer = 0//0 is a 1st player

// hold a main score of player
score = [0, 0] // initially main scores are zero

let currentscore = 0;
let switchlogic = () => {
    currentscore = 0;
    currentplayer = currentplayer === 0 ? 1 : 0;

    player.classList.toggle('player--active')
    player1.classList.toggle('player--active')

}
let playing = true;// this variable use to check game is running or not
diceroll.addEventListener('click', function () {
    if (playing)// first time playing value is true but if player won the game then playing value will be false and rolldice and hold button will be off
    {
        // 1.genert a random dice number
        let dicenum = Math.floor(Math.random() * 6) + 1
        // console.log(dicenum);

        // p1currentscore = p1currentscore + dicenum

        // 2.display the dice roll
        diceblock.classList.remove('hidden');
        // HOW TO MANIPULATE PICTURE
        diceblock.src = `dice-${dicenum}.png`;
        // 3.if dice number is 1 switch

        if (dicenum !== 1) {
            currentscore = currentscore + dicenum;

            document.querySelector(`#current--${currentplayer}`).textContent = currentscore;//dynamicaly choose the player and set the currentscore to the 1 or 0th player
            // p0currentscore.textContent=currentscore; //hardcode
        }
        else {
            document.querySelector(`#current--${currentplayer}`).textContent = 0
            //switch function call 
            switchlogic();
            p0currentscore.textContent = 0;
            currentscore = currentscore + dicenum;

            document.querySelector(`#current--${currentplayer}`).textContent = currentscore;

        }
    }

})

// Hold button
dicehold.addEventListener('click', function () {
    if (playing) {
        // 1. add the current score to the main score
        // score[0]=score[0]+currentscore
        // score[1]=score[1]+currentscore
        score[currentplayer] = score[currentplayer] + currentscore;
        curscore = document.getElementById(`score--${currentplayer}`).textContent = score[currentplayer]

        document.getElementById(`current--${currentplayer}`).textContent = 0;

        // 2.if player has 100 and above  then player win
        if (score[currentplayer] >= 7) {
            //Finish the game
            // HOW TO DISABLE THE BUTTON
            playing = false;
            document.querySelector(`#score--${currentplayer}`).innerHTML = `Player ${currentplayer + 1} Won  The  Match  🎉🎉🎉🎉`//not required part

            document.querySelector(`.player--${currentplayer}`).classList.add(`.player--${currentplayer}`)

            console.log(score[currentplayer]);
            document.querySelector(`.player--${currentplayer}`).classList.add('player--winner')
            document.querySelector(`.player--${currentplayer}`).classList.remove('player--active');
            diceblock.classList.add('hidden');

            // document.querySelector(".btn--roll"). = false;
        }
        else {
            //switch  the player function call
            switchlogic();

        }
    }

})
btnnew.addEventListener('click', function () {
    console.log(curscore.textContent = 0);
    // 1.REMOVE THE PLAYER--WINNER CLASS AND RESET THE COLOR
    document.querySelector(`.player--${currentplayer}`).classList.remove('player--winner')
    document.querySelector(`.player--${currentplayer}`).classList.add('player--active')

    // 2.reset the all main  score to 0 
    document.querySelector(`#score--0`).innerHTML = 0;
    document.querySelector(`#score--1`).innerHTML = 0;

    // 3.enable the all the button
    playing = true;

    // assign the currentscore is 0
    currentscore = 0;

    // delete all main value assign to zero for player 1=>

    score[0] = 0;
    score[0] = score[0] + currentscore;
    curscore = document.getElementById(`score--0`).textContent = score[0]

    // delete all main value assign to zero for player 2=>

    score[1] = 0;
    score[1] = score[1] + currentscore;
    curscore = document.getElementById(`score--1`).textContent = score[1]


})