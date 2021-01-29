
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
        ["Westlake BHS", "6", "6", "0", "0", "6", "189", "52", "30"],
        ["Rosmini College", "6", "5", "1", "0", "5", "214", "44", "25"],
        ["Massey HS", "6", "5", "1", "0", "4", "168", "54", "24"],
        ["Manurewa HS", "6", "4", "2", "0", "2", "102", "74", "18"],
        ["Whangarei BHS", "6", "3", "3", "0", "1", "132", "145", "13"],
        ["Takapuna Grammar", "6", "2", "4", "0", "2", "101", "102", "10"],
        ["Mahurangi College", "6", "2", "4", "0", "1", "86", "169", "9"],
        ["Orewa College", "6", "1", "5", "0", "1", "139", "158", "5"],

    ], 
    "rosmini1stxv": [
        ["Westlake BHS", "6", "6", "0", "0", "6", "189", "52", "30"],
        ["Rosmini College", "6", "5", "1", "0", "5", "214", "44", "25"],
        ["Massey HS", "6", "5", "1", "0", "4", "168", "54", "24"],
        ["Manurewa HS", "6", "4", "2", "0", "2", "102", "74", "18"],
        ["Whangarei BHS", "6", "3", "3", "0", "1", "132", "145", "13"],
        ["Takapuna Grammar", "6", "2", "4", "0", "2", "101", "102", "10"],
        ["Mahurangi College", "6", "2", "4", "0", "1", "86", "169", "9"],
        ["Orewa College", "6", "1", "5", "0", "1", "139", "158", "5"],
    ],
    "crusadersrugby": [
        ["Crusaders", "16", "11", "2", "3", "8", "497", "257", "58"],
        ["Hurricanes", "16", "12", "3", "1", "3", "449", "362", "53"],
        ["Chiefs", "16", "7", "7", "2", "4", "451", "465", "36"],
        ["Highlanders", "16", "6", "7", "3", "36", "441", "392", "36"],
        ["Blues", "16", "5", "10", "1", "8", "347", "369", "30"],
    ],
    "canesrugby": [
        ["Crusaders", "16", "11", "2", "3", "8", "497", "257", "58"],
        ["Hurricanes", "16", "12", "3", "1", "3", "449", "362", "53"],
        ["Chiefs", "16", "7", "7", "2", "4", "451", "465", "36"],
        ["Highlanders", "16", "6", "7", "3", "6", "441", "392", "36"],
        ["Blues", "16", "5", "10", "1", "8", "347", "369", "30"],
    ],
    "toulonrugby": [
        ["Toulouse", "15", "11", "3", "1", "6", "488", "305", "52"],
        ["La Rochelle", "14", "11", "3", "0", "5", "405", "226", "49"],
        ["Toulon", "14", "9", "5", "0", "6", "366", "285", "42"],
        ["Racing 92", "14", "9", "5", "0", "6", "382", "296", "42"],
        ["Clermont", "14", "8", "5", "1", "6", "430", "311", "40"],
        ["Bordeaux-Bègles", "15", "8", "6", "1", "5", "394", "334", "39"],
        ["Lyon", "14", "8", "5", "1", "4", "308", "266", "38"],
        ["Stade Français", "14", "7", "7", "0", "6", "380", "332", "34"],
        ["Brive", "15", "7", "8", "0", "3", "312", "402", "30"],
        ["Castres", "14", "6", "7", "1", "8", "273", "390", "29"],
        ["Pau", "15", "5", "9", "1", "8", "357", "407", "26"],
        ["Bayonne", "13", "5", "8", "0", "3", "270", "415", "22"],
        ["Montpellier", "14", "3", "11", "0", "4", "291", "305", "21"],
        ["Agen", "15", "0", "15", "3", "0", "188", "570", "2"],
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

function highlightTeam(team){
    return;
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




