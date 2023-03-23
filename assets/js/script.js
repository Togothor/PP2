/** -------------------------------------------------------------------------¦ 
 * Greetings , welcome to tic tac toe, student edition.**                    ¦
 *                                                                           ¦
 * The idea with these lines of code is learning by doing.                   ¦
 *                                                                           ¦
 * This code is written by a student for students and people who             ¦
 * is learning or wants to learn how to code.                                ¦
 * Therefore the code is not written by any industry standard.               ¦
 *                                                                           ¦
 * Meaning the way that the code is structured is not standardised.          ¦
 *                                                                           ¦
 * The narrative we are looking for here is to understand                    ¦
 * how the functions and methods that make the fabric                        ¦
 * of a simple tic tac toe game actually works from the inside.              ¦
 *                                                                           ¦
 *                                                                           ¦
 * As soon as i started to build this game it became more and more clear     ¦
 * how the functions works, and what they are "calling" for.                 ¦
 *                                                                           ¦
 *  My wish is that it does the same for you!                                ¦ 
 *___________________________________________________________________________¦
 * Lets begin.                                                               ¦
 *                                                                           ¦
 *                                                                           ¦
 * Above every function there's a info box                                   ¦  
 * where one can read about how the functions works.                         ¦
 *                                                                           ¦
 * Inside some functions there are comments that explains                    ¦
 *  code that is not very obvious by itself.                                 ¦
 *                                                                           ¦
 *                                                                           ¦
 * ** Top down order ** note: Javascript runs code the same way.             ¦
 *                                                                           ¦
 * It starts out with the creation of the game-area                          ¦              
 * function createBoard.                                                     ¦
 *                                                                           ¦
 * Below comes the eventlistener which itself is not a function              ¦
 * but rather a method, which acts as a "middleman"                          ¦
 * that can connect events with each other.                                  ¦
 * This one listens for clicked boxes and calls/assign                       ¦
 * the function addMark for that specific box.                               ¦
 *                                                                           ¦
 * Which is the next function in line.                                       ¦
 *                                                                           ¦
 * addMark is the function that put the actual                               ¦
 * circles and crosses in place.                                             ¦
 *                                                                           ¦
 * Next is the function checkScore.                                          ¦
 * This function compares the index[cells] inside the arrays                 ¦
 * looking for a winning combination.                                        ¦
 *                                                                           ¦
 *                                                                           ¦
 * checkScore contains 3 more functions,                                     ¦
 * but these functions looks abit different from the standard (function)     ¦
 * and you will recognize them by this look (=>)                             ¦
 * the name before is the name of the function                               ¦
 * is looking a bit different, that is the                                   ¦
 *                                                                           ¦
 *                                                                           ¦
 * Also gives the signal for a winning combination or a draw.                ¦
 *                                                                           ¦
 *                                                                           ¦
 *                                                                           ¦
 *                                                                           ¦
 *                                                                           ¦
 *                                                   *i will look after you* ¦
 *                                                          (❁´◡`❁)        ¦
 *                                                        *Happy mascot*     ¦
 ----------------------------------------------------------------------------*/

 /**Inside here the whole game *lives*-----------------------------------*/
 const container = document.getElementById("grid-container");       
 const playerTurnDisplay = document.getElementById("playerTurnDisplay");
 /**__Starting player__------------------------------------------------ */
 
 let player = "circle";
  
 
 //First message that shows up in the actual game.
 playerTurnDisplay.textContent = "Circle goes first";
/**---------------------------------------------------------------------*/

/** Creating a grid--------------------------¦
* The grid is made out of 3 columns          ¦
* Each column gets a class ="column"         ¦
* where each contains 3 divs                 ¦
* Each div gets a class ="box"               ¦
* All of whitch sits inside the              ¦
* columnContainer with id= "columnContainer" ¦
*                                            ¦
* Each box get uniqe id. *nice to have*      ¦
* // like this //                            ¦
* "0-0", "1-0", "2-0"                        ¦
* "0-1", "1-1", "2,1"                        ¦
* "0-2", "1-2", "2-2"                        ¦
*                                            ¦
*                                            ¦
*--------------------------------------------*/
   function createBoard() { 
       const columnContainer = document.createElement("div");
           columnContainer.id= "columnContainer";
              container.appendChild(columnContainer);

       // Creates *3 columns horisontally.
       for (let i = 0; i < 3; i++) {
         const column = document.createElement("div");                      
           column.classList.add("column"); 

       // Creates *3 divs inside the columns vertically.
         for (let j = 0; j < 3; j++) {
         const box = document.createElement("div");                       
           box.classList.add("box");  
            //Nice to have uniqe id's for future updates.                                      
             box.setAttribute("id", `${i}-${j}`);                             
               column.appendChild(box);                                         
       }
 // Appends the child(column) to its parent (columnContainer)
 columnContainer.appendChild(column);                                     
 
 


/**Event listener-------------------------------------------¦
* A eventListener itself is not a function                 ¦
* but rather a method, which acts as a "middleman"         ¦
* that can connect events with each other.                 ¦
* This one listens for clicked boxes and calls/assign      ¦
* the function addMark for that specific box.              ¦
 ----------------------------------------------------------*/
       const boxes = document.querySelectorAll(".box");
         boxes.forEach(box => {
           // The eventlistener triggers a event(function) that is called addMark.
           box.addEventListener('click', addMark);                             
                                                       

           /**  Uncomment eventlistener below* to log the 'event' */
           /**box.addEventListener("click", e => {
               console.log(`Box ${box.id} has been clicked`);                   
             });  */
         });
   
}} /** <--Closing tag for function createBoard ---------------------*/

