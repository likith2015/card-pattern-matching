
// accessing from html section

let cardlist=document.querySelectorAll(".card");

let restart=document.querySelector("button");

let pmoves=document.querySelector("p");



let moves=0;
// creating an array for clicked cards
let clicked=[];


let cardinfo=[
    {imgsrc:"actor.jpeg",imgname:""},
    {imgsrc:"apple-fruit-healthy-food-39803.jpg",imgname:""},
    {imgsrc:"bear.jpeg",imgname:""},
    {imgsrc:"cat.jpeg",imgname:""},
    {imgsrc:"download (1).jpeg",imgname:""},
    {imgsrc:"download.jpeg",imgname:""},
    {imgsrc:"duck.jpeg",imgname:""},
    {imgsrc:"elephant.jpeg",imgname:""},
    {imgsrc:"moon.jpeg",imgname:""},
    {imgsrc:"OIP.jpeg",imgname:""},
    {imgsrc:"actor.jpeg",imgname:""},
    {imgsrc:"apple-fruit-healthy-food-39803.jpg",imgname:""},
    {imgsrc:"bear.jpeg",imgname:""},
    {imgsrc:"cat.jpeg",imgname:""},
    {imgsrc:"download (1).jpeg",imgname:""},
    {imgsrc:"download.jpeg",imgname:""},
    {imgsrc:"duck.jpeg",imgname:""},
    {imgsrc:"elephant.jpeg",imgname:""},
    {imgsrc:"moon.jpeg",imgname:""},
    {imgsrc:"OIP.jpeg",imgname:""},
    ];

// generating random cards
let genrandom=function(){
    cardinfo.sort(()=>(Math.random() - 0.5));
    return cardinfo;
}

// creation of face and back in the card
function createCard(){
    // img number
let count=0;

let n=genrandom();

for(card of cardlist){
    let back=document.createElement('div');
    let face=document.createElement('img');
    // attach card to the div
    card.appendChild(face);
    card.appendChild(back);
    
    // adding classes
    back.classList.add("back");
    face.classList.add("face");

    

    // attaching info to the cards
    face.src=n[count].imgsrc;
    count++;
    
}
}
// adding event listener to all the cards
for(card of cardlist){
    card.addEventListener("click",function(e)
    {
        // console.log(this.children[1]);
        this.children[1].classList.toggle('togglecard');
        moves++;
        pmoves.innerHTML=`Moves: ${moves}`;
        // console.log(e.srcElement);
        clicked.push(e.srcElement);
        if(moves%2==0 && moves!=0 && clicked[0]!=clicked[1] ){

           setTimeout(compare,250);
        // compare();
        }
        if(clicked[0]==clicked[1]){
            clicked=[];
        }
        

    });
};


//comparing two cards 
 compare =()=>{
    // console.log(clicked[0].currentSrc);
   if(clicked[0].currentSrc==clicked[1].currentSrc){
   
    alert("we r same");

   clicked[0].nextElementSibling.remove();
   clicked[0].remove();

    clicked[1].nextElementSibling.remove();
    clicked[1].remove();
    
    // empty array 
    clicked=[];

    // console.log("we r same");

    // declaring win if the cards are empty
    winning();
   } 
   else{
    // if not same
    alert("we r not same");
    
    // toggle
    clicked[0].nextElementSibling.classList.toggle("togglecard");
    clicked[1].nextElementSibling.classList.toggle("togglecard");

    // array empty
    clicked=[];
   }
}
function winning(){
    let temp=0;
    for(card of cardlist){
        if((card.children.length!=0)){
            // console.log("not empty");
            temp=1;
            break;
        }
    }
    if(temp==0){
        alert(`Hurray you won! congrats!
         your total moves are ${moves}`);
    }
}

// restarting the game
restart.addEventListener("click",function(){
    let n=prompt(`press 0 to restart 
    or press 1`);
if(n==0){
   restartFun();
    // call to function createCard()
    createCard();
}
});

// restart function
function restartFun(){
    moves=0;
    pmoves.innerHTML=`Moves: ${moves}`;
    
    // removing face and back
    for(card of cardlist){
        if(card.children.length!=0){

            card.children[0].remove();
            card.children[0].remove();
        }
    }
}


createCard();



