console.log("Welcome to Tic Tac Toe")
let audioturn= new Audio("turn.mp3")
let gameover= new Audio("happy.mp3")
let turn = "X"
let isgameover = false

//function to change turn 
changeTurn = () =>{
     return turn ==="X"? "0": "X"
}

//function to check win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext'); 
     let win= [
        [0,1,2], 
        [3,4,5], 
        [6,7,8], 
        [1,4,7], 
        [2,5,8],
        [0,4,8], 
        [2,4,6], 
     ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !==""){
            document.querySelector('.info').innerText= boxtext[e[0]].innerText + " Won"
            isgameover= true;
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width= "150px"; 
        }
    })
}

//main logic
let boxes = document.getElementsByClassName("box"); 
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext'); 
    element.addEventListener('click' , ()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn ; 
            turn = changeTurn(); 
            audioturn.play(); 
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
            }
        }
    })
})

reset.addEventListener('click' ,()=>{
    let bostexts= document.querySelectorAll('.boxtext'); 
    Array.from(bostexts).forEach(element =>{
        element.innerText=""
    })
    turn = "X"
    isgameover=false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width= "0px";         
})