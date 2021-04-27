// USe this to alter, and update REcent Matches information 

const recentMatchesInfo = {
    
    "massey1stxv": [
        "<text style='color: var(--green-win);'>W </text>vs Rangitoto",
        "<text style='color: var(--green-win);'>W </text>vs Rosmini College",
        "<text style='color: var(--red-lose);'>L </text>vs Westlake",
        "<text style='color: var(--green-win);'>W </text>vs Takapuna Grammar",
        "<text style='color: var(--green-win);'>W </text>vs Orewa College"
    ], 
    "rosmini1stxv": [
        "<text style='color: var(--green-win);'>W </text>vs Manurewa HS",
        "<text style='color: var(--red-lose);'>L </text>vs Massey HS",
        "<text style='color: var(--green-win);'>W </text>vs Rangitoto",
        "<text style='color: var(--red-lose);'>L </text>vs Westlake BHS",
        "<text style='color: var(--green-win);'>W </text>vs Whangarei BHS"
    ],
    "crusadersrugby": [
        "<text style='color: var(--green-win);'>W </text>vs Jaguares",
        "<text style='color: var(--green-win);'>W </text>vs Hurricanes",
        "<text style='color: var(--green-win);'>W </text>vs Highlanders",
        "<text style='color: var(--green-win);'>W </text>vs Rebels",
        "<text style='color: var(--green-win);'>L </text>vs Chiefs"
    ],
    "canesrugby": [
        "<text style='color: var(--red-lose);'>L </text>vs Crusaders",
        "<text style='color: var(--green-win);'>W </text>vs Bulls",
        "<text style='color: var(--green-win);'>W </text>vs Blues",
        "<text style='color: var(--green-win);'>W </text>vs Lions",
        "<text style='color: var(--green-win);'>W </text>vs Sharks"
    ],
    "toulonrugby": [
        "<text style='color: var(--red-lose);'>L </text>vs Brive",
        "<text style='color: var(--green-win);'>W </text>vs Stade Francais",
        "<text style='color: var(--green-win);'>W </text>vs Racing 92",
        "<text style='color: var(--green-win);'>L </text>vs Bordeaux Begles",
        "<text style='color: var(--green-win);'>W </text>vs Clermont Auvergne"
    ],
}

const recentMatchesScores = {
    "massey1stxv": [
        "| 23-14",
        "| 22-19",
        "| 14-30",
        "| 29-0",
        "| 54-7",
    ], 
    "rosmini1stxv": [
        "| 32-15",
        "| 19-22",
        "| 18-5",
        "| 30-38",
        "| 42-21",
    ],
    "crusadersrugby": [
        "| 19-3",
        "| 30-26",
        "| 38-14",
        "| 66-0",
        "| 27-40",
    ],
    "canesrugby": [
        "| 26-30",
        "| 35-28",
        "| 29-24",
        "| 37-17",
        "| 30-17",
    ],
    "toulonrugby": [
        "| 23-25",
        "| 35-13",
        "| 29-23",
        "| 18-31",
        "| 27-9",
    ],
}

function createRecentMatches(team){
    
    for(let i = 1; i < 6; i++){
        //Just to index correct pos in MatchesInfo and MatchesScore array (could change all css/html but wont..)
        let j = i-1;
        let id_1st_half_str = "#result-";
        let id_string = id_1st_half_str.concat(i.toString(), "-id");

        $(id_string).html(recentMatchesInfo[team][j]);

        let id_1st_half_str_2 = "#score-";
        let id_string_2 = id_1st_half_str_2.concat(i.toString(), "-id");

        $(id_string_2).html(recentMatchesScores[team][j]);
    }
    // Set color of scores to appropriate color
    setColor(".score", "color", team);
}