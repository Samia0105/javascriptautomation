"use strict";
let headline = "Patient Profile";
let firstName = "Aisha"; // String
let lastName = "Khan"; // String
let patientId = 1001; // Number
let age = 34; // Number
let averageWaitTime = 12.5; // Number
let isActive = true; // Boolean
let hasInsurance = false; // Boolean
let nextAppointment; // not booked yet
let referralNote = null; // deliberately empty

console.log(headline);
console.log("=============================");
console.log("Name:", firstName, lastName);
console.log("Patien ID:", patientId);
console.log("Age:", age);
console.log("Average Wait Time:", averageWaitTime, "min");
console.log("Active:", isActive);
console.log("Has Insurance:", hasInsurance);
console.log("Next Appointment:", nextAppointment);
console.log("Referral Note:", referralNote);
console.log("");
console.log("Type Check:");
console.log("firstname:", typeof firstName);
console.log("lastName:", typeof lastName);
console.log("patientId:", typeof patientId);
console.log("age:", typeof age);
console.log("averageWaitTime:", typeof averageWaitTime);
console.log("isActive:", typeof isActive);
console.log("hasInsurance:", typeof hasInsurance);
console.log("nextAppointment:", typeof nextAppointment);
console.log("referralNote:", typeof referralNote);
age = "Thirty Four";
console.log("");
console.log("After reassigning age to a string:");
console.log("typeof age:", typeof age);
