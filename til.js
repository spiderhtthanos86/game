let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame=document.querySelector(".winbutton");
let msg=document.querySelector(".msg");
let p=document.querySelector(".para");


let turn0= true;
const winningpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
 
const resetgame =() =>{
    turn0= true;
    enableboxes();
    msg.classList.add("hide");


}
const enableboxes=()=>{

    for( let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
}
 
 

boxes.forEach((box) => { 
    box.addEventListener("click",()=>{
        console.log("box was cliccked");
    
    if(turn0){
        box.innerText="O";
        turn0 =false;
 }
 else{
    box.innerText="X";
    turn0=true;
 }
  box.disabled= true;
  checkwinner();
  
});  

 
});

const checkwinner= ()=> {
    for(let pattern of winningpatterns) {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
         
        if(pos1val != "" &&   pos2val!="" && pos3val !=""){
            if( pos1val === pos2val && pos2val === pos3val) {
                console.log("winner",pos1val);
                showwinner(pos1val);

            
            }
        }
        
    }
    };
    const disableboxes=()=>{
        for( let box of boxes){
            box.disabled =true;
        }

    };
    const showwinner=(winner)=>{
        p.innerText=` winner is ${winner}`;
        disableboxes();
        msg.classList.remove("hide");

    }

    resetbtn.addEventListener("click", resetgame);
    newgame.addEventListener("click", resetgame);

    


    