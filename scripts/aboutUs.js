var date = new Date();
date.setMonth(6);

$(document).ready(function () {
    $(".box").on('mouseover', function () {
        $(this).css({
            "background-color": "#F8DE7E",
        });
    });

    $('.box').on('mouseleave', function () {
        $(this).css({
            "background-color": "#ffc",
        });
    });

    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d");
    BAR_WIDTH = 15;
    BAR_COUNT = 6;
    LINE_COUNT = 6;
    CANVS_WIDTH = canvas.width - canvas.style.padding * 2;
    CANVS_HEIGHT = canvas.height - canvas.style.padding * 2;
    SIDE_SPACING = 30;
    VERTICAL_SPACING = 20;
    GRAPH_BOTTOM = CANVS_HEIGHT - VERTICAL_SPACING
    GRAPH_EDGE = CANVS_WIDTH - CANVS_WIDTH + SIDE_SPACING;
    drawEverything();
});



function drawEverything() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGraph();
    drawLines();
    drawBars();
}

function drawGraph() {
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(CANVS_WIDTH - SIDE_SPACING, GRAPH_BOTTOM);
    ctx.lineTo(GRAPH_EDGE, GRAPH_BOTTOM);
    ctx.lineTo(GRAPH_EDGE, CANVS_HEIGHT - CANVS_HEIGHT + VERTICAL_SPACING);
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.fillText("Previous Quater Sales", canvas.width / 2, VERTICAL_SPACING)
}

function drawLines() {
    var lineSpacing = ((GRAPH_BOTTOM) - (CANVS_HEIGHT - CANVS_HEIGHT + VERTICAL_SPACING)) / LINE_COUNT;
    var lineIndex = 0;
    var profits = 20;
    var color = "#000"
    var graphY;
    ctx.textAlign = "end";
    while (lineIndex < LINE_COUNT) {
        graphY = GRAPH_BOTTOM - (lineSpacing * lineIndex);
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(GRAPH_EDGE - 5, graphY);
        ctx.lineTo(CANVS_WIDTH - SIDE_SPACING, graphY);
        ctx.stroke();
        ctx.fillText(profits * lineIndex + "k", GRAPH_EDGE - 2, graphY - 2);
        lineIndex++
    }
};

function drawBars() {
    var lineSpacing = ((GRAPH_BOTTOM) - (CANVS_HEIGHT - CANVS_HEIGHT + VERTICAL_SPACING)) / LINE_COUNT;
    var barSpacing = ((CANVS_WIDTH - SIDE_SPACING) - (GRAPH_EDGE) + BAR_WIDTH) / BAR_COUNT;
    var barIndex = 0;
    var barX = 0;
    var color = "blue"
    var profit = 20;
    var offSet = 10;
    while (barIndex < BAR_COUNT) {
        var barY = GRAPH_BOTTOM - (lineSpacing * barIndex) + (((Math.random()) * 2 - 1) * 20);
        while (barY < VERTICAL_SPACING) {
            barY = GRAPH_BOTTOM
        }
        if (barY > GRAPH_BOTTOM) {
            barY = GRAPH_BOTTOM;
        }
        barX = GRAPH_EDGE + (barSpacing * barIndex) + offSet;
        ctx.fillStyle = color;
        ctx.fillRect(barX, barY, BAR_WIDTH, GRAPH_BOTTOM - barY);
        ctx.textAlign = "center";
        ctx.fillStyle = "#000";
        ctx.fillText(date.getMonth() + barIndex + 1 + "/" + (date.getFullYear() - 1), barX + offSet, GRAPH_BOTTOM + 10);
        barIndex++;
    }
};