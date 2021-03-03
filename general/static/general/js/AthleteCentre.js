
//Essentially a Main File. Ensures Athlete Centre shows the correct data.

const LeagueEnabled = {
  "true": [
    "rosmini1stxv",
    "massey1stxv"
  ],
  "false": [
    "crusadersrugby",
    "canesrugby",
    "toulonrugby",
  ],
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

function setHeader(curr_team){

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
  setColor("#standings-header", "background-color", curr_team);
  createStandings(curr_team, teamList);
}

function setRecentMatches(curr_team){
  createRecentMatches(curr_team);
}

function getAvgPoints(team_game_data){
  let avg_pnts;
  let sum = 0;

  for(let i = 0; i < team_game_data.length; i++){
    sum += team_game_data[i][2];
  }

  avg_pnts = sum / team_game_data.length;
  return Math.round((avg_pnts + Number.EPSILON) * 100) / 100;
}

function getAgainstAvgPoints(team_game_data){
  let avg_pnts;
  let sum = 0;

  for(let i = 0; i < team_game_data.length; i++){
    sum += team_game_data[i][3];
  }

  avg_pnts = sum / team_game_data.length;
  return Math.round((avg_pnts + Number.EPSILON) * 100) / 100;
}

function setForPoints(avg_pnts){
  let html_str = "| ".concat(avg_pnts.toString());
  console.log("Html str", html_str);
  $("#team-average-score-1-id").html(html_str);
}

function setAgainstPoints(avg_against_pnts){
  let html_str = "| ".concat(avg_against_pnts.toString());
  console.log("Html str", html_str);
  $("#team-average-score-2-id").html(html_str);
}


function setTeamAverages(curr_team, team_game_data, team_stat_data){
  
  let avg_pnts;
  
  console.log("Updating Team Averages");
  console.log("Team stat data", team_stat_data);
  console.log("Team game data", team_game_data);
  
  avg_pnts = getAvgPoints(team_game_data);
  avg_against_pnts = getAgainstAvgPoints(team_game_data);
  console.log("Average Points", avg_pnts);
  console.log("Against Average Points", avg_against_pnts);

  setForPoints(avg_pnts);
  setAgainstPoints(avg_against_pnts);


}

function setTheme(curr_team){

  //Set Alternative Text color
  $(".alt-text").each(function(){
    $(this).css("color", teamMainColors[curr_team]);
  });

  //Set all panel backgrounds to black
  setColor(".s1-panel", "background-color", "black");

  //Set header buttons hover to correct color
  $(".header-bar-btn a").hover(
    function(){
    $(this).css("color", teamMainColors[curr_team]);
  },
    function(){
      $(this).css("color", "white");
    }
  );

  // Set jump-to-bar hover to correct colors
  $(".jump-to-bar a").hover(
    function(){
      $(this).css("color", teamMainColors[curr_team]);
    },
    function(){
      $(this).css("color", "white");
    }
  );
  
  //set background of dropdown menus to correct color
  $(".alt-bg").each(function(){
    $(this).css("background-color", teamMainColors[curr_team]);
  });


  $(".sec-col-drp").css("color", teamSecondColors[curr_team]);
  $(".sec-col").css("color", teamSecondColors[curr_team]);

}

function setDropDowns(curr_team, team_season_data, team_game_data){

  let all_teams_against = [];

  // BIG NOTE: WHEN TEAMS ARE SIGNED UP FOR MULTIPLE SEASONS THIS NEEDS TO CHANGE!!
  for(let i = 0; i < team_game_data.length; i++){
    all_teams_against.push(team_game_data[i][1]);
  }

  console.log("Teams against", all_teams_against);
  let len_all_teams_against = all_teams_against.length;

  for(let i = 0; i < len_all_teams_against; i++){
    //Access DB to get correct game data
    let str_1 = "<li class='alt-bg drp-option'><a href='#dropdown-container-id-1'>vs ";
    let str_2 = all_teams_against[i].toString();
    let str_3 = " | Week ";
    let str_4 = (len_all_teams_against - i).toString();
    let str_5 = "</a></li>";

    let final_str = str_1.concat(str_2, str_3, str_4, str_5);
    $("#select-match-dropdown").append(final_str);
  }

  $(".drp-option").css("background-color", teamMainColors[curr_team]);
  $(".drp-option a").css("color", teamSecondColors[curr_team]);

  $(".drp-option a").hover(
    function(){
      $(this).css({
        "background-color": teamSecondColors[curr_team],
        "color": teamMainColors[curr_team]
      });
    },
    function(){
      $(this).css({
        "background-color": teamMainColors[curr_team],
        "color": teamSecondColors[curr_team]
      });
    }
  );
}

function realign_game_data(team_game_data){
  let len_data = team_game_data.length;
  for(let i = 0; i < team_game_data.length; i++){
    team_game_data[i][0] = len_data-i;
  }
  console.log("New Data", team_game_data);
  return team_game_data;
}


function get_week_no(txt){
  let strings_arr = txt.split(" ");
  let week_no = parseInt(strings_arr[strings_arr.length-1]);
  return week_no;   
}

function get_team_name(txt){
  let strings_arr = txt.split(" ");
  return strings_arr[1];
}


function get_date(team_game_data, week_no){
  let date = "";
  for (let i = 0; i < team_game_data.length; i++){
    if (team_game_data[i][0] == week_no) {
      date = team_game_data[i][4];
    }
  }
  return date;
}

function get_result(team_game_data, week_no){
  let result = "";
  for (let i = 0; i < team_game_data.length; i++){
    if (team_game_data[i][0] == week_no) {
      result = team_game_data[i][5];
    }
  }
  return result;
}

function get_score(team_game_data, week_no){
  let score_for, score_against;
  for (let i = 0; i < team_game_data.length; i++){
    if (team_game_data[i][0] == week_no) {
      score_for = team_game_data[i][2];
      score_against = team_game_data[i][3];
    }
  }

  let str_1 = "| ";
  let str_2 = score_for.toString();
  let str_3 = " <text class='alt-text'> - </text>";
  let str_4 = score_against.toString();
  let str_5 = "</div>"

  let final_html_str = str_1.concat(str_2, str_3, str_4, str_5);

  return final_html_str;
}

function construct_overview_header_string(curr_team_against, date){
  let str_1 = "Match Centre <text class='alt-text'>|</text> vs ";
  let str_2 = curr_team_against.toString(); 
  let str_3 = "<text class='alt-text'>| </text>";
  let str_4 = date.toString();
  let str_5 = "</text>";

  let final_html_str = str_1.concat(str_2, str_3, str_4, str_5);
  return final_html_str;
}

function get_try_scorers_txt(team_game_event_data, week_no){
  let html_str = "";
  for (let i = 0; i < team_game_event_data.length; i++){
    if(team_game_event_data[i][7] == week_no){
      html_str = team_game_event_data[i][6];
    } 
  }
  return html_str.toString();
}

function get_con_scorers_txt(team_game_event_data, week_no){
  let html_str = "";
  for (let i = 0; i < team_game_event_data.length; i++){
    if(team_game_event_data[i][7] == week_no){
      html_str = team_game_event_data[i][4];
    } 
  }
  return html_str.toString();
}

function get_pen_scorers_txt(team_game_event_data, week_no){
  let html_str = "";
  for (let i = 0; i < team_game_event_data.length; i++){
    if(team_game_event_data[i][7] == week_no){
      html_str = team_game_event_data[i][5];
    } 
  }
  return html_str.toString();
}


function setMatchOverview(element, curr_team, team_game_data, team_game_event_data){

    let curr_team_against, html_str, week_no, date, result, score, realigned_team_game_data, scorer_text;

    if (element=="default"){

      //Default is the latest game!
      curr_team_against = team_game_data[0][1];
      date = team_game_data[0][4];
      realigned_team_game_data = realign_game_data(team_game_data);
      html_str = construct_overview_header_string(curr_team_against, date);

      $(".def-header").html(html_str);
      $(".alt-text").css("color", teamMainColors[curr_team]);

      //Set result
      result = team_game_data[0][5];
      if (result == "Win"){
        $("#big-result-letter-id").html("W");
        $("#big-result-letter-id").css("color", "var(--green-win)");
      }
      else if (result == "Loss"){
        $("#big-result-letter-id").html("L");
        $("#big-result-letter-id").css("color", "var(--red-lose)");
      }
      else if (result == "Draw"){
        $("#big-result-letter-id").html("D");
        $("#big-result-letter-id").css("color", "var(--massey-yellow)");
      }

      //Set Score
      let latest_game_index = realigned_team_game_data.length;
      score = get_score(realigned_team_game_data, latest_game_index);
      $("#game-score-id").html(score);
      $(".alt-text").css("color", teamMainColors[curr_team]);


      //Set Game Events
      console.log(team_game_event_data);
      scorer_text = get_try_scorers_txt(team_game_event_data, latest_game_index);
      con_text = get_con_scorers_txt(team_game_event_data, latest_game_index);
      pen_text = get_pen_scorers_txt(team_game_event_data, latest_game_index);
      $("#try-scorers").html(scorer_text);
      $("#con-scorers").html(con_text);
      $("#pen-scorers").html(pen_text);
      
    }

    else {
      //Set match overview header and date
      let team_against_string = $(element).text().toString();
      curr_team_against = get_team_name(team_against_string);
      console.log("Current Team Against", curr_team_against);

      realigned_team_game_data = realign_game_data(team_game_data);
      week_no = get_week_no(team_against_string);
      date =  get_date(realigned_team_game_data, week_no);

      html_str = construct_overview_header_string(curr_team_against, date);  
      $(".def-header").html(html_str);
      $(".alt-text").css("color", teamMainColors[curr_team]);


      //Set result
      result = get_result(realigned_team_game_data, week_no);
      if (result == "Win"){
        $("#big-result-letter-id").html("W");
        $("#big-result-letter-id").css("color", "var(--green-win)");
      }
      else if (result == "Loss"){
        $("#big-result-letter-id").html("L");
        $("#big-result-letter-id").css("color", "var(--red-lose)");
      }

      else if (result == "Draw"){
        $("#big-result-letter-id").html("D");
        $("#big-result-letter-id").css("color", "var(--massey-yellow)");
      }

      //Set Score
      score = get_score(team_game_data, week_no);
      $("#game-score-id").html(score);
      $(".alt-text").css("color", teamMainColors[curr_team]);

      //Set Game Events
      console.log(team_game_data);
      console.log(team_game_event_data);
      scorer_text = get_try_scorers_txt(team_game_event_data, week_no);
      con_text = get_con_scorers_txt(team_game_event_data, week_no);
      pen_text = get_pen_scorers_txt(team_game_event_data, week_no);
      $("#try-scorers").html(scorer_text);
      $("#con-scorers").html(con_text);
      $("#pen-scorers").html(pen_text);
    }
}

//Set League Overview elements.
function setLeagueOverview(curr_team){
  createStandingsTries(curr_team);
  createStandingsPoints(curr_team);
  createStandingsTackles(curr_team);
}

function check_league_enabled(curr_team){
  let res;
  if (LeagueEnabled["true"].indexOf(curr_team) != -1){
     res = true;
  }
  else {
    res = false;
  }
  return res;
}

function showGameData(curr_team, team_game_data, team_game_event_data){
  
  setMatchOverview("default", curr_team, team_game_data, team_game_event_data);

  if (check_league_enabled(curr_team)){
    console.log("Gellow");
    setLeagueOverview(curr_team);
  }

  //What happens when we click on a team in the dropdown menu
  $(".drp-option a").click(function(){
    //Set match overview header, result, score etc.,
    setMatchOverview(this, curr_team, team_game_data, team_game_event_data);
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
function displayAC(team, team_table_data, team_season_data, team_game_data, team_stat_data, team_game_event_data){
  //Change theme of site to match team logged in.
  setTheme(team);

  // Update Initial details.(ok for these to not be stored in DB)
  setHeader(team);
  setStandings(team);
  setRecentMatches(team);
  setDropDowns(team, team_season_data, team_game_data);

  //Now, from now on this is where we are accessing DB
  setTeamAverages(team, team_game_data, team_stat_data);
  
  //Draw Graphs
  drawGraphs(team);

  //Show Match Overview and League Overview
  showGameData(team, team_game_data, team_game_event_data);


}