/* CREATE BOARD */
// Calls createBoard function.
createBoard();                  


/** function addMark----------------------------------------¦
* When this function is triggered by eventListener 'click'  ¦
* it creates a new div inside the clicked (div id="box")    ¦
* depending on whos turn it is, it will mark (= "class")    ¦
* the box with either a cross or circle                     ¦
* that shows up on the screen as a players marker.          ¦                                
*                                                           ¦
* It will also add textContent to the playerTurnDisplay'div'¦ 
* and tell players whos turn it is.                         ¦
____________________________________________________________*/
 function addMark(e) {
   // Creates "prepares" a div that will contain the "circle" or "cross".
   const markDisplay = document.createElement('div');                  
     // Add the "starting player": string ='circle/cross' to above.  
     markDisplay.classList.add(player);                                
       //  Inserts the above into the targeted (clicked) 'box'.
       e.target.append(markDisplay);                                      
         // If player ="circle" is true, then add player ="cross", if not , add "circle".
         //Assigning cross or circle to the player: "string".
         player = player === "circle" ? "cross" : "circle";                   
           // Updates id="playerturnDisplay" in the gamearea html.
           playerTurnDisplay.textContent = "it is now " + player + "'s turn."; 
             // Removes the ability to click the same box again.
             e.target.removeEventListener("click", addMark);                     
               // Calls checksScore function below.
               checkScore();                                                       
  }



 /** function checkScore & winningCombo----------------¦
 * function contains total of 8 arrays,                ¦
 * each filled with one possible winning combination.  ¦
 *-----------------------------------------------------*/
 function checkScore() {
      
   const winningCombo = [                                       
   // Arrays with uniqe indexes [cells], is a box position.
   //vertical
     [0,1,2],
     [3,4,5],
     [6,7,8],

     //horisontal                
     [0,3,6],
     [1,4,7],
     [2,5,8],

     //diagonal
     [0,4,8],
     [2,4,6]

   ];
     /**---------------------------------------------------------------------¦
      * Uncomment console inkl closingtag below to check if the arrays work  ¦
      * if it logs box [4] (id="1-1") even if another box is clicked.        ¦
      * you know there's "connection" this works only if                     ¦
      * winningCombo functions are not yet made or outcommented              ¦
      * ---------------------------------------------------------------------*/
       
        
            //  console.log(allBoxes[4]) }                 
               
 

    /** winningCombo-------------------------------------------------------------¦
    * This function listens inside the firstChild of the ('box's> allBoxes)      ¦
    * first child is either a div with class= "circle" or "cross"                ¦
    * if the function finds that a whole array if filled it turns true.          ¦
    *                                                                            ¦
    *             *** Now we have a winner. ***                                  ¦
    *                                                                            ¦
    * If any player wins it calls playerTurnDisplay and updates the textcontent  ¦
    * with the winners message!                                                  ¦
    *                                                                            ¦
    * ///////////////////////////////////////////////////////////////////////////¦
    * After the winner is celebrated.                                            ¦
    *                                                                            ¦
    * The whole game-area is cleared with the clearing of the "grid-container"   ¦
    * "Equilibrium" happens when container.innerHTML = ""; is called upon.       ¦
    * Which empties all strings.                                                 ¦
    * A new game can begin !  >> createBoard()                                   ¦
    *____________________________________________________________________________*/                                                                         
     // Assigns all div's with the class= "box" to an variable called allBoxes.
       const allBoxes = document.getElementsByClassName("box");
    winningCombo.forEach(array => {
         //Loops this function until every cell in one of the arrays conains a circle.
         const circleWins = array.every(cell =>     
            // First child of the cells that has a class of 'circle'                      
            allBoxes[cell].firstChild?.classList.contains('circle'));         

             if (circleWins) {
               playerTurnDisplay.textContent= "Circle Wins!!!";//   ╰(*°▽°*)╯  Congrats!
                 // clear the container's HTML as in > everything within the "grid-container".   
                   container.innerHTML = "";                                          
                     createBoard();
                        return ;       
              }
     });
 
    winningCombo.forEach(array => {
         const crossWins = array.every(cell =>
             allBoxes[cell].firstChild?.classList.contains('cross'));
                 
             if (crossWins) {
                 playerTurnDisplay.textContent= "Cross Wins!!!";//     ☜(ﾟヮﾟ☜)  Congrats!
                     container.innerHTML = ""; 
                       createBoard();
                         return ;    
              }
      });
         
         const boxesArray = Array.from(allBoxes);                         
             // if every box in boxesArray has been clicked, run code below.
               if (boxesArray.every(box => box.firstChild !== null)) {                        
                 playerTurnDisplay.textContent = "OMG! It's a draw!";//¯\_(ツ)_/¯ well well well..      
                   container.innerHTML = "";     
                     createBoard();
                       return ;
                }    

 } //**Closing tag for check score function__*/

 /** Thats it for now, i hope you enjoyed the experience */