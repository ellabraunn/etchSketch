const container = document.querySelector("#container");
const controls = document.querySelector("#controls")
const title = document.createElement("h1")
title.classList.add("title");
const refresh = document.createElement("button");
refresh.classList.add("refresh");
refresh.textContent = "Refresh Grid";
title.textContent = "Ella's Etch-a-Sketch";
controls.appendChild(title);
controls.appendChild(refresh);


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
        square.classList.add("hover");
    });
    // square.addEventListener("mouseleave", () => {
    //     square.classList.remove("hover");
    // }); 
    container.appendChild(square);  
}