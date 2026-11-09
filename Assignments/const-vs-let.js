"use strict";
const clinicPhNumber = "022-4000-1234";
const maxiPatientPerDay = "40";
let numberOfPatientWaiting = "4";
let currentTokenNumber = "12";
//const clinicCode;   //SyntaxError: Missing initializer in const declaration

console.log("Clinic phone:", clinicPhNumber);
console.log("Max patients per day:", maxiPatientPerDay);
console.log("Patients waiting:", numberOfPatientWaiting);
console.log("Current token:", currentTokenNumber);
console.log("");
console.log("After Update:");
//maxiPatientPerDay = "50"; //TypeError: Assignment to constant variable.
//let numberOfPatientWaiting = "5"; //SyntaxError: Identifier 'numberOfPatientWaiting' has already been declared
numberOfPatientWaiting = "5";
currentTokenNumber = "13";
console.log("Clinic phone:", clinicPhNumber);
console.log("Max patients per day:", maxiPatientPerDay);
console.log("Patients waiting:", numberOfPatientWaiting);
console.log("Current token:", currentTokenNumber);
