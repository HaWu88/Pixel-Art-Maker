// Hamilton Wu

// Select size input
let size = document.querySelector("#sizePicker");

heightInput = size.querySelector('#inputHeight');
widthInput = size.querySelector('#inputWidth');
// When size is submitted by the user, call makeGrid()
size.addEventListener("submit", function(event){
    // Prevent from loading another page upon clicking
    event.preventDefault();
    // Get height and width once user click submit
    height = heightInput.value;
    width = widthInput.value;
    // Make the grid
    makeGrid();
});


function makeGrid() {
    // Get ID pixelCanvas as table
    let tbl = document.querySelector("#pixelCanvas");
    // Clear table each time makeGrid is called upon
    tbl.textContent = '';
    // Create the Table using Nested Loop
    for(var i = 0; i < height; i++){
        // Make entire Row first
        let row = tbl.insertRow();
        for(var n = 0; n < width; n++){
            // Insert each Cell making the Column
            // Both insertRow and insertCell default index is -1
            let col = row.insertCell();
            // Add EventListener for mousedown
            col.addEventListener("mousedown", function(){
                // Select color input each time mousedown happens
                let color = document.querySelector("#colorPicker").value;
                col.style.backgroundColor = color;
            });  
        }
    }
}

