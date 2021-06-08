
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

function getStartRowVal(id) {
    return parseInt($(id).css("grid-row-start"));
}

function getEndRowVal(id) {
    return parseInt($(id).css("grid-row-end"));
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
        console.log("Current Bar: ", bars_affected_indexes[i]);
        //Retrieve Id's
        curr_bar_id_str = bars_dict[bars_affected_indexes[i]];
        curr_cntent_id_str = cntent_dict[bars_affected_indexes[i]];
        console.log("Current Bar ID: ", curr_bar_id_str);
        console.log("Current Content ID: ", curr_cntent_id_str);
        

        // Get current row values
        strt_row_bar = getStartRowVal(curr_bar_id_str);
        end_row_bar = getEndRowVal(curr_bar_id_str);
        strt_row_cntent = getStartRowVal(curr_cntent_id_str);
        end_row_cntent = getEndRowVal(curr_cntent_id_str);
        console.log("Current Row Values: ", strt_row_bar, end_row_bar, strt_row_cntent, end_row_cntent);


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



function overviewBtnClick(){
    let bars_affected_list = [2, 3, 4, 5, 6, 7, 8];
    let bar_clicked_id = 1;

    if ($("#overview-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#overview-cntent").slideToggle();
        console.log("content is hidden!");
        setBarRowVals(bar_clicked_id, bars_affected_list, false);


    }
    else {
        $("#overview-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
        setBarRowVals(bar_clicked_id, bars_affected_list, true);
    }
}

function attackBtnClick(){
    let bars_affected_list = [3, 4, 5, 6, 7, 8];
    let bar_clicked_id = 2;

    if ($("#attack-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#attack-cntent").slideToggle();
        console.log("content is hidden!");
        setBarRowVals(bar_clicked_id, bars_affected_list, false);

    }
    else {
        $("#attack-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
        setBarRowVals(bar_clicked_id, bars_affected_list, true);
    }
}

function defenseBtnClick(){
    let bars_affected_list = [4, 5, 6, 7, 8];
    let bar_clicked_id = 3;

    if ($("#defense-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#defense-cntent").slideToggle();
        console.log("content is hidden!");
        setBarRowVals(bar_clicked_id, bars_affected_list, false);

    }
    else {
        $("#defense-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
        setBarRowVals(bar_clicked_id, bars_affected_list, true);
    }
}

function kgBtnClick(){
    let bars_affected_list = [5, 6, 7, 8];
    let bar_clicked_id = 4;

    if ($("#kg-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#kg-cntent").slideToggle();
        console.log("content is hidden!");
        setBarRowVals(bar_clicked_id, bars_affected_list, false);

    }
    else {
        $("#kg-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
        setBarRowVals(bar_clicked_id, bars_affected_list, true);
    }
}

function bhBtnClick(){
    let bars_affected_list = [6, 7, 8];
    let bar_clicked_id = 5;

    if ($("#bh-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#bh-cntent").slideToggle();
        console.log("content is hidden!");
        setBarRowVals(bar_clicked_id, bars_affected_list, false);

    }
    else {
        $("#bh-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
        setBarRowVals(bar_clicked_id, bars_affected_list, true);
    }
}

function rmBtnClick(){
    let bars_affected_list = [7, 8];
    let bar_clicked_id = 6;

    if ($("#rm-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#rm-cntent").slideToggle();
        console.log("content is hidden!");
        setBarRowVals(bar_clicked_id, bars_affected_list, false);

    }
    else {
        $("#rm-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
        setBarRowVals(bar_clicked_id, bars_affected_list, true);
    }

}

function spBtnClick(){
    let bars_affected_list = [8];
    let bar_clicked_id = 7;

    if ($("#sp-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#sp-cntent").slideToggle();
        console.log("content is hidden!");
        setBarRowVals(bar_clicked_id, bars_affected_list, false);

    }
    else {
        $("#sp-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
        setBarRowVals(bar_clicked_id, bars_affected_list, true);
    }
}

function disciplineBtnClick(){
    let bar_clicked_id = 8;

    if ($("#discipline-cntent").css("display") == "none") {
        rotateImage(img_dict[bar_clicked_id], 90);
        $("#discipline-cntent").slideToggle();
        console.log("content is hidden!");
    }
    else {
        $("#discipline-cntent").css("display", "none");
        rotateImage(img_dict[bar_clicked_id], 0);
        console.log("content is visible!");
    }
}
