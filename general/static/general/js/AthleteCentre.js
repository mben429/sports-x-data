
//Essentially a Main File. Ensures Athlete Centre shows the correct data.

const teamMainColors = {
  "massey1stxv": "var(--massey-yellow)", 
  "rosmini1stxv": "var(--rosmini-blue)",
  "crusadersrugby": "var(--crusaders-red)",
  "canesrugby": "var(--canes-yellow)",
  "toulonrugby": "var(--toulon-red)",
}

const teamLogos = {
  "massey1stxv": "/static/general/images/rsz_massey_logo-small.png", 
  "rosmini1stxv": "/static/general/images/rsz_rosmini_logo_org.png",
  "crusadersrugby": "/static/general/images/rsz_crusaders_logo_org.png",
  "canesrugby": "/static/general/images/rsz_hurricanes_logo_org.png",
  "toulonrugby": "/static/general/images/rsz_toulon_rugby_org.png",
}

function setColor(id, property, team){
  $(id).css(property, teamMainColors[team]);
}

function setLogo(id, team){
  $(id).attr("src", teamLogos[team]);
}

function updateHeader(curr_team){
  console.log("Updating Header for...", curr_team);

  setColor(".logo-container-circle", "border-color", curr_team);
  setLogo(".logo-img-small", curr_team);

  if (curr_team == "massey1stxv"){
    $("#team-title-id").html('Massey HS 1st XV <text style="color:var(--massey-yellow);"> | </text>2021 Season');
  }
  else if (curr_team == "rosmini1stxv"){
    $("#team-title-id").html('Rosmini College 1st XV <text style="color:var(--rosmini-blue);"> | </text>2021 Season');    
    $(".logo-img-small").css("max-width", "50%");
    $(".logo-container-circle").css("background-color", "white");
  }
  else if (curr_team == "crusadersrugby"){
    $("#team-title-id").html('Canterbury Crusaders <text style="color:var(--crusaders-red);"> | </text>2021 Season');    
    $(".logo-img-small").css("max-width", "50%");
  }
  else if (curr_team == "canesrugby"){
    $("#team-title-id").html('Wellington Hurricanes <text style="color:var(--canes-yellow);"> | </text>2021 Season');   
    $(".logo-img-small").css("max-width", "50%");
  }
  else if (curr_team == "toulonrugby"){
    $("#team-title-id").html("RC Toulonnais <text style='color:var(--toulon-red);'> | </text>2021 Season");   
    $(".logo-img-small").css("max-width", "50%");
  }
  //More teams go here...
}


function updateStandings(curr_team, teamList){
  console.log("Updating Standings for", curr_team);
  setColor("#standings-header", "background-color", curr_team);
  createStandings(curr_team, teamList);
}

function updateRecentMatches(curr_team){
  console.log("Updating Recent Matches for...", curr_team);
}

//teamInfo is list [Massey1stXV, 5, 3, 2, 1....etc]
//otherteamsInfo is list of lists [[Rosmini, 4, 2, 2,1,...], []]
function displayAC(team){
  console.log("Showing Athlete Centre for", team);  

  // Update Initial details.(ok for these to not be stored in DB)
  updateHeader(team);
  updateStandings(team);
  updateRecentMatches(team);
 

}







