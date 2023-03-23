/**Inside here the whole game *lives*-----------------------------------*/
const container = document.getElementById("grid-container");       


  function createBoard() { 
      // Creates container.
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
            box.setAttribute("id", `${i}-${j}`);                             
              column.appendChild(box);                                         
      }
// Appends the child(column) to its parent (columnContainer)
columnContainer.appendChild(column);                                     


}} 


createBoard();  
    