

$(document).ready(function(){

var LukeSky = {
    healthPoints: 100,
    attackPower: 5,
    counterAttackPower: 8,
    hidden: false
}

var ObiWan = {
    healthPoints: 120,
    attackPower: 7,
    counterAttackPower: 10,
    hidden: false
}

var DarthSid = {
    healthPoints: 150,
    attackPower: 15,
    counterAttackPower: 15,
    hidden: false
}

var DarthMaul = {
    healthPoints: 180,
    attackPower: 20,
    counterAttackPower: 20,
    hidden: false
}

var playerHealthPoints = 0;
var playerAttackPower = 0;
var playerCounterAttackPower = 0;
var playerName = "";

var opponentHealthPoints = 0;
var opponentAttackPower = 0;
var opponentCounterAttackPower = 0;
var opponentName = "";

var gameOver = false;
var chosenPlayer = false;
var chosenOpponent = false;
var gameStarted = false;

function resetGame() {

	var playerHealthPoints = 0;
	var playerAttackPower = 0;
	var playerCounterAttackPower = 0;
	var playerName = "";

	var opponentHealthPoints = 0;
	var opponentAttackPower = 0;
	var opponentCounterAttackPower = 0;
	var opponentName = "";

	var gameOver = false;
	var chosenPlayer = false;
	var chosenOpponent = false;
	var gameStarted = false;


	$("#btnLukeSky").fadeOut();
	$("#btnObiWan").fadeOut();
	$("#btnDarthSid").fadeOut();
	$("#btnDarthMaul").fadeOut();
	$("#btnLukeSky").fadeIn();
	$("#btnObiWan").fadeIn();
	$("#btnDarthSid").fadeIn();
	$("#btnDarthMaul").fadeIn();
	jQuery('#btnLukeSky').detach().appendTo('#notChosenButtonsArea');
	jQuery('#btnObiWan').detach().appendTo('#notChosenButtonsArea');
	jQuery('#btnDarthSid').detach().appendTo('#notChosenButtonsArea');
	jQuery('#btnDarthMaul').detach().appendTo('#notChosenButtonsArea');

    	$("#playerHealthPoints").html("0");
    	$("#opponentHealthPoints").html("0");    	
    	$("#playerAttackPower").html("0"); 
    	$("#opponentAttackPower").html("0"); 


}

$('button').on("click", function() {


    if ($(this).hasClass("character") && !gameOver){

    	if (!chosenOpponent && chosenPlayer) {

    		jQuery(this).detach().appendTo('#chosenOpponentAreaUI');

    		opponentName = $(this).attr("value");
    		console.log("opponent name chosen: " + opponentName);

    		opponentHealthPoints = eval(opponentName).healthPoints;
    		opponentAttackPower = eval(opponentName).attackPower;
    		opponentCounterAttackPower = $(opponentName).counterAttackPower;

    		chosenOpponent = true;
    		gameStarted = true;

    	}

    	if (!chosenPlayer) {

    		jQuery(this).detach().appendTo('#chosenPlayerAreaUI');

    		playerName = $(this).attr("value");
    		console.log("player name chosen: " + playerName);

    		playerHealthPoints = eval(playerName).healthPoints;
    		playerAttackPower = 8;
    		playerCounterAttackPower = $(playerName).counterAttackPower;

    		chosenPlayer = true;

    	}

    }

    if ($(this).hasClass("attack") && !gameOver && gameStarted){

    	console.log("you clicked attack button and the game has started");



    	playerHealthPoints = playerHealthPoints - opponentAttackPower;
    	opponentHealthPoints = opponentHealthPoints - playerAttackPower;
    	$("#playerHealthPoints").html(playerHealthPoints);
    	$("#opponentHealthPoints").html(opponentHealthPoints);    	
    	$("#playerAttackPower").html(playerAttackPower); 
    	$("#opponentAttackPower").html(opponentAttackPower); 

    	console.log("player health points are now: " + playerHealthPoints);
    	console.log("oppenet health points are now: " + opponentHealthPoints);

    	if (playerHealthPoints <= 0) {
    		gameOver = true;
    		resetGame();
    		alert("Game Over! Now I will reset the game and hopefully you will have the force next time..... Try harder....");

    	}

    	if (playerAttackPower > opponentAttackPower) {
    		playerAttackPower = playerAttackPower + 8;
    		$("#playerAttackPower").html(playerAttackPower); 
    		console.log("player attack power increase to: " + playerAttackPower);
    	}

    	if (opponentHealthPoints <= 0) {
    		$('#btn' + opponentName).fadeOut();
    		chosenOpponent = false;
    		gameStarted = false;
    	}

    }

    if ($(this).hasClass("reset")){
    	   gameOver = true;
    	   resetGame();
    }
   	


})

})
