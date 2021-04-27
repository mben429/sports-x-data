
//Use this to alter Standings information

const teamRef = {
    "Massey HS": "massey1stxv",
    "Rosmini College" : "rosmini1stxv",
    "Crusaders": "crusadersrugby",
    "Hurricanes": "canesrugby",
    "Toulon": "toulonrugby",
}

const teamInfo = {
    "massey1stxv": [
        ["1.", "Westlake BHS", "6", "6", "0", "0", "6", "189", "52", "30"],
        ["2.","Rosmini College", "6", "5", "1", "0", "5", "214", "44", "25"],
        ["3.","Massey HS", "6", "5", "1", "0", "4", "168", "54", "24"],
        ["4.","Rangitoto", "6", "4", "2", "0", "3", "120", "100", "19"],
        ["5.","Manurewa HS", "6", "4", "2", "0", "2", "102", "74", "18"],
        ["6.","Whangarei BHS", "6", "3", "3", "0", "1", "132", "145", "13"],
        ["7.","Takapuna Grammar", "6", "2", "4", "0", "2", "101", "102", "10"],
        ["8.","Mahurangi College", "6", "2", "4", "0", "1", "86", "169", "9"],
        ["9.","Orewa College", "6", "1", "5", "0", "1", "139", "158", "5"],

    ], 
    "rosmini1stxv": [
        ["1.","Westlake BHS", "6", "6", "0", "0", "6", "189", "52", "30"],
        ["2.","Rosmini College", "6", "5", "1", "0", "5", "214", "44", "25"],
        ["3.","Massey HS", "6", "5", "1", "0", "4", "168", "54", "24"],
        ["4.","Rangitoto", "6", "4", "2", "0", "3", "120", "100", "19"],
        ["5.","Manurewa HS", "6", "4", "2", "0", "2", "102", "74", "18"],
        ["6.","Whangarei BHS", "6", "3", "3", "0", "1", "132", "145", "13"],
        ["7.","Takapuna Grammar", "6", "2", "4", "0", "2", "101", "102", "10"],
        ["8.","Mahurangi College", "6", "2", "4", "0", "1", "86", "169", "9"],
        ["9.","Orewa College", "6", "1", "5", "0", "1", "139", "158", "5"],
    ],
    "crusadersrugby": [
        ["1.","Crusaders", "16", "11", "2", "3", "8", "497", "257", "58"],
        ["2.","Hurricanes", "16", "12", "3", "1", "3", "449", "362", "53"],
        ["3.","Chiefs", "16", "7", "7", "2", "4", "451", "465", "36"],
        ["4.","Highlanders", "16", "6", "7", "3", "36", "441", "392", "36"],
        ["5.","Blues", "16", "5", "10", "1", "8", "347", "369", "30"],
    ],
    "canesrugby": [
        ["1.","Crusaders", "16", "11", "2", "3", "8", "497", "257", "58"],
        ["2.","Hurricanes", "16", "12", "3", "1", "3", "449", "362", "53"],
        ["3.","Chiefs", "16", "7", "7", "2", "4", "451", "465", "36"],
        ["4.","Highlanders", "16", "6", "7", "3", "6", "441", "392", "36"],
        ["5.","Blues", "16", "5", "10", "1", "8", "347", "369", "30"],
    ],
    "toulonrugby": [
        ["1.","Toulouse", "15", "11", "3", "1", "6", "488", "305", "52"],
        ["2.","La Rochelle", "14", "11", "3", "0", "5", "405", "226", "49"],
        ["3.", "Toulon", "14", "9", "5", "0", "6", "366", "285", "42"],
        ["4.", "Racing 92", "14", "9", "5", "0", "6", "382", "296", "42"],
        ["5.","Clermont", "14", "8", "5", "1", "6", "430", "311", "40"],
        ["6.","Bordeaux-Bègles", "15", "8", "6", "1", "5", "394", "334", "39"],
        ["7.","Lyon", "14", "8", "5", "1", "4", "308", "266", "38"],
        ["8.","Stade Français", "14", "7", "7", "0", "6", "380", "332", "34"],
        ["9.","Brive", "15", "7", "8", "0", "3", "312", "402", "30"],
        ["10.", "Castres", "14", "6", "7", "1", "8", "273", "390", "29"],
        ["11.", "Pau", "15", "5", "9", "1", "8", "357", "407", "26"],
        ["12", "Bayonne", "13", "5", "8", "0", "3", "270", "415", "22"],
        ["13.", "Montpellier", "14", "3", "11", "0", "4", "291", "305", "21"],
        ["14.", "Agen", "15", "0", "15", "3", "0", "188", "570", "2"],
    ],
}

const LeagueInfo = {
    "harbour1stxv_league": [
        "massey1stxv", 
        "rosmini1stxv", 
        "orewa1stxv", 
        "rangitoto1stxv",
        "manurewa1stxv", 
        "whangarei1stxv",
        "takagrammar1stxv",
        "mahurangi1stxv",
        "westlake1stxv",
    ]
}

const LeagueInfoTries = {
    "harbour1stxv_league": [
        ["1.", "Jeremy Thompson", "Westlake BHS", "Wing", "8"],
        ["2.", "Simon Johnson", "Massey HS", "Centre", "7"],
        ["3.", "Leon Ma'a", "Westlake BHS", "Wing", "7"],
        ["4.", "Philip Maki", "Rosmini College", "Centre", "6"],
        ["5.", "Keiran Flanders", "Massey HS", "No. 8", "6"],
    ],
}

const LeagueInfoPoints = {
    "harbour1stxv_league": [
        ["1.", "Stephen Coltman", "Westlake BHS", "First-Five", "78"],
        ["2.", "Jim Kahn", "Rangitoto", "Centre", "60"],
        ["3.", "Simon Stanford", "Rosmini College", "First-Five", "59"],
        ["4.", "Marco McDonald", "Massey HS", "First-Five", "55"],
        ["5.", "Liam Stevens", "Manurewa HS", "No. 8", "52"],
    ],
}

const LeagueInfoTackles = {
    "harbour1stxv_league": [
        ["1.", "Simeon Williamson", "Massey HS", "Flanker", "65"],
        ["2.", "Kuli Ma'afa", "Manurewa HS", "Flanker", "60"],
        ["3.", "Keiran Flanders", "Westlake BHS", "No. 8", "55"],
        ["4.", "Tim Jones", "Rosmini College", "Flanker", "53"],
        ["5.", "Peter Fullham", "Rosmini College", "Lock", "52"],
    ],
}

const LeagueInfoTriesTeam = {
    "harbour1stxv_league": [
       ["1.", "Westlake BHS", "40%", "60%", "20"],
       ["2.", "Massey HS", "33%", "66%", "18"],
       ["3.", "Rosmini College", "60%", "40%", "16"],
       ["4.", "Manurewa HS", "50%", "50%", "10"],
       ["5.", "Rangitoto College", "60%", "40%", "8"],
    ],
}

const LeagueInfoTacklesTeam = {
    "harbour1stxv_league": [
       ["1.", "Massey HS", "85%", "620"],
       ["2.", "Rosmini College", "86%", "615"],
       ["3.", "Westlake BHS", "91%", "590"],
       ["4.", "Manurewa College", "79%", "580"],
       ["5.", "Rangitoto College", "75%", "550"],
    ],
}

const LeagueInfoLineBreaksTeam = {
    "harbour1stxv_league": [
        ["1.", "Westlake BHS", "8.5", "51"],
        ["2.", "Rosmini Colllege", "7.6", "49"],
        ["3.", "Massey HS", "7.5", "47"],
        ["4.", "Rangitoto College", "6.5", "37"],
        ["5.", "Manurewa College", "6.1", "34"],
     ],
}

//Change standings size if number of teams exceeds a certain point
function alterStandingsSize(team){
    if (teamInfo[team].length > 11){
        console.log("YO");
        $(".standings-table").css("font-size", "0.6em");
        $(".standings-table th").css("padding", "0.15em");
    }
}

//Functions to create, and update Standings on AC.
function createStandings(team){
    //2d Array here containing all standings info for a team
    let standingsInfo = teamInfo[team];
    for(var i = 0; i < standingsInfo.length; i++){
        let curr_row = standingsInfo[i];
        // Create string to append to <tr>
        let curr_row_str = '';
        for(var j = 0; j < curr_row.length; j++){
            curr_row_str += '<th>' + curr_row[j] + '</th>';
        }
        $("#standings-table-content").append('<tr>' + curr_row_str + '</tr>');
    }

    alterStandingsSize(team);
}

