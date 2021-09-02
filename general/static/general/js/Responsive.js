

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

const setDoughnutDisplaySettings = (chart, legendFontSize, legendBoxSize, legendBoxBorderSize, offset) => {
    setLegendFontSize(chart, legendFontSize);
    setLegendBoxSize(chart, legendBoxSize);
    setOffset(chart, offset);
}

const setBarConfig = (bar_graph, bar_width, tooltipFontSize) => {
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        console.log("Setting Bar config... xx-small");
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        console.log("Setting Bar config... x-small");
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        console.log("Setting Bar config... small");
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        console.log("Setting Bar config... medium");
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        console.log("Setting Bar config... large");
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        console.log("Setting Bar config... xx-large");
    }
}


// Need to change barthickness, x ticks font size, y ticks font size
const setBarGraphConfig = (bar_graph, offsetbt=0, offsetxt=0, offsetyt=0) => {
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        console.log("Setting Bar config... xx-small");
        setBarThickness(bar_graph, 12-offsetbt);
        setXticksFontSize(bar_graph, 7-offsetxt);
        setYticksFontSize(bar_graph, 7-offsetyt);
    }
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        console.log("Setting Bar config... x-small");
        setBarThickness(bar_graph, 60-offsetbt);
        setXticksFontSize(bar_graph, 9-offsetxt);
        setYticksFontSize(bar_graph, 9-offsetyt);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 900 && CURRENT_SCREEN_WIDTH <= 1199) {
        console.log("Setting Bar config... small");
        setBarThickness(bar_graph, 40-offsetbt);
        setXticksFontSize(bar_graph, 9-offsetxt);
        setYticksFontSize(bar_graph, 9-offsetyt);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        console.log("Setting Bar config... medium");
        setBarThickness(bar_graph, 40-offsetbt);
        setXticksFontSize(bar_graph, 12-offsetxt);
        setYticksFontSize(bar_graph, 12-offsetyt);
    }
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        console.log("Setting Bar config... large");
        setBarThickness(bar_graph, 60-offsetbt);
        setXticksFontSize(bar_graph, 12-offsetxt);
        setYticksFontSize(bar_graph, 12-offsetyt);
    }
    else if (CURRENT_SCREEN_WIDTH >= 2300) {
        console.log("Setting Bar config... xx-large");
        
        setXticksFontSize(bar_graph, 16-offsetxt);
        setYticksFontSize(bar_graph, 16-offsetyt);
    }
}

const setDoughnutConfig = (d_graph, legendOffset=0, boxWidthOffset=0, boxOutlineOffset=0) => {
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        console.log("Setting Doughnut config... xx-small");
        setLegendFontSize(d_graph, 4-legendOffset);
        setLegendBoxSize(d_graph, 15-boxWidthOffset);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        console.log("Setting Bar config... x-small");
        setLegendFontSize(d_graph, 9-legendOffset);
        setLegendBoxSize(d_graph, 12-boxWidthOffset);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 600 && CURRENT_SCREEN_WIDTH <= 899) {
        console.log("Setting Bar config... small");
        setLegendFontSize(d_graph, 9-legendOffset);
        setLegendBoxSize(d_graph, 12-boxWidthOffset);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 1200 && CURRENT_SCREEN_WIDTH <= 1499) {
        console.log("Setting Bar config... large");
        setLegendFontSize(d_graph, 9-legendOffset);
        setLegendBoxSize(d_graph, 12-boxWidthOffset);
    } 
    else if (CURRENT_SCREEN_WIDTH >= 1500 && CURRENT_SCREEN_WIDTH <= 1899) {
        console.log("Setting Bar config... xx-large");
        setLegendFontSize(d_graph, 9-legendOffset);
        setLegendBoxSize(d_graph, 12-boxWidthOffset);
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

const middlColPosition = () => {
    if (CURRENT_SCREEN_WIDTH >= 300 && CURRENT_SCREEN_WIDTH <= 599) {
        $("#middle-col").css("grid-column-start", "66");
    }
}