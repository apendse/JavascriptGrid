var canvas = document.getElementById("myCanvas");

canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
var context = canvas.getContext("2d");

console.log("I am here  " + canvas.width + " " + canvas.height);
var width = canvas.width;
var height = canvas.height;
console.log("canvas " + canvas);
// context.moveTo(0, 0);
// context.lineTo(width, height);
var gridWidth = 40;
var gridHeight = 40;
var iterations = 100;
//vertical and horizontal
for (var i = 0; i < iterations; i++) {

    if (i % 2 == 0) {
        context.beginPath();
        context.setLineDash([5, 5]);
        context.moveTo(0, i * gridHeight);
        context.lineTo(width, i * gridHeight);
        context.stroke();

        context.beginPath();
        context.setLineDash([5, 5]);
        context.moveTo(i*gridWidth, 0);
        context.lineTo(i*gridWidth, height);
        context.stroke();
    } else {
        context.beginPath();
        context.setLineDash([]);
        context.moveTo(0, i * gridHeight);
        context.lineTo(width, i * gridHeight);
        context.stroke();

        context.beginPath();
        context.setLineDash([]);
        context.moveTo(i*gridWidth, 0);
        context.lineTo(i*gridWidth, height);
        context.stroke();
         
    }
}

// diagonal lines
for (var i = 0; i < iterations; i++) {
    var x = i*gridWidth;
    var y = 0;
    var xEnd = i*gridWidth + iterations*gridWidth;
    var yEnd = iterations*gridHeight;
    
    
    context.moveTo(x, y);
    context.lineTo(xEnd, yEnd);

    x = 0;
    y = (i + 1)*gridHeight;
    xEnd = x + iterations*gridWidth;
    yEnd = y + iterations*gridHeight;

    context.moveTo(x, y);
    
    context.lineTo(xEnd, yEnd);
}

for (var i = 0; i < iterations; i++) {
    var x = i*gridWidth;
    var y = 0;
    var xEnd = x - iterations*gridWidth;
    var yEnd = y + iterations*gridHeight;
    
    
    context.moveTo(x, y);

    context.lineTo(xEnd, yEnd);
    x = 0;
    y = (i + 1)*gridHeight;
    xEnd = x - iterations*gridWidth;
    yEnd = y + iterations*gridHeight;

    context.moveTo(x, y);
    context.lineTo(xEnd, yEnd);
    
}


context.strokeStyle = "black";
context.stroke();

