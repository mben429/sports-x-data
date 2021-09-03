

var CURRENT_SCREEN_WIDTH = $(window).width();
var CURRENT_SCREEN_HEIGHT = $(window).height();


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

const setOffset = (d_graph, offset) => {
    d_graph.data.datasets[0].hoverOffset = offset;
    d_graph.update();
}

const setTooltipFontSize = (bar_graph, font_size) => {
    bar_graph.options.plugins.tooltip.titleFont.size = font_size;
    bar_graph.options.plugins.tooltip.bodyFont.size = font_size;
    bar_graph.update();
    console.log("YO", bar_graph.options.plugins.tooltip.bodyFont.size);

}

const setBarDisplaySettings = (chart, bar_thickness, xticksFontSize, yticksFontSize, tooltipFontSize) => {
    setBarThickness(chart, bar_thickness);
    setXticksFontSize(chart, xticksFontSize);
    setYticksFontSize(chart, yticksFontSize);
    setTooltipFontSize(chart, tooltipFontSize);
}

const setDoughnutDisplaySettings = (chart, legendFontSize, legendBoxSize, offset, tooltipFontSize) => {
    setLegendFontSize(chart, legendFontSize);
    setLegendBoxSize(chart, legendBoxSize);
    setOffset(chart, offset);
    setTooltipFontSize(chart, tooltipFontSize);
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

const middlColPosition = () => {
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        $("#middle-col").css("grid-column-start", "66");
    }
}