const ele=document.querySelectorAll(".element");
let board=["","","","","","","","",""];
let user="x";

ele.forEach(e=>{
    e.addEventListener('click',(e)=>{
        const el = e.target;
        if (el.innerText == "") {
            board[e.target.id]=user;
            el.innerText = user;
            user = user === "x" ? "o" : "x";
        }
        e.target.style.fontSize = "32px";
        console.log(board);
        let winner=wincheck(e);
        if (winner){
            alert("  we have winner  "+ winner)
        }
        if((draw(e))){
            alert("this match is draw refresh it to play again")
        }
        
       
    })
}
)







const win=[
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // cols
    [0,4,8], [2,4,6]           // diagonals
  ]

function wincheck(e){
    for (let bi of win){
        const [a,b,c]=bi;
        if(board[a]&&board[a]===board[b]&&board[b]===board[c]){
            return board[a];
        }
        
    }
    return null;
    
}

function draw() {
    return !board.includes(""); // if no empty string, it's a draw
  }