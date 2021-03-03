/*TESTS*/


//Should return Harbour1stxv
test_league = getLeague("massey1stxv");
test_league_2 = getLeague("rosmini1stxv");
console.log("League: ", test_league);
console.log("League: ", test_league_2);

// Should return true, then false
check_league_1 = check_league_enabled("massey1stxv");
check_league_2 = check_league_enabled("crusadersrugby");
check_league_3 = check_league_enabled("rosmini1stxv");
console.log("Check enabled 1", check_league_1);
console.log("Check enabled 2", check_league_2);
console.log("Check enabled 3", check_league_3);