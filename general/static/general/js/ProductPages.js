
// Global dicts to help
const bars_dict = {
    1: "#overview-bar",
    2: "#attack-bar",
    3: "#defense-bar",
    4: "#kg-bar",
    5: "#bh-bar",
    6: "#rm-bar",
    7: "#sp-bar",
    8: "#discipline-bar",
}

const cntent_dict = {
    1: "#overview-cntent",
    2: "#attack-cntent",
    3: "#defense-cntent",
    4: "#kg-cntent",
    5: "#bh-cntent",
    6: "#rm-cntent",
    7: "#sp-cntent",
    8: "#discipline-cntent",
}

const img_dict = {
    1: "#overview-btn",
    2: "#attack-btn",
    3: "#defense-btn",
    4: "#kg-btn",
    5: "#bh-btn",
    6: "#rm-btn",
    7: "#sp-btn",
    8: "#discipline-btn",
}

function rotateImage(id, degree) {
    $(id).animate({
        transform: degree
    }, {
        step: function(now, fx) {
            $(this).css({
                '-webkit-transform': 'rotate(' + now + 'deg)',
                '-moz-transform': 'rotate(' + now + 'deg)',
                'transform': 'rotate(' + now + 'deg)'
            });
        }
    });
}


// GETTERS AND SETTERS


function getStartRowVal(id) {
    return parseInt($(id).css("grid-row-start"));
}

function getEndRowVal(id) {
    return parseInt($(id).css("grid-row-end"));
}

function getGridTemplateVals(id) {
    let gtr = $(id).css("grid-template-rows");

    return gtr;
}

function setNewStartRowVal(id, new_row) {
    let new_row_str = new_row.toString()
    $(id).css("grid-row-start", new_row_str);
}

function setNewEndRowVal(id, new_row) {
    let new_row_str = new_row.toString()
    $(id).css("grid-row-end", new_row_str);
}
function setBarHidden(id) {
    $(id).css("display", "none");
}

function setBarVisible(id) {
    $(id).css("display", "grid");
}

function setBarRowVals(bar_clicked, bars_affected_indexes, disp){
    
    // Go through necessary indexes and set new positions.
    for(let i = 0; i < bars_affected_indexes.length; i++){
        //Retrieve Id's
        curr_bar_id_str = bars_dict[bars_affected_indexes[i]];
        curr_cntent_id_str = cntent_dict[bars_affected_indexes[i]];
        
        // Get current row values
        strt_row_bar = getStartRowVal(curr_bar_id_str);
        end_row_bar = getEndRowVal(curr_bar_id_str);
        strt_row_cntent = getStartRowVal(curr_cntent_id_str);
        end_row_cntent = getEndRowVal(curr_cntent_id_str);


        //Set Current Row Values
        if (!disp){
            setNewStartRowVal(curr_bar_id_str, strt_row_bar + 4);
            setNewEndRowVal(curr_bar_id_str, end_row_bar + 4);
            setNewStartRowVal(curr_cntent_id_str, strt_row_cntent + 4);
            setNewEndRowVal(curr_cntent_id_str, end_row_cntent + 4);
        }
        else {
            setNewStartRowVal(curr_bar_id_str, strt_row_bar - 4);
            setNewEndRowVal(curr_bar_id_str, end_row_bar - 4);
            setNewStartRowVal(curr_cntent_id_str, strt_row_cntent - 4);
            setNewEndRowVal(curr_cntent_id_str, end_row_cntent - 4);
        }
    }  
}

function setGridRepeatVal(id, curr_grid, op){
    let add_str = "";
    let str_length = curr_grid.length;
    let min_str = "";

    if (op == "add") {
        add_str = curr_grid.concat(" 100px", " 100px", " 100px", " 100px");
        $(id).css("grid-template-rows", add_str);
    }

    else if (op == "minus"){
        min_str = curr_grid.slice(0, str_length-24);
        $(id).css("grid-template-rows", min_str);
    }
}

function getGridRepeatVal(id){
    let gtr_str = $(id).css("grid-template-rows");
    console.log("Value in getter function: ", gtr_str.length);
    return gtr_str;
}

function setFooterPosition(id, op){
    let strt_row = getStartRowVal(id);
    let end_row = getEndRowVal(id);


    if (op == "add"){
        setNewStartRowVal(id, strt_row + 4);
        setNewEndRowVal(id, end_row + 4);
    }
    else if (op == "minus"){
        setNewStartRowVal(id, strt_row - 4);
        setNewEndRowVal(id, end_row - 4);
    }
}

function setInterestedSection(header_id, subheader_id, btn_id, op){
    let header_sr = getStartRowVal(header_id);
    let header_er = getEndRowVal(header_id);
    let subheader_sr = getStartRowVal(subheader_id);
    let subheader_er = getEndRowVal(subheader_id);
    let btn_sr = getStartRowVal(btn_id);
    let btn_er = getEndRowVal(btn_id);

    if (op == "add"){
        setNewStartRowVal(header_id, header_sr + 4);
        setNewEndRowVal(header_id, header_er + 4);
        setNewStartRowVal(subheader_id, subheader_sr + 4);
        setNewEndRowVal(subheader_id, subheader_er + 4);
        setNewStartRowVal(btn_id, btn_sr + 4);
        setNewEndRowVal(btn_id, btn_er + 4);
    }
    else if (op == "minus"){
        setNewStartRowVal(header_id, header_sr - 4);
        setNewEndRowVal(header_id, header_er - 4);
        setNewStartRowVal(subheader_id, subheader_sr - 4);
        setNewEndRowVal(subheader_id, subheader_er - 4);
        setNewStartRowVal(btn_id, btn_sr - 4);
        setNewEndRowVal(btn_id, btn_er - 4);
    }
}

function setBarGrid(grid_id, op){
    let end_row = getEndRowVal(grid_id);

    if (op == "add"){
        setNewEndRowVal(grid_id, end_row + 4);
    }
    else if (op == "minus"){
        setNewEndRowVal(grid_id, end_row - 4);
    }
}

function setBarGridRows(grid_id, op){
    /* 
    let gtr = getGridTemplateVals(grid_id);
    let gtr_arr = gtr.split(" ");
    let arr_length = gtr_arr.length;
    console.log("GTR Array: ", gtr_arr.length);
    let new_gtr = "";
    let new_gtr_arr;

    console.log("GTR: ", gtr);

    let curr_rep_val = gtr.substring(
        0,
        gtr.indexOf(" ")
    );

    console.log("Current Repeat() val: ", curr_rep_val);

    if (op == "add") {
        new_gtr = gtr.concat(" ", curr_rep_val, " ", curr_rep_val, " ", curr_rep_val);
    }

    else if (op == "minus") {
        new_gtr_arr = gtr_arr.slice(0, arr_length - 4);
        new_gtr = new_gtr_arr.join(' ');
        console.log("New GTR: ", new_gtr_arr.length);
    }
    
    $("#bars-containers").css("grid-template-rows", new_gtr);
    */
}



// BAR BUTTONS CLICK FUNCTIONS
const toggle_speed = 0;

function overviewBtnClick(){
    let bars_affected_list = [2, 3, 4, 5, 6, 7, 8];
    let bar_clicked_id = 1;
    let grid_str;

    //Testing


    if ($("#overview-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#overview-cntent").slideToggle(toggle_speed);
        console.log("content is hidden!");
        setBarRowVals(bar_clicked_id, bars_affected_list, false);


        // Prod Analysis Grid Manipulation
        grid_str = getGridRepeatVal("#prod-analysis-cnt");
        setGridRepeatVal("#prod-analysis-cnt", grid_str, "add");


        // Set Footer section
        setFooterPosition("#fter-cnt-prod", "add");


        // Set Interested? Section.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "add");


        // Set Bar container grid
        setBarGrid("#bars-containers", "add");


        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "add");

    }


    else {
        $("#overview-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
        setBarRowVals(bar_clicked_id, bars_affected_list, true);
    

       // Prod Analysis Grid Manipulation
       grid_str = getGridRepeatVal("#prod-analysis-cnt");
       setGridRepeatVal("#prod-analysis-cnt", grid_str, "minus");


        // Footer section manipulation
        setFooterPosition("#fter-cnt-prod", "minus");

        // Interested? Section manipulation.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "minus");
        
        
        // Set Bar container grid
        setBarGrid("#bars-containers", "minus");
        

        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "minus");

    }
}

