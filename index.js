let playerWinner = document.getElementById('playerWinner');
let restart = document.getElementById('restart');
let boxes = document.querySelectorAll('.box');
let boxFathers = document.querySelectorAll('.box-father');

// let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')
let turn = "X";
let isGameOver = false;

boxes.forEach((element)=>{
    element.innerHTML = ""
    element.addEventListener("click", ()=>{
        if(!isGameOver && element.innerHTML == ""){
            
            element.innerHTML = turn;
            cheakWin();
            if(turn == "X"){
                turn = "O";
            }
            else{
                turn = "X";
            }
            element.classList.add('no-drop') ;
            element.classList.add('animation') ;
            cheakDraw();
        }
    })
})

function cheakWin(){
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i<winConditions.length; i++){
        let value0 = boxes[winConditions[i][0]].innerHTML;
        let value1 = boxes[winConditions[i][1]].innerHTML;
        let value2 = boxes[winConditions[i][2]].innerHTML;

        if(value0 != "" && value0 == value1 && value0 == value2){
            isGameOver = true;
            playerWinner.innerHTML = `${turn} has won!`;

            for(j = 0; j<3; j++){
                boxes[winConditions[i][j]].style.background = "linear-gradient(to bottom, #0c3d69 16%, #116c97 95%)";
            }
        }
    }
}
function cheakDraw(){
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(element =>{
            if(element.innerHTML == "") isDraw = false;
        })

        if(isDraw){
            isGameOver = true;
            playerWinner.innerHTML = "Game Over";
            boxFathers.forEach(element =>{
                element.style.background = "#9a000096";
            })
        }
    }
}
restart.addEventListener('click', ()=>{
    isGameOver = false;
    turn = "X";
    playerWinner.innerHTML = "Tic Tac Toe";

    boxes.forEach((element)=>{
        element.innerHTML = "";
        element.style.background = "transparent";
        element.classList.remove('no-drop');
        element.classList.remove('animation');
    })
    boxFathers.forEach((element)=>{
        element.style.background = "transparent";
    })
})