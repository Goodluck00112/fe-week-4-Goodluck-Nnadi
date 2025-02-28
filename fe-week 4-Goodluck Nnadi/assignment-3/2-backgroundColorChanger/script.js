document.getElementById("colorButton").addEventListener("click", function() {
    var colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
    var randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
});