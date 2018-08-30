var counter= 0;
var comp1Move;
var comp2Move;
var comp1Score = 0;
var comp2Score = 0;
var round = 0;
var options = ['rock', 'paper', 'scissors'];

//This function is called on the event of onload and enables the start button
function needRight(){
    $('#startGame').show();
}

//This onclick event hides the start button and shows the round information
$(document).ready(function(){
    $('#startGame').click(function(){
        $('#startGame').hide();
        $('#roundLabel').show();
        startGameProcess();
    });
});

//This function takes care of automatically calling the random calls for comp1 and comp2 and ending after 10 rounds
function startGameProcess(){
    var gameIntervalId = setInterval(function(){
        round += 1;
        comp1Choose();
        comp2Choose();
        winner();
        $('#compScore1').text(comp1Score);
        $('#compScore2').text(comp2Score);
        $('#roundNumber').text(round);
        
        console.log('comp1 score is -> '+ comp1Score + 'comp2 score is -> '+ comp2Score );
        
        if(round === 10){
            console.log('inside the clearInterval function');                      
            clearInterval(gameIntervalId);
            roundCount();
        }
        
    }, 2000);
    
    
}

//This function is called after every round to decide the winner of that round
function winner(){
    console.log('inside the winner function' + comp1Score + comp2Score );
    if((comp1Move == 'rock' && comp2Move == 'scissors') || (comp1Move == 'paper' && comp2Move == 'rock') || (comp1Move == 'scissors' && comp2Move == 'paper')){
        comp1Score = comp1Score + 1;
        $('#roundWinner').show().html('<h4>Comp 1 is the winner of this round</h4>');
    } else if((comp1Move == 'rock' && comp2Move == 'rock') || (comp1Move == 'paper' && comp2Move == 'paper') || (comp1Move == 'scissors' && comp2Move == 'scissors')){
        $('#roundWinner').show().html('<h4>It is a tie</h4>');
    } else if((comp1Move == 'rock' && comp2Move == 'paper') || (comp1Move == 'paper' && comp2Move == 'scissors') || (comp1Move == 'scissors' && comp2Move == 'rock')){
        comp2Score = comp2Score +1;
        $('#roundWinner').show().html('<h4>Comp 2 is the winner of this round</h4>');
    }
}

//This is the random choice of comp1
function comp1Choose(){
   var ran_num =  Math.floor(Math.random() * Math.floor(3));
    var ran_choice = options[ran_num];
    console.log(ran_num, ran_choice);
    if (ran_num == 0){
        $('#option').attr('src', './assets/images/rock.jpeg' );
        comp1Move = 'rock';
        
    } else if (ran_num == 1){
        $('#option').attr('src', './assets/images/paper.jpg' );
        comp1Move = 'paper';
    } else{
        $('#option').attr('src', './assets/images/scissors.jpg' );
        comp1Move = 'scissors';
    }   
    
}

//This is the random choice to comp2
function comp2Choose(){
   var ran_num =  Math.floor(Math.random() * Math.floor(3));
    var ran_choice = options[ran_num];
    console.log(ran_num, ran_choice);
    if (ran_num == 0){
        $('#optionComp').attr('src', './assets/images/rock.jpeg' );
        comp2Move = 'rock';
        
    } else if (ran_num == 1){
        $('#optionComp').attr('src', './assets/images/paper.jpg' );
        comp2Move = 'paper';
    } else{
        $('#optionComp').attr('src', './assets/images/scissors.jpg' );
        comp2Move = 'scissors';
    }   
    
}

//This function is called after all ten rounds are done and final winner is to be decided
function roundCount(){
    console.log('inside the roundCount function');
    if(round == 10){
        console.log('inside the roundCount function');
        //$('#roundLabel').hide();
        if (comp1Score > comp2Score){
            $('#roundWinner').hide();
            $('#roundLabel').html( '<h3>Comp 1 is the final winner</h3>');           
            $('#replay').show();
            
        } else if(comp1Score == comp2Score){
            $('#roundWinner').hide();
            $('#roundLabel').html( '<h3>The Game ends in a tie</h3>');                       
            $('#replay').show();
                  
        } else{
            $('#roundWinner').hide();
            $('#roundLabel').html( '<h3>Comp 2 is the final winner</h3>');                      
            $('#replay').show();
        }       
        
         comp1Score = 0;
         comp2Score = 0;
         round = 0;
        
    }
}