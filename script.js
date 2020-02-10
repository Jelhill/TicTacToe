
let nextTurn = document.getElementById("nextTurn");
let boxes = document.querySelectorAll('#main div')
let X_OR_O = 0;


function winningBoxes(b1, b2, b3) {
    b1.style.background = "green";
    b2.style.background = "green";
    b3.style.background = "green";
    nextTurn.innerHTML = "Congrats, You WON"
}

function colorNoWinner() {
    b1.style.background = "red";
    b2.style.background = "red";
    b3.style.background = "red";
    b4.style.background = "red";
    b5.style.background = "red";
    b6.style.background = "red";
    b7.style.background = "red";
    b8.style.background = "red";
    b9.style.background = "red";
    nextTurn.innerHTML = "Sorry, No Winner"

}

function getWinner(){   
    let box1 = document.getElementById("box1")
    let box2 = document.getElementById('box2')
    let box3 = document.getElementById('box3')
    let box4 = document.getElementById('box4')
    let box5 = document.getElementById('box5')
    let box6 = document.getElementById('box6')
    let box7 = document.getElementById('box7')
    let box8 = document.getElementById('box8')
    let box9 = document.getElementById('box9')

        //Posibilities
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
        winningBoxes(box1, box2, box3)
    }
    else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box5.innerHTML === box6.innerHTML) {
        winningBoxes(box4, box5, box6)
    }
    else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
        winningBoxes(box7, box8, box9)
    }
    else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML){
        winningBoxes(box1, box4, box7)
    }
    else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML){
        winningBoxes(box2, box5, box8)
    }
    else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML){
        winningBoxes(box3, box6, box9)
    }
    else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML){
        winningBoxes(box1, box5, box9)
    }
    else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML){
        winningBoxes(box3, box5, box7)
    }
}

            


for (let i = 0; i < boxes.length; i++) {    
    boxes[i].onclick = function(){
        if (this.innerHTML !== "X" && this.innerHTML !== "O") {
            if (X_OR_O % 2 === 0) {
                this.innerHTML = "X"                
                nextTurn.innerHTML = "O Turn Next"  
                getWinner()              
                X_OR_O += 1                        
            }
            else{
                this.innerHTML = "O";                               
                nextTurn.innerHTML = "X Turn Next"
                getWinner() 
                X_OR_O += 1
            }
        }
    }
}


document.addEventListener('click', function(e) {
    if (e.target.id  === 'replay') {
        boxes.forEach((box) => {
            box.style.background = "none";
            box.innerHTML = "";
            nextTurn.innerHTML = "Play Next Game";
        })        
    }
})