let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newBtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = false;

let winPossiblity = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [3, 4, 5], [2, 5, 8], [6, 7, 8], [2, 4, 6]];


boxes.forEach(box => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText= "O";
            box.style.color = "#556b2f";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

//reset game function
const resetGame = ()=>{
    turnO=false;
    msgContainer.style.display = "none";
    for (let patter of winPossiblity){
        boxes[patter[0]].innerHTML="";
        boxes[patter[0]].disabled=false;
        boxes[patter[1]].innerHTML="";
        boxes[patter[1]].disabled=false;
        boxes[patter[2]].innerHTML="";
        boxes[patter[2]].disabled=false;
    }
}

resetBtn.addEventListener("click",()=>{
    console.log("reset clicked");
    resetGame();
})

newBtn.addEventListener("click",()=>{
    console.log("newGame clicked");
    resetGame();
})


const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner)=>{
    msg.innerHTML=`Congracts , Winner is ${winner}`;
    msgContainer.style.display = "block";
    disableBoxes();
}

// function to check winner
const checkWinner = ()=>{
    for(let patter of winPossiblity){
        // console.log(patter);
        let a = boxes[patter[0]].innerText;
        let b = boxes[patter[1]].innerText;
        let c = boxes[patter[2]].innerText;
        if( a === b && a===c && a!=="" && b!=="" && c!==""){
            console.log ("winner found");
            showWinner(a);
        }
    }
}