function attackBtnClick(){
    let bars_affected_list = [3, 4, 5, 6, 7, 8];
    let bar_clicked_id = 2;

    let grid_str;

    if ($("#attack-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#attack-cntent").slideToggle(toggle_speed);
        console.log("content is hidden!");
        setBarRowVals(bar_clicked_id, bars_affected_list, false);


        // Prod Analysis Grid Manipulation
        grid_str = getGridRepeatVal("#prod-analysis-cnt");
        setGridRepeatVal("#prod-analysis-cnt", grid_str, "add");


        // Set Footer section
        setFooterPosition("#fter-cnt-prod", "add");


        // Set Interested? Section.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "add");


        // Set Bar container grid
        setBarGrid("#bars-containers", "add");


        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "add");

    }


    else {
        $("#attack-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
        setBarRowVals(bar_clicked_id, bars_affected_list, true);
    

       // Prod Analysis Grid Manipulation
       grid_str = getGridRepeatVal("#prod-analysis-cnt");
       setGridRepeatVal("#prod-analysis-cnt", grid_str, "minus");


        // Footer section manipulation
        setFooterPosition("#fter-cnt-prod", "minus");

        // Interested? Section manipulation.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "minus");
        
        
        // Set Bar container grid
        setBarGrid("#bars-containers", "minus");

        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "minus");

    }
}

function defenseBtnClick(){
    let bars_affected_list = [4, 5, 6, 7, 8];
    let bar_clicked_id = 3;
    let grid_str;

    if ($("#defense-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#defense-cntent").slideToggle(toggle_speed);
        console.log("content is hidden!");
        setBarRowVals(bar_clicked_id, bars_affected_list, false);


        // Prod Analysis Grid Manipulation
        grid_str = getGridRepeatVal("#prod-analysis-cnt");
        setGridRepeatVal("#prod-analysis-cnt", grid_str, "add");


        // Set Footer section
        setFooterPosition("#fter-cnt-prod", "add");


        // Set Interested? Section.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "add");


        // Set Bar container grid
        setBarGrid("#bars-containers", "add");

        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "add");

    }


    else {
        $("#defense-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
        setBarRowVals(bar_clicked_id, bars_affected_list, true);
    

       // Prod Analysis Grid Manipulation
       grid_str = getGridRepeatVal("#prod-analysis-cnt");
       setGridRepeatVal("#prod-analysis-cnt", grid_str, "minus");


        // Footer section manipulation
        setFooterPosition("#fter-cnt-prod", "minus");

        // Interested? Section manipulation.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "minus");
        
        
        // Set Bar container grid
        setBarGrid("#bars-containers", "minus");

        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "minus");

    }
}

function kgBtnClick(){
    let bars_affected_list = [5, 6, 7, 8];
    let bar_clicked_id = 4;

    let grid_str;

    if ($("#kg-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#kg-cntent").slideToggle(toggle_speed);
        console.log("content is hidden!");
        setBarRowVals(bar_clicked_id, bars_affected_list, false);


        // Prod Analysis Grid Manipulation
        grid_str = getGridRepeatVal("#prod-analysis-cnt");
        setGridRepeatVal("#prod-analysis-cnt", grid_str, "add");


        // Set Footer section
        setFooterPosition("#fter-cnt-prod", "add");


        // Set Interested? Section.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "add");


        // Set Bar container grid
        setBarGrid("#bars-containers", "add");

        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "add");

    }


    else {
        $("#kg-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
        setBarRowVals(bar_clicked_id, bars_affected_list, true);
    

       // Prod Analysis Grid Manipulation
       grid_str = getGridRepeatVal("#prod-analysis-cnt");
       setGridRepeatVal("#prod-analysis-cnt", grid_str, "minus");


        // Footer section manipulation
        setFooterPosition("#fter-cnt-prod", "minus");

        // Interested? Section manipulation.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "minus");
        
        
        // Set Bar container grid
        setBarGrid("#bars-containers", "minus");

        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "minus");

    }
}

function bhBtnClick(){
    let bars_affected_list = [6, 7, 8];
    let bar_clicked_id = 5;

    let grid_str;

    if ($("#bh-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#bh-cntent").slideToggle(toggle_speed);
        console.log("content is hidden!");
        setBarRowVals(bar_clicked_id, bars_affected_list, false);


        // Prod Analysis Grid Manipulation
        grid_str = getGridRepeatVal("#prod-analysis-cnt");
        setGridRepeatVal("#prod-analysis-cnt", grid_str, "add");


        // Set Footer section
        setFooterPosition("#fter-cnt-prod", "add");


        // Set Interested? Section.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "add");


        // Set Bar container grid
        setBarGrid("#bars-containers", "add");


        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "add");

    }


    else {
        $("#bh-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
        setBarRowVals(bar_clicked_id, bars_affected_list, true);
    

       // Prod Analysis Grid Manipulation
       grid_str = getGridRepeatVal("#prod-analysis-cnt");
       setGridRepeatVal("#prod-analysis-cnt", grid_str, "minus");


        // Footer section manipulation
        setFooterPosition("#fter-cnt-prod", "minus");

        // Interested? Section manipulation.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "minus");
        
        
        // Set Bar container grid
        setBarGrid("#bars-containers", "minus");

        
        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "minus");

    }
}

function rmBtnClick(){
    let bars_affected_list = [7, 8];
    let bar_clicked_id = 6;
    let grid_str;

    if ($("#rm-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#rm-cntent").slideToggle(toggle_speed);
        console.log("content is hidden!");
        setBarRowVals(bar_clicked_id, bars_affected_list, false);


        // Prod Analysis Grid Manipulation
        grid_str = getGridRepeatVal("#prod-analysis-cnt");
        setGridRepeatVal("#prod-analysis-cnt", grid_str, "add");


        // Set Footer section
        setFooterPosition("#fter-cnt-prod", "add");


        // Set Interested? Section.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "add");


        // Set Bar container grid
        setBarGrid("#bars-containers", "add");

        
        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "add");

    }


    else {
        $("#rm-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
        setBarRowVals(bar_clicked_id, bars_affected_list, true);
    

       // Prod Analysis Grid Manipulation
       grid_str = getGridRepeatVal("#prod-analysis-cnt");
       setGridRepeatVal("#prod-analysis-cnt", grid_str, "minus");


        // Footer section manipulation
        setFooterPosition("#fter-cnt-prod", "minus");

        // Interested? Section manipulation.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "minus");
        
        
        // Set Bar container grid
        setBarGrid("#bars-containers", "minus");

        
        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "minus");

    }

}

function spBtnClick(){
    let bars_affected_list = [8];
    let bar_clicked_id = 7;
    let grid_str;

    if ($("#sp-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#sp-cntent").slideToggle(toggle_speed);
        console.log("content is hidden!");
        setBarRowVals(bar_clicked_id, bars_affected_list, false);


        // Prod Analysis Grid Manipulation
        grid_str = getGridRepeatVal("#prod-analysis-cnt");
        setGridRepeatVal("#prod-analysis-cnt", grid_str, "add");


        // Set Footer section
        setFooterPosition("#fter-cnt-prod", "add");


        // Set Interested? Section.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "add");


        // Set Bar container grid
        setBarGrid("#bars-containers", "add");

        
        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "add");

    }


    else {
        $("#sp-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
        setBarRowVals(bar_clicked_id, bars_affected_list, true);
    

       // Prod Analysis Grid Manipulation
       grid_str = getGridRepeatVal("#prod-analysis-cnt");
       setGridRepeatVal("#prod-analysis-cnt", grid_str, "minus");


        // Footer section manipulation
        setFooterPosition("#fter-cnt-prod", "minus");

        // Interested? Section manipulation.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "minus");
        
        
        // Set Bar container grid
        setBarGrid("#bars-containers", "minus");

        
        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "minus");

    }
}

function disciplineBtnClick(){
    let bar_clicked_id = 8;
    let grid_str;

    if ($("#discipline-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#discipline-cntent").slideToggle(toggle_speed);
        console.log("content is hidden!");


        // Prod Analysis Grid Manipulation
        grid_str = getGridRepeatVal("#prod-analysis-cnt");
        setGridRepeatVal("#prod-analysis-cnt", grid_str, "add");


        // Set Footer section
        setFooterPosition("#fter-cnt-prod", "add");


        // Set Interested? Section.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "add");


        // Set Bar container grid
        setBarGrid("#bars-containers", "add");

        
        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "add");

    }


    else {
        $("#discipline-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
    

        // Prod Analysis Grid Manipulation
        grid_str = getGridRepeatVal("#prod-analysis-cnt");
        setGridRepeatVal("#prod-analysis-cnt", grid_str, "minus");


        // Footer section manipulation
        setFooterPosition("#fter-cnt-prod", "minus");

        // Interested? Section manipulation.
        setInterestedSection("#interested-header", "#interested-subheader", "#get-in-touch-btn", "minus");
        
        
        // Set Bar container grid
        setBarGrid("#bars-containers", "minus");

        
        // Set Bar Grid Rows
        setBarGridRows("#bars-containers", "minus");

    }
}
