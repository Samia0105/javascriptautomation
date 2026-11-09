// Snippet A
//Output: Inside :PUN-02
let branchCode = "MUM-01";
if (true) {
  let branchCode = "PUN-02";
  console.log("Inside:", branchCode);
}
console.log("Outside:", branchCode);

// Snippet B
/*Output: Fee before: 250
          Fee after: 250*/
function showServiceFee() {
  console.log("Fee before:", serviceFee);
  var serviceFee = 250;
  console.log("Fee after:", serviceFee);
}
showServiceFee();

//Snippet C
/*Output: Limit with var: 50000*/
function checkLimitWithVar() {
  if (true) {
    var dailyLimit = 50000;
  }
  console.log("Limit with var:", dailyLimit);
}
checkLimitWithVar();

//Snippet D
//output: dailyLimit is not defined error
function checkLimitWithLet() {
  if (true) {
    let dailyLimit = 50000;
  }
  console.log("Limit with let:", dailyLimit);
}
checkLimitWithLet();
