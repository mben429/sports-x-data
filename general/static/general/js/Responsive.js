

const CURRENT_SCREEN_WIDTH = $(window).width();
const CURRENT_SCREEN_HEIGHT = $(window).height();


const setBarThickness = (bar_graph, bar_thickness) => {
    bar_graph.data.datasets[0]["barThickness"] = bar_thickness;
    bar_graph.update();
}

const setXticksFontSize = (bar_graph, font_size) => {
    bar_graph.options.scales.x.ticks.font.size = font_size;
    bar_graph.update();
}

const setYticksFontSize = (bar_graph, font_size) => {
    bar_graph.options.scales.y.ticks.font.size = font_size;
    bar_graph.update();
}

const setLegendFontSize = (d_graph, font_size) => {
    d_graph.options.plugins.legend.labels.font.size = font_size;
    d_graph.update();
}

const setLegendBoxSize = (d_graph, box_size) => {
    d_graph.options.plugins.legend.labels.boxWidth = box_size;
    d_graph.update();
}

// Need to change barthickness, x ticks font size, y ticks font size
const setBarGraphConfig = (bar_graph, offsetbt=0, offsetxt=0, offsetyt=0) => {
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        console.log("Setting Bar config... xx-small");
        setBarThickness(bar_graph, 12-offsetbt);
        setXticksFontSize(bar_graph, 7-offsetxt);
        setYticksFontSize(bar_graph, 7-offsetyt);
    } 
}

const setDoughnutConfig = (d_graph, legendOffset=0, boxWidthOffset=0) => {
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        console.log("Setting Doughnut config... xx-small");
        setLegendFontSize(d_graph, 4-legendOffset);
        setLegendBoxSize(d_graph, 15-boxWidthOffset);
    } 
}


const setGridSize = (option) => {
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        // Option 1 == larger
        if (option == 1){
            console.log("Setting larger Grid Size config... xx-small");
            $("#cnt-overview-mc").css("grid-template-rows", "repeat(60, 1em)");
            $("#middle-col").css("grid-row-end", "61");
        }
        // Option 0 == smaller
        else if (option == 0){
            console.log("Setting smaller Grid Size config... xx-small");
            $("#cnt-overview-mc").css("grid-template-rows", "repeat(65, 1em)");
            $("#middle-col").css("grid-row-end", "66");
        }
    }
}