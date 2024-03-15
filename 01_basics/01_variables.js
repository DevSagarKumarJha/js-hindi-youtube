const accountId = 144553;

let accountEmail = "sagar@google.com"

var accountPassword = "1234455"

accountCity = "New Delhi"

let accountState;
/*
Prefer not to use var 
because of issue in block scope and funtional scope
*/

// accountId =2;
accountEmail = "sagar@gmail.com"
accountPassword = "213212121"
accountCity = "Bengaluru"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);