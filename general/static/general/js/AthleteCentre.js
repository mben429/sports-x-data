
//Essentially a Main File. Ensures Athlete Centre shows the correct data.

const teamLogos = {
  "massey1stxv": "/static/general/images/rsz_massey_logo-small.png", 
  "rosmini1stxv": "/static/general/images/rsz_rosmini_logo_org.png",
  "crusadersrugby": "/static/general/images/rsz_crusaders_logo_org.png",
  "canesrugby": "/static/general/images/rsz_hurricanes_logo_org.png",
  "toulonrugby": "/static/general/images/rsz_toulon_rugby_org.png",
}

function setColor(id, property, team){
  $(id).css(property, teamMainColors[team]);
  console.log("hello");
}

function setLogo(id, team){
  $(id).attr("src", teamLogos[team]);
}

function setHeader(curr_team){
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


function setStandings(curr_team, teamList){
  console.log("Updating Standings for", curr_team);
  setColor("#standings-header", "background-color", curr_team);
  createStandings(curr_team, teamList);
}

function setRecentMatches(curr_team){
  console.log("Updating Recent Matches for...", curr_team);
  createRecentMatches(curr_team);
}

function setTeamAverages(curr_team){
  console.log("Updating Team Averages");
}

function setTheme(curr_team){
  $(".alt-text").each(function(){
    $(this).css("color", teamMainColors[curr_team]);
  });

  setColor(".s1-panel", "background-color", teamSecondColors[curr_team]);

  $(".header-bar-btn a").hover(
    function(){
    $(this).css("color", teamMainColors[curr_team]);
  },
    function(){
      $(this).css("color", "white");
    }
  );

  $(".jump-to-bar a").hover(
    function(){
      $(this).css("color", teamMainColors[curr_team]);
    },
    function(){
      $(this).css("color", "white");
    }
  );
  

  $(".alt-bg").each(function(){
    $(this).css("background-color", teamMainColors[curr_team]);
  });

  $("li").hover(
    function(){
      $(this).css("background-color", "black");
    },
    function(){
      $(this).css("background-color", teamMainColors[curr_team]);
    }
  );
}

//Simply draw all the graphs.
function drawGraphs(team){
  linespeed_barchart(team);
  tackles_22_pie_graph(team);
  tackles_5_pie_graph(team);
  tackles_pi_graph(team);
  opp_pts_22_barchart(team);
  running_on_ball_pie(team);
  points_per_visit_22(team);
  meters_gain_success(team);
  posessions_kicked_pie(team);
  kicks_out_on_full_bar(team);
  kick_regathers_bar(team);
  kick_for_touch_bar(team);
  pass_success_pie(team);
  pass_success_by_type_bar(team);
  handling_errors_bar(team);
  ruck_success_pie(team);
  ruck_speed_bar(team);
  ruck_success_diff_fields_bar(team);
  set_piece_diff_field(team);
  set_piece_success_bar(team);
  action_taken_set_piece_pie(team);
  outcome_from_set_piece(team);
  penalties_conceded_bar(team);
  penalties_conceded_diff_field_bar(team);
  outcome_of_penalties_pie(team);

}


// THis is thea "main" function essentially. Runs all the necessary functions to display the correct AC.
function displayAC(team){
  console.log("Showing Athlete Centre for", team);  

  //Change theme of site to match team logged in.
  setTheme(team);

  // Update Initial details.(ok for these to not be stored in DB)
  setHeader(team);
  setStandings(team);
  setRecentMatches(team);

  //Now, this is where we are accessing DB for indepth stats. Still in progress.
  setTeamAverages(team);
  
  //Draw Graphs
  drawGraphs(team);

}