function getLeague(team){
    let league;
    for (key in LeagueInfo){
        let curr_league = LeagueInfo[key];
        if (curr_league.indexOf(team) != -1){
            league = key;
        }
        else {
            league = "N/A";
        }
    }
    return league;
}

//Functions to create, and update Standings on AC.
function createStandingsTries(team){
    setColor("#standings-header-tries", "background-color", team);
    let league = getLeague(team);
    //2d Array here containing all standings info for a team
    let standingsInfo = LeagueInfoTries[league];
    for(var i = 0; i < standingsInfo.length; i++){
        let curr_row = standingsInfo[i];
        // Create string to append to <tr>
        let curr_row_str = '';
        for(var j = 0; j < curr_row.length; j++){
            curr_row_str += '<th>' + curr_row[j] + '</th>';
        }
        $("#top-10-tries-standings-id").append('<tr>' + curr_row_str + '</tr>');
    }
    alterStandingsSize(team);
}

//Functions to create, and update Standings on AC.
function createStandingsPoints(team){
    setColor("#standings-header-points", "background-color", team);
    let league = getLeague(team);
    //2d Array here containing all standings info for a team
    let standingsInfo = LeagueInfoPoints[league];
    for(var i = 0; i < standingsInfo.length; i++){
        let curr_row = standingsInfo[i];
        // Create string to append to <tr>
        let curr_row_str = '';
        for(var j = 0; j < curr_row.length; j++){
            curr_row_str += '<th>' + curr_row[j] + '</th>';
        }
        $("#top-10-points-standings-id").append('<tr>' + curr_row_str + '</tr>');
    }
    alterStandingsSize(team);
}

function createStandingsTackles(team){
    setColor("#standings-header-tackles", "background-color", team);
    let league = getLeague(team);
    //2d Array here containing all standings info for a team
    let standingsInfo = LeagueInfoTackles[league];
    for(var i = 0; i < standingsInfo.length; i++){
        let curr_row = standingsInfo[i];
        // Create string to append to <tr>
        let curr_row_str = '';
        for(var j = 0; j < curr_row.length; j++){
            curr_row_str += '<th>' + curr_row[j] + '</th>';
        }
        $("#top-10-tackles-standings-id").append('<tr>' + curr_row_str + '</tr>');
    }
    alterStandingsSize(team);
}

function createStandingsTeamTries(team){
    setColor("#standings-header-tries-team", "background-color", team);
    let league = getLeague(team);
    //2d Array here containing all standings info for a team
    let standingsInfo = LeagueInfoTriesTeam[league];
    for(var i = 0; i < standingsInfo.length; i++){
        let curr_row = standingsInfo[i];
        // Create string to append to <tr>
        let curr_row_str = '';
        for(var j = 0; j < curr_row.length; j++){
            curr_row_str += '<th>' + curr_row[j] + '</th>';
        }
        $("#top-10-team-tries-standings-id").append('<tr>' + curr_row_str + '</tr>');
    }
    alterStandingsSize(team);

}

function createStandingsTeamTackles(team){
    setColor("#standings-header-tackles-team", "background-color", team);
    let league = getLeague(team);
    //2d Array here containing all standings info for a team
    let standingsInfo = LeagueInfoTacklesTeam[league];
    for(var i = 0; i < standingsInfo.length; i++){
        let curr_row = standingsInfo[i];
        // Create string to append to <tr>
        let curr_row_str = '';
        for(var j = 0; j < curr_row.length; j++){
            curr_row_str += '<th>' + curr_row[j] + '</th>';
        }
        $("#top-10-team-tackles-standings-id").append('<tr>' + curr_row_str + '</tr>');
    }
    alterStandingsSize(team);
}

function createStandingsTeamLineBreaks(team){
    setColor("#standings-header-linebreaks-team", "background-color", team);
    let league = getLeague(team);
    //2d Array here containing all standings info for a team
    let standingsInfo = LeagueInfoLineBreaksTeam[league];
    for(var i = 0; i < standingsInfo.length; i++){
        let curr_row = standingsInfo[i];
        // Create string to append to <tr>
        let curr_row_str = '';
        for(var j = 0; j < curr_row.length; j++){
            curr_row_str += '<th>' + curr_row[j] + '</th>';
        }
        $("#top-10-team-linebreaks-standings-id").append('<tr>' + curr_row_str + '</tr>');
    }
    alterStandingsSize(team);
}








