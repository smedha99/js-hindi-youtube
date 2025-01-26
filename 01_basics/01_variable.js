const accountId=144553
let accountEmail="hitest@google.com"
var accountPass="12345"
accountCity="jaipur"
let account;
const acc=NULL;

//accountId=2  --->not allowed
accountEmail="hc@gmail.com"
accountPass="35678900"
accountCity="bhopal"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

//console.log(accountId);
console.table([accountEmail,accountId,accountPass,accountCity]);