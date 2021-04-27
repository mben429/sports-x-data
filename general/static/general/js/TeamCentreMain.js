
function showStandings(team){
    //2d Array here containing all standings info for a team
    let stds_info = tmInfo[team];
    let no_cols = 11;
    console.log("Showing Standings for: ", team);
    console.log("info", stds_info);
    $("#tc-home-main-header").html("Standings<text class='sxd-y'>.</text>");
    
    let table_content = '<table class="tbl"><tr><th>#</th><th>Team</th><th>Played</th>' + 
                        '<th>W</th>' + 
                        '<th>L</th>' + 
                        '<th>D</th>' + 
                        '<th>PF</th>' + 
                        '<th>PA</th>' + 
                        '<th>Pdiff</th>' + 
                        '<th>BP</th>' + 
                        '<th>Pts</th></tr>';

    for(let i = 0; i < stds_info.length; i++){
        table_content += "<tr>";
        for(let j = 0; j < no_cols; j++){
            table_content += "<td>" + stds_info[i][j] + "</td>";
        }
        table_content += "</tr>";
    }
    table_content += "</table>";

    $("#tc-home-main-content").html(table_content);
}

function getMatchData(game_id) {
    var stats = data["team_stat_data"];
    // Arr to hold stat values for certain game
    let arr = [];
    for(let i = 0; i < stats.length; i++){
        if (stats[i][3] == game_id) {
            arr.push(stats[i]);
        }
    }
    return arr;
}

function setHeader(team_against){
    let team_against_str = tmHeaders[team_against];
    console.log("hi")
    console.log(team_against)
    console.log(team_against_str)
    $(".header-game_against").html(team_against_str);
}


function runMatchCentre(game_id, team_against){

    var games = data["team_game_data"];
    var stats = data["team_stat_data"];        

    console.log("Match Data for Game: " + game_id);
    let match_data = getMatchData(parseInt(game_id));
    console.log(match_data);

    console.log("Games...", games);

    //Extract Away team and set header (game vs ....)
    let tm_against = games[game_id-1][1];
    console.log("team Against", team_against);
    setHeader(tm_against);
}
