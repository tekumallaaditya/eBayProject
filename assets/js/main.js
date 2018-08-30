var playerName;
var playerMove;
var compMove;
var playerScore = 0;
var compScore = 0;
var round = 0;
var options = ['rock', 'paper', 'scissors'];

//The below function is implemented on click event in the home.html and redirects to the youVScomp.html
function youVScomp(){
    playerName = $('#playerNameInput').val();    
    window.localStorage.setItem('name',playerName);    
    window.location.href = 'youVScomp.html';  
}

//Thus function is executed when the load event happens in the youVScomp.html. this is used to send all the variables to html
function getName(){      
    var curName = window.localStorage.getItem('name');
    $('#yourName').text(curName);
    $('#yourScore').text(curName);
    $('#playerScore').text(playerScore);
    $('#compScore').text(compScore);     
}

//This function is executed when rock button is clicked
function rock(){
    $('#option').attr('src', './assets/images/rock.jpeg');
    compChoose();
    playerMove = 'rock';
    winner();
    round = round +1;
    $('#playerScore').text(playerScore);
    $('#compScore').text(compScore);
    $('#roundNumber').text(round);
    $('#roundLabel').show();
    roundCount();
}

//This function is executed when Paper button is clicked
function paper(){
    $('#option').attr('src', './assets/images/paper.jpg');
    compChoose();
    playerMove = 'paper';
    winner();
    round = round +1;
    $('#playerScore').text(playerScore);
    $('#compScore').text(compScore);
    $('#roundNumber').text(round);
    $('#roundLabel').show();
    roundCount();
}

//This function is executed when Scissors button is clicked
function scissors(){
    $('#option').attr('src', './assets/images/scissors.jpg');
    compChoose();
    playerMove = 'scissors';
    winner();
    round = round +1;
    $('#playerScore').text(playerScore);
    $('#compScore').text(compScore);
    $('#roundNumber').text(round);
    $('#roundLabel').show();
    roundCount();
}

//this function randomly chooses for the comp
function compChoose(){
   var ran_num =  Math.floor(Math.random() * Math.floor(3));
    var ran_choice = options[ran_num];
    console.log(ran_num, ran_choice);
    if (ran_num == 0){
        $('#optionComp').attr('src', './assets/images/rock.jpeg' );
        compMove = 'rock';
        
    } else if (ran_num == 1){
        $('#optionComp').attr('src', './assets/images/paper.jpg' );
        compMove = 'paper';
    } else{
        $('#optionComp').attr('src', './assets/images/scissors.jpg' );
        compMove = 'scissors';
    }   
    
}

//Every round this function is called and the winner is decided and counters increased
function winner(){
    console.log('inside the winner function' + playerScore + compScore );
    if((playerMove == 'rock' && compMove == 'scissors') || (playerMove == 'paper' && compMove == 'rock') || (playerMove == 'scissors' && compMove == 'paper')){
        playerScore = playerScore + 1;
        $('#roundWinner').show().html('<h4>You are the winner of this round</h4>');
    } else if((playerMove == 'rock' && compMove == 'rock') || (playerMove == 'paper' && compMove == 'paper') || (playerMove == 'scissors' && compMove == 'scissors')){
        $('#roundWinner').show().html('<h4>it is a tie</h4>');
    } else if((playerMove == 'rock' && compMove == 'paper') || (playerMove == 'paper' && compMove == 'scissors') || (playerMove == 'scissors' && compMove == 'rock')){
        compScore = compScore +1;
        $('#roundWinner').show().html('<h4>Comp are the winner of this round</h4>');
    }
}

//This function decides the final winner after all the ten rounds
function roundCount(){
    console.log('inside the roundCount function');
    if(round == 10){
        console.log('inside the roundCount function');
        //$('#roundLabel').hide();
        if (playerScore > compScore){
            $('#roundWinner').hide();
            var curName = window.localStorage.getItem('name');
            $('#heading').hide();
            $('#scoreboard').hide();
            $('#winnerIMG').show().attr('src', './assets/images/winnerPlayer.gif' );
            $('#roundLabel').html('<h3>' +curName + ' is the winner<h3>');
            $('button#rock').attr('disabled', 'disabled');
            $('button#paper').attr('disabled', 'disabled');
            $('button#scissors').attr('disabled', 'disabled');
            $('#replay').show();
            
        } else if(playerScore == compScore){
            $('#roundWinner').hide();
            $('#roundLabel').html( '<h3>Its a Tie</h3>');
            $('button#rock').attr('disabled', 'disabled');
            $('button#paper').attr('disabled', 'disabled');
            $('button#scissors').attr('disabled', 'disabled');            
            $('#replay').show();
                  
        } else{
            $('#roundWinner').hide();
            $('#heading').hide();
            $('#scoreboard').hide();
            $('#winnerIMG').show().attr('src', './assets/images/loserPlayer.gif' );
            $('#roundLabel').html( '<h3>YOU LOST!!!</h3>');
            $('button#rock').attr('disabled', 'disabled');
            $('button#paper').attr('disabled', 'disabled');
            $('button#scissors').attr('disabled', 'disabled');            
            $('#replay').show();
        }       
        
         playerScore = 0;
         compScore = 0;
         round = 0;
        
    }
}


//This onclick event is for redirecting to the home.html
$(document).ready(function(){
    $('button#replay').on('click', function(){    
    window.location.href = 'home.html';
});
});

//This onclick event is for redirecting to the compVScomp.html
$(document).ready(function(){
    $('#compVsComp').click(function(){
    window.location.href = 'compVScomp.html';
});
});

