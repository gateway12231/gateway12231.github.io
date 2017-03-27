var input;
var computerName;
var computerChoice, playerChoice;
var plyrChoice, compChoice, compName;
var playerName1, playerName2;
var playerChoice1, playerChoice2;
var result;

//=========================================================//
//					Startup Functions
//=========================================================//

var playerNum = function () {
	document.getElementById('log').innerHTML = "<h1> Choose Single or Multiplayer </h1> <br > <ul id='nav'> <li> <a onClick='singlePlay()'> Singleplayer </a> </li> <br > <li> <a onClick='multiPlay()'> Multiplayer </a> </li> </ul> ";
};

var rules = function () {
	document.getElementById('log').innerHTML = "<h1 style='font-size: 30px; font-family: calibri;'>INSTRUCTIONS</h1><br > <p style='font-family: calibri;'> Welcome to Rock, Paper, Scissors! The insructions are as follows:</p> <ol style='font-family:calibri;'><li>Follow instructions that come on screen.</li> </ol> <ul id='nav'> <li> <a onClick='playerNum()'> Play </a> </li> </ul>";
};

//=========================================================//
//                Multiple use functions
//=========================================================//
var sectionPicker = function () {
    var section = [inputPlayerNum, singlePlayA1, singlePlayA2];
    switch (sectionNum) {
        case 2:
            section[sectionNum](computerName);
            break;
        default:
            section[sectionNum]();
            document.getElementById('input').value = '';
            break;
    }
};

var resultChecker = function (choice1, choice2) {
    if (choice1 === "rock") {
        if (choice2 === "rock") {
            result = "Tie";
            printResult();
        } else if (choice2 === "paper") {
            result = "Paper Wins";
            printResult();
        } else {
            result = "Rock Wins";
            printResult();
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            result = "Paper Wins";
            printResult();
        } else if (choice2 === "paper") {
            result = "Tie";
            printResult();
        } else {
            result = "Scissors Wins";
            printResult();
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            result = "Rock Wins";
            printResult();
        } else if (choice2 === "paper") {
            result = "Scissors Wins";
            printResult();
        } else {
            result = "Tie";
            printResult();
        }
    } else {
        document.getElementById('log').innerHTML = "It didn't work" ;
    }
};


//==================================================//
//              Singleplayer Game
//==================================================//



var singlePlay = function () {
	document.getElementById('log').innerHTML = "<h1> What is your opponent's name </h1> <br ><br ><br > <input type='text' id='in1'> <ul id='nav'> <li> <a onClick='in1Value()'> Enter </a> </li> </ul>";
};
	
	var in1Value = function () {
		computerName = document.getElementById('in1').value;
		singlePlayQ();
	};

var singlePlayQ = function () {
	document.getElementById('log').innerHTML = "<h1> Choose your object! </h1> <br > <br > <span class='gameImage'><img src='rock.png' onClick='rock()'></span><span class='gameImageMid'><img src='paper.png' onClick='paper()'></span><span class='gameImage'><img src='scissors.png' onClick='scissors()'></span>";
};

	var rock = function () {
		playerChoice = "rock";
		computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
		if (computerChoice === 1) {         
			computerChoice = "rock";
		} else if (computerChoice === 2) {  
			computerChoice = "paper";
		} else {                        
			computerChoice = "scissors";
		}
		singleCompare();
	};

	var paper = function () {
		playerChoice = "paper";
		computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
		if (computerChoice === 1) {         
			computerChoice = "rock";
		} else if (computerChoice === 2) {  
			computerChoice = "paper";
		} else {                        
			computerChoice = "scissors";
		}
		singleCompare();
	};

	var scissors = function () {
		playerChoice = "scissors";
		computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
		if (computerChoice === 1) {         
			computerChoice = "rock";
		} else if (computerChoice === 2) {  
			computerChoice = "paper";
		} else {                        
			computerChoice = "scissors";
		}
		singleCompare();
	};

var singleCompare = function () {
    document.getElementById('log').innerHTML = "<table border='5'> <tr> <th>Your Choice</th><th>" + computerName + "'s Choice</th> </tr><tr> <td>" + playerChoice + "</td><td>" + computerChoice + "</td> </tr> </table> <input type='button' value='Fight!' onClick='resultChecker(playerChoice, computerChoice)'>";
};

var printResult = function () {
    document.getElementById('log').innerHTML = "<table border='5'> <tr> <th>Your Choice</th><th>" + computerName + "'s Choice</th> </tr><tr> <td>" + playerChoice + "</td><td>" + computerChoice + "</td> </tr> </table> <p>" + result + "</p><input type='button' value='Play Again' onClick='singlePlayQ()'>";
};

//========================================================//
//                  Multiplayer Game
//========================================================//

var multiPlay = function () {
	document.getElementById('log').innerHTML = "<h1> Sorry Multiplayer is not available at the moment </h1> <br > <br > <ul id='nav'> <li> <a onClick='playerNum()'> Back </a> </li> </ul>"
};


/*var multiPlayQ1 = function () {
    sectionNum = 3;
    document.getElementById('log').innerHTML = "What is your name Player 1?";
};

var multiPlayA1 = function () {
    playerName1 = document.getElementById('input').value;
    multiPlayQ2();
};

var multiPlayQ2 = function () {
    sectionNum = 4;
    document.getElementById('log').innerHTML = "What your name Player 2?";
};

var multiPlayA2 = function () {
    playerName2 = document.getElementById('input').value;
    multiPlayQ3;
};

var multiPlayQ3 = function () {
    sectionNum = 5;
    document.getElementById('log').innerHTML = playerName1 + ", what do";
};*/



    /*var playerName2 = prompt("What is your name Player 2?");
    var playerChoice1 = prompt("Choose rock, paper, or scissors?");
    var playerChoice2 = Math.floor(Math.random() * (3 - 1 + 1) + 1); //Opponent's choice*/