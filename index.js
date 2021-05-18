// here we'll write logic for event listeners

gamevar = 0

gameArray = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]

function findCordinatesById(id) {
    if (id <= 3) {
        x = 0;
        y = id - 1;
    } else if (id <= 6) {
        x = 1;
        y = (id - 4) % 3
    } else {
        x = 2;
        y = (id - 7) % 3;
    }
    return [x, y]
}

for (var i = 1; i <= 9; i++) {
    document.getElementById(i).addEventListener("click", function() {
        [x, y] = findCordinatesById(parseInt(this.id));
        if (gamevar % 2) {
            if (gameArray[x][y] == ' ') {
                document.getElementById(this.id).innerText = 'O';
                document.getElementById(this.id).style.color = "white";
                document.getElementById(this.id).style.fontSize = "25px";
                document.getElementById(this.id).style.background = "crimson";
                gameArray[x][y] = 'O';
                gamevar += 1;
            } else {
                alert("Invalid move");
            }
        } else {
            if (gameArray[x][y] == ' ') {
                document.getElementById(this.id).innerText = 'X';
                document.getElementById(this.id).style.color = "white";
                document.getElementById(this.id).style.fontSize = "25px";
                document.getElementById(this.id).style.background = "green";
                gameArray[x][y] = 'X';
                gamevar += 1;
            } else {
                alert("Invalid move");
            }
        }
        if (makematch(gameArray)) {
            functiontostopthegameahed();
        }
    });
}

function makematch(gameArray) {
    // first row
    winner = "0"
    if (gameArray[0][0] == gameArray[0][1] && gameArray[0][0] == gameArray[0][2] && gameArray[0][0] == 'X') {
        winner = "X";

    }
    if (gameArray[0][0] == gameArray[0][1] && gameArray[0][0] == gameArray[0][2] && gameArray[0][0] == 'O') {
        winner = "O";

    }
    // first column
    if (gameArray[0][0] == gameArray[1][0] && gameArray[0][0] == gameArray[2][0] && gameArray[0][0] == 'X') {
        winner = "X";

    }
    if (gameArray[0][0] == gameArray[1][0] && gameArray[0][0] == gameArray[2][0] && gameArray[0][0] == 'O') {
        winner = "O";

    }
    // second row
    if (gameArray[1][0] == gameArray[1][1] && gameArray[1][0] == gameArray[1][2] && gameArray[1][0] == 'X') {
        winner = "X";

    }
    if (gameArray[1][0] == gameArray[1][1] && gameArray[1][0] == gameArray[1][2] && gameArray[1][0] == 'O') {
        winner = "O";

    }
    // second column
    if (gameArray[0][1] == gameArray[1][1] && gameArray[0][1] == gameArray[2][1] && gameArray[0][1] == 'X') {
        winner = "X";

    }
    if (gameArray[0][1] == gameArray[1][1] && gameArray[0][1] == gameArray[2][1] && gameArray[0][1] == 'O') {
        winner = "O";

    }
    // third row
    if (gameArray[2][0] == gameArray[2][1] && gameArray[2][0] == gameArray[2][2] && gameArray[2][0] == 'X') {
        winner = "X";

    }
    if (gameArray[2][0] == gameArray[2][1] && gameArray[2][0] == gameArray[2][2] && gameArray[2][0] == 'O') {
        winner = "O";

    }
    // third column
    if (gameArray[0][2] == gameArray[1][2] && gameArray[0][2] == gameArray[2][2] && gameArray[0][2] == 'X') {
        winner = "X";

    }
    if (gameArray[0][2] == gameArray[1][2] && gameArray[0][2] == gameArray[2][2] && gameArray[0][2] == 'O') {
        winner = "O";

    }
    // Diagonal-1 Matching
    if (gameArray[0][0] == gameArray[1][1] && gameArray[2][2] == gameArray[1][1] && gameArray[2][2] == 'X') {
        winner = "X";

    }
    if (gameArray[0][0] == gameArray[1][1] && gameArray[2][2] == gameArray[1][1] && gameArray[2][2] == 'O') {
        winner = "O";

    }
    // Diagonal-2 Matching
    if (gameArray[2][0] == gameArray[1][1] && gameArray[0][2] == gameArray[1][1] && gameArray[0][2] == 'X') {
        winner = "X";

    }
    if (gameArray[2][0] == gameArray[1][1] && gameArray[0][2] == gameArray[1][1] && gameArray[0][2] == 'O') {
        winner = "O";

    }
    if (winner != '0') {
        return winnername(winner);
    }
    if (gamevar == 9)
        return winnername("tie");
    return false;
}

function functiontostopthegameahed() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById(i).style.pointerEvents = "none";
    }
}

function makemovemovable() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById(i).style.pointerEvents = "auto";
    }
}

function winnername(winner) {
    // decorate html here
    if (winner == "tie") {
        document.getElementById("winner-log").innerText = "wow!! it's a tie";
        return true;
    }
    // document.getElementById("reset").style.display = "inline-block";
    document.getElementById("winner-log").innerText = "Player " + winner + " won";
    document.getElementById("winner-log").style.fontWeight = 600;
    if (winner == 'X')
        document.getElementById("winner-log").style.color = "green";
    else
        document.getElementById("winner-log").style.color = "crimson";
    pleaseincreasemyscore(winner);
    return true;
}

document.getElementById("reset").addEventListener("click", restartmygameforfree);

function restartmygameforfree() {
    resetboard();
    resetscreen();
    resetscore();
    makemovemovable();
    pleaseclearmyspanlog();
    alert("Reset Completed...");
}

function resetboard() {
    gamevar = 0;

    gameArray = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
}

function resetscore() {
    document.getElementById("score-board").innerText = "Score: 0-0";
}

function resetscreen() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById(i).style.background = "none";
        document.getElementById(i).innerHTML = i;
        document.getElementById(i).style.color = "black";
        document.getElementById(i).style.fontSize = "16px";
    }
}

function pleaseincreasemyscore(winner) {
    // score type is ->    Score: 0-0
    score = document.getElementById("score-board").innerText;
    scores = score.split(':')[1].split('-');
    player1 = parseInt(scores[0]);
    player2 = parseInt(scores[1]);
    if (winner == 'X')
        document.getElementById("score-board").innerText = "Score: " + (player1 + 1) + "-" + player2;
    else
        document.getElementById("score-board").innerText = "Score: " + player1 + "-" + (player2 + 1);
}

function pleaseplayatleastonemoregame() {
    resetboard();
    resetscreen();
    makemovemovable();
    pleaseclearmyspanlog();
}

function pleaseclearmyspanlog() {
    document.getElementById("winner-log").textContent = "";
}

document.getElementById("continue").addEventListener("click", pleaseplayatleastonemoregame);