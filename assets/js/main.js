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
    window.location.href = '/youVScomp.html';  
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
    $('#option').attr('src', '/assets/images/rock.jpeg');
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
function paper(){
    $('#option').attr('src', '/assets/images/paper.jpg');
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
function scissors(){
    $('#option').attr('src', '/assets/images/scissors.jpg');
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

function compChoose(){
   var ran_num =  Math.floor(Math.random() * Math.floor(3));
    var ran_choice = options[ran_num];
    console.log(ran_num, ran_choice);
    if (ran_num == 0){
        $('#optionComp').attr('src', '/assets/images/rock.jpeg' );
        compMove = 'rock';
        
    } else if (ran_num == 1){
        $('#optionComp').attr('src', '/assets/images/paper.jpg' );
        compMove = 'paper';
    } else{
        $('#optionComp').attr('src', '/assets/images/scissors.jpg' );
        compMove = 'scissors';
    }   
    
}

function winner(){
    console.log('inside the winner function' + playerScore + compScore );
    if((playerMove == 'rock' && compMove == 'scissors') || (playerMove == 'paper' && compMove == 'rock') || (playerMove == 'scissors' && compMove == 'paper')){
        playerScore = playerScore + 1;
    } else if((playerMove == 'rock' && compMove == 'rock') || (playerMove == 'paper' && compMove == 'paper') || (playerMove == 'scissors' && compMove == 'scissors')){
        //do nothing
    } else if((playerMove == 'rock' && compMove == 'paper') || (playerMove == 'paper' && compMove == 'scissors') || (playerMove == 'scissors' && compMove == 'rock')){
        compScore = compScore +1;
    }
}

function roundCount(){
    console.log('inside the roundCount function');
    if(round == 10){
        console.log('inside the roundCount function');
        //$('#roundLabel').hide();
        if (playerScore > compScore){
            var curName = window.localStorage.getItem('name');
            $('#roundLabel').text( curName + ' is the winner');
            $('button#rock').attr('disabled', 'disabled');
            $('button#paper').attr('disabled', 'disabled');
            $('button#scissors').attr('disabled', 'disabled');
            $('#replay').show();
            
        } else if(playerScore == compScore){
            $('#roundLabel').text( 'Its a Tie');
            $('button#rock').attr('disabled', 'disabled');
            $('button#paper').attr('disabled', 'disabled');
            $('button#scissors').attr('disabled', 'disabled');            
            $('#replay').show();
                  
        } else{
            $('#roundLabel').text( 'Comp is the winner');
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

$(document).ready(function(){
    $('button#replay').on('click', function(){    
    window.location.href = 'home.html';
})
})
