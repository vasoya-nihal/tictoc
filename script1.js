
// x=1;
// y=0;

let turn = "0"
 let isgameover = false;
//  let isgamex = x;

// Turn change condition.....
const changeTurn = ()=>{
    choose_1.addEventListener('click', ()=>{
        turn= "X";
        });
        choose0.addEventListener('click', ()=>{
            turn= "0";
            });
    // return turn === "X"? "0": "X"
    return turn ;
   
}
//

// winning Conditions
     const checkWin = ()=>{
        let boxtext = document.getElementsByClassName('boxtext');
         let wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],  
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
    
    
         ]
         //


         wins.forEach(e =>{
            if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
                isgameover = true

                choose_1.disabled = true;
                choose0.disabled = true;
               
            }
        })
    }
    // if(checkWin()==true){
    
    //     print("done");
    // }
    // else{
    //     print("oh no");
    // }

    let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
           
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

// // For X Bitton
// choose_1.addEventListener('click', ()=>{
//     // let boxtexts = document.querySelectorAll('.boxtext');
//     let boxtexts = document.querySelectorAll('.boxtext');
//     Array.from(boxtexts).forEach(element => {
//         element.innerText = "x"
//     });
//     turn = "X"; 
   
//     // isgamex = x
//     document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
// })

// //  For 0 Button 

// choose0.addEventListener('click', ()=>{
//     // let boxtexts = document.querySelectorAll('.boxtext');
//     let boxtexts = document.querySelectorAll('.boxtext');
//     Array.from(boxtexts).forEach(element => {
//         element.innerText = "0"
//     });
//     turn = "X"; 
   
//     // isgamex = x
//     document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
// })



reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = " "; 
    isgameover = false
    choose_1.disabled = false;
                choose0.disabled = false;
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;


})