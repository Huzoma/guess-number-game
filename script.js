// Getting our checkBtn
let checkBtn = document.querySelector('.check');

// Generate secret number
let secretNumber = Math.floor(Math.random() * 20) + 1;

// defining the scoore variable
let score = 20

// Add event listener to the .check btn to listen for the "click" event
checkBtn.addEventListener('click', function(){
    //get user's iunput and use the Number() method to convert value to string
    let userGuess = Number(document.querySelector('.guess').value);
    let message = document.querySelector('.message');

    //Compare user input with secretNumber
    if(userGuess){
        if(userGuess === secretNumber){
            // The secret gets revealed
            document.querySelector('.number').textContent = secretNumber;

            //Change background to green
            document.querySelector('body').classList.toggle('victory')

            //Display Correct in the message element
            message.textContent = 'Correct'

        }else{

            // if(userGuess > secretNumber){
            //     message.textContent = 'Too High'
            // }else{
            //     message.textContent = 'Too Low'
            // }

            //Tenary operator to check display message if userGuess is high or low
            userGuess > secretNumber ? message.textContent = 'Too High' : message.textContent = 'Too Low';

            //Score should be reduced
            score--
            //New score should be displayed
            document.querySelector('.score').textContent = score;
        }
    }else{
        alert('Input a number between 1 and 20 in the box')
    }


})