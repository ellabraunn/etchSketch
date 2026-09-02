const container = document.querySelector("#container");
const controls = document.querySelector("#controls")
const title = document.createElement("h1")
title.classList.add("title");
const instruction = document.createElement("p")
instruction.classList.add("info")
const refresh = document.createElement("button");
refresh.classList.add("refresh");
refresh.textContent = "Refresh Grid";
title.textContent = "Ella's Etch-a-Sketch";
instruction.textContent = "Press the D key to stop drawing, press it again to begin drawing";
controls.appendChild(title);
controls.appendChild(instruction);
controls.appendChild(refresh);

let drawing = true;
document.addEventListener("keydown", (event) => {//event being passed in will tell us more about the event
    if (event.key === "d") {
        drawing = !drawing;//this will switch the drawing var no matter what it starts with
    }
});

refresh.addEventListener ("click", () => {
    const squares = document.querySelectorAll(".square");
    //this contains every square, so we don't have to loop through all
    squares.forEach(square => { //for each square in squares
    square.classList.remove("hover");
    });
});

for(i=0; i<1600; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseenter", () => {
        if (drawing) {
            square.classList.add("hover");
        }
    });
    // square.addEventListener("mouseleave", () => {
    //     square.classList.remove("hover");
    // }); 
    container.appendChild(square);  
}