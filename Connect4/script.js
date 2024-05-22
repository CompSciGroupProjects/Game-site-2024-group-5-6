let board =[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
p1Turn = true;
p2Turn = false;

let rows = 6;
let columns = 7;
turnCounter = 0;

let gameOver = false;

let p1= "Player 1 turn";
let p2= "Player 2 turn";
let counter = 5;
let rowfinder = 0;
function p1TurnChange(){
    document.getElementById('turn').innerHTML = p1;
}
function p2TurnChange(){
    document.getElementById('turn').innerHTML = p2;
}

function clickedCol1(){
    counter=0;
    for(let i = 0;i<6;i++){
        if(board[i][0] === 0){
            counter = i;

        }
    }
    if(board[counter][0] === 0&& gameOver === false) {
        if (p1Turn === true) {
            board[counter][0] = 1;
            rowfinder=counter+1;
            document.getElementById("r"+ rowfinder +"c1").style.backgroundColor = "#FF0000";

            p1Turn = false;
            p2Turn = true;
            p2TurnChange();

        } else {
            board[counter][0] = 2;
            rowfinder = counter+1
            document.getElementById("r" + rowfinder + "c1").style.backgroundColor = "#FFFF00";

            p1TurnChange();
            p1Turn = true;
            p2Turn = false;

        }
    }
    turnCounter++;
    checkBoard();
}
function clickedCol2(){
counter=0;
    for(let i = 0;i<6;i++){
        if(board[i][1] === 0){
            counter = i;

        }
    }
    if(board[counter][1] === 0&& gameOver === false) {
        if (p1Turn === true) {
            board[counter][1] = 1;
            rowfinder=counter+1;
            document.getElementById("r"+ rowfinder +"c2").style.backgroundColor = "#FF0000";

            p1Turn = false;
            p2Turn = true;
            p2TurnChange();
        } else {
            board[counter][1] = 2;
            rowfinder = counter+1
            document.getElementById("r" + rowfinder + "c2").style.backgroundColor = "#FFFF00";

            p1TurnChange();
            p1Turn = true;
            p2Turn = false;
        }
    }
    turnCounter++;
    checkBoard();
}
function clickedCol3() {
counter =0;
    for (let i = 0; i<6; i++) {
        if (board[i][2] === 0) {
            counter = i;

        }
    }
    if (board[counter][2] === 0 && gameOver === false) {
        if (p1Turn === true) {
            board[counter][2] = 1;
            rowfinder = counter+1;
            document.getElementById("r" + rowfinder + "c3").style.backgroundColor = "#FF0000";

            p1Turn = false;
            p2Turn = true;
            p2TurnChange();
        } else {
            board[counter][2] = 2;
            rowfinder = counter + 1
            document.getElementById("r" + rowfinder + "c3").style.backgroundColor = "#FFFF00";

            p1TurnChange();
            p1Turn = true;
            p2Turn = false;
        }
    }
    turnCounter++;
    checkBoard();
}
    function clickedCol4(){
counter =0;
        for(let i = 0;i<6;i++){
            if(board[i][3] === 0){
                counter = i;

            }
        }
        if(board[counter][3] === 0 && gameOver === false) {
            if (p1Turn === true) {
                board[counter][3] = 1;
                rowfinder=counter+1;
                document.getElementById("r"+ rowfinder +"c4").style.backgroundColor = "#FF0000";

                p1Turn = false;
                p2Turn = true;
                p2TurnChange();
            } else {
                board[counter][3] = 2;
                rowfinder = counter+1
                document.getElementById("r" + rowfinder + "c4").style.backgroundColor = "#FFFF00";

                p1TurnChange();
                p1Turn = true;
                p2Turn = false;
            }
        }
        turnCounter++;
        checkBoard();
    }

function clickedCol5(){
counter = 0;
    for(let i = 0;i<6;i++){
        if(board[i][4] === 0){
            counter = i;

        }
    }
    if(board[counter][4] === 0 && gameOver === false) {
        if (p1Turn === true) {
            board[counter][4] = 1;
            rowfinder=counter+1;
            document.getElementById("r"+ rowfinder +"c5").style.backgroundColor = "#FF0000";

            p1Turn = false;
            p2Turn = true;
            p2TurnChange();
        } else {
            board[counter][4] = 2;
            rowfinder = counter+1
            document.getElementById("r" + rowfinder + "c5").style.backgroundColor = "#FFFF00";

            p1TurnChange();
            p1Turn = true;
            p2Turn = false;
        }
    }
    turnCounter++;
    checkBoard();
}
function clickedCol6(){
counter = 0;
    for(let i = 0;i<6;i++){
        if(board[i][5] === 0){
            counter = i;

        }
    }
    if(board[counter][5] === 0 && gameOver === false) {
        if (p1Turn === true) {
            board[counter][5] = 1;
            rowfinder=counter+1;
            document.getElementById("r"+ rowfinder +"c6").style.backgroundColor = "#FF0000";

            p1Turn = false;
            p2Turn = true;
            p2TurnChange();
        } else {
            board[counter][5] = 2;
            rowfinder = counter+1
            document.getElementById("r" + rowfinder + "c6").style.backgroundColor = "#FFFF00";

            p1TurnChange();
            p1Turn = true;
            p2Turn = false;
        }
    }
    turnCounter++;
    checkBoard();
}
function clickedCol7(){
    counter=0;
    for(let i = 0;i<6;i++){
        if(board[i][6] === 0){
            counter = i;

        }
    }
    if(board[counter][6] === 0&& gameOver === false) {
        if (p1Turn === true) {
            board[counter][6] = 1;
            rowfinder=counter+1;
            document.getElementById("r"+ rowfinder +"c7").style.backgroundColor = "#FF0000";

            p1Turn = false;
            p2Turn = true;
            p2TurnChange();

        } else {
            board[counter][6] = 2;
            rowfinder = counter+1
            document.getElementById("r" + rowfinder + "c7").style.backgroundColor = "#FFFF00";
            p1TurnChange()

            p1Turn = true;
            p2Turn = false;
        }
    }
    turnCounter++;
    checkBoard();
}

function restartPage(){
    location.reload();
}
const winningArrays = [
    // Horizontal
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
    [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
    [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
    [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
    [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
    [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
    // Vertical
    [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], [1, 8, 15, 22],
    [8, 15, 22, 29], [15, 22, 29, 36], [2, 9, 16, 23], [9, 16, 23, 30],
    [16, 23, 30, 37], [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38],
    [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39], [5, 12, 19, 26],
    [12, 19, 26, 33], [19, 26, 33, 40], [6, 13, 20, 27], [13, 20, 27, 34],
    [20, 27, 34, 41],
    // Diagonal
    [3, 9, 15, 21], [4, 10, 16, 22], [5, 11, 17, 23], [6, 12, 18, 24],
    [10, 16, 22, 28], [11, 17, 23, 29], [12, 18, 24, 30], [13, 19, 25, 31],
    [17, 23, 29, 35], [18, 24, 30, 36], [19, 25, 31, 37], [20, 26, 32, 38],
    [0, 8, 16, 24], [1, 9, 17, 25], [2, 10, 18, 26], [3, 11, 19, 27],
    [7, 15, 23, 31], [8, 16, 24, 32], [9, 17, 25, 33], [10, 18, 26, 34],
    [14, 22, 30, 38], [15, 23, 31, 39], [16, 24, 32, 40], [17, 25, 33, 41]
];
function checkBoard() {
    for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 4; c++) {
            if (board[r][c] !== 0) {
                if (board[r][c] === board[r][c + 1] && board[r][c + 1] === board[r][c + 2] && board[r][c + 2] === board[r][c + 3]) {
                    if(board[r][c] ===1) {
                        document.getElementById("winner").innerHTML = "Player 1 Wins";
                        gameOver = true;
                        return;
                    }
                    else{
                        document.getElementById("winner").innerHTML = "Player 2 Wins";
                        gameOver = true;
                        return;
                    }
                }
            }
        }
    }

    for (let c = 0; c < 7; c++) {
        for (let r = 0; r < 3; r++) {
            if (board[r][c] !== 0) {
                if (board[r][c] === board[r + 1][c] && board[r + 1][c] === board[r + 2][c] && board[r + 2][c] === board[r + 3][c]) {
                    if(board[r][c] ===1) {
                        document.getElementById("winner").innerHTML = "Player 1 Wins";
                        gameOver = true;
                        return;
                    }
                    else{
                        document.getElementById("winner").innerHTML = "Player 2 Wins";
                        gameOver = true;
                        return;
                    }
                }
            }
        }
    }

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 4; c++) {
            if (board[r][c] !== 0) {
                if (board[r][c] === board[r + 1][c + 1] && board[r + 1][c + 1] === board[r + 2][c + 2] && board[r + 2][c + 2] === board[r + 3][c + 3]) {
                    if(board[r][c] ===1) {
                        document.getElementById("winner").innerHTML = "Player 1 Wins";
                        gameOver = true;
                        return;
                    }
                    else{
                        document.getElementById("winner").innerHTML = "Player 2 Wins";
                        gameOver = true;
                        return;
                    }
                }
            }
        }
    }

    for (let r = 3; r < 6; r++) {
        for (let c = 0; c < 4; c++) {
            if (board[r][c] !== 0) {
                if (board[r][c] === board[r - 1][c + 1] && board[r - 1][c + 1] === board[r - 2][c + 2] && board[r - 2][c + 2] === board[r - 3][c + 3]) {
                    if(board[r][c] ===1) {
                        document.getElementById("winner").innerHTML = "Player 1 Wins";
                        gameOver = true;
                        return;
                    }
                    else{
                        document.getElementById("winner").innerHTML = "Player 2 Wins";
                        gameOver = true;
                        return;
                    }
                    }
            }
        }
}
    if(turnCounter===42){
        document.getElementById("winner").innerHTML = "Draw";
        gameOver = true;
    }
    }






function disableBoard(){
    gameOver =true;
}