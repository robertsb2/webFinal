$(document).ready(function(){
canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d");
BAR_WIDTH = 10;
BAR_SPACING = 5;
LINE_COUNT = 10;
CANVS_WIDTH = canvas.width - canvas.style.padding * 2;
CANVS_HEIGHT = canvas.height - canvas.style.padding * 2;
SIDE_SPACING = 10;
VERTICAL_SPACING = 10;
    drawGraph();
    drawLines();
    drawText();
    drawBars();
});

function drawGraph(){
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(CANVS_WIDTH - SIDE_SPACING, CANVS_HEIGHT - VERTICAL_SPACING);
    ctx.lineTo(CANVS_WIDTH - CANVS_WIDTH + SIDE_SPACING, CANVS_HEIGHT - VERTICAL_SPACING);
    ctx.lineTo(CANVS_WIDTH - CANVS_WIDTH + SIDE_SPACING, CANVS_HEIGHT - CANVS_HEIGHT + VERTICAL_SPACING);
    ctx.stroke();
}

function drawLines(){
    var lineSpacing = ((CANVS_HEIGHT - VERTICAL_SPACING) - (CANVS_HEIGHT - CANVS_HEIGHT + VERTICAL_SPACING)) / LINE_COUNT; 
    var lineIndex = 0;
    var graphY;
    while (lineIndex < LINE_COUNT){
        graphY = CANVS_HEIGHT - VERTICAL_SPACING - (lineSpacing * lineIndex);
        ctx.strokeStyle = "#000";
        ctx.beginPath();
        ctx.moveTo(CANVS_WIDTH - CANVS_WIDTH + SIDE_SPACING - 5, graphY);
        ctx.lineTo(CANVS_WIDTH - SIDE_SPACING, graphY);
        ctx.stroke();
        lineIndex++
    }
};

function drawBars(){

};

function drawText(){

};