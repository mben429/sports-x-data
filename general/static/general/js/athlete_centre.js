//Field Datapoints Functionality hide and show functionality.
$("#tackles-failed-btn-id").click(function(){
    $(".blue-dp").hide();
    $(".red-cross").show();
  });

$("#tackles-success-btn-id").click(function(){
    $(".blue-dp").show();
    $(".red-cross").hide();
});

$("#tackles-percentage-btn-id").click(function(){
    $(".blue-dp").show();
    $(".red-cross").show();
});

//Temporary function to insert tackle success datapoints onto field quicker
function coords_creation_tackles(num_tackles){
    let coords_array = [];
    var i;
    
    for (i = 0; i < num_tackles; i++){
        let row = Math.floor((Math.random() * 11) + 2);
        let col = Math.floor((Math.random() * 18) + 6);
        coords_array.push([row, row+1, col, col+1]);
    }
    return coords_array;
}

function create_tackles_made_points(coordinates_array){
    var j = 0;
    var grid = document.getElementsByClassName('rugby-field-container')[0];
    var file_loc_str = "/static/general/images/full-moon.png";

    // Loop through coordinates, and create <img> element that goes into grid
    for(j = 0; j < coordinates_array.length; j++){
        var curr_img = document.createElement('img');

        //Set attributes for img
        curr_img.src = file_loc_str;
        curr_img.className = "blue-dp";

        //Extract all four coords and set them on curr image
        curr_img.style.gridRowStart = coordinates_array[j][0].toString();
        curr_img.style.gridRowEnd = coordinates_array[j][1].toString();
        curr_img.style.gridColumnStart = coordinates_array[j][2].toString();
        curr_img.style.gridColumnEnd = coordinates_array[j][3].toString();       

        //Append to Grid container
        grid.appendChild(curr_img);
    }
}

function create_tackles_missed_points(coordinates_array){
    var j = 0;
    var grid = document.getElementsByClassName('rugby-field-container')[0];
    var file_loc_str = "/static/general/images/x-mark-16.png";

    // Loop through coordinates, and create <img> element that goes into grid
    for(j = 0; j < coordinates_array.length; j++){
        var curr_img = document.createElement('img');

        //Set attributes for img
        curr_img.src = file_loc_str;
        curr_img.className = "red-cross";

        //Extract all four coords and set them on curr image
        curr_img.style.gridRowStart = coordinates_array[j][0].toString();
        curr_img.style.gridRowEnd = coordinates_array[j][1].toString();
        curr_img.style.gridColumnStart = coordinates_array[j][2].toString();
        curr_img.style.gridColumnEnd = coordinates_array[j][3].toString();       

        //Append to Grid container
        grid.appendChild(curr_img);
    }
}

// Create Datapoints for tackles made
array_tackles_made = coords_creation_tackles(100);
create_tackles_made_points(array_tackles_made);

// Create Datapoints for tackles missed
array_tackles_missed = coords_creation_tackles(20);
create_tackles_missed_points(array_tackles_missed);