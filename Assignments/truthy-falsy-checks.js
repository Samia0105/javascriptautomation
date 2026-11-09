//1. Given `let complaintReason = "";`, write an if-else that prints `"Complaint on file"` or `"No complaint"` based on truthiness.
let complaintReason = "";
if (complaintReason) {
  console.log("Complaint on file");
} else {
  console.log("No complaint");
}

//2. Given `let appointmentType;` (undefined), use `||` to default it to `"General Consultation"` and print the result.
let appointmentType;
let result = appointmentType || "General Consultation";
console.log("Appointment type:", result);

//3. Given `let symptoms = [];` (an empty array), write the **wrong** check(`if (symptoms)`) and
// show it incorrectly reports "has symptoms." Then write the **correct** check using `.length > 0`.
let symptoms = [];
//wrong check
if (symptoms) {
  console.log("Wrong check on empty array: has symptoms ");
}

//correct check
if (symptoms.length > 0);
{
  console.log("Correct check: No symptoms");
}

//4. Given `let complications = 0;`, write the **wrong** check (`if (complications)`)
//and show it incorrectly reports "no complications" even when the count is a real, valid zero. Then write the **correct** check using `> 0`.

let complications = 0;
if (complications) {
  console.log("Wrong Check:complications");
} else {
  console.log("Wrong Check on 0: No complications");
}

if (complications > 0) {
  console.log("correct check: Complications Exist");
} else {
  console.log("Correct check: 0 Complications Recorded");
}

//Given `let followUpDays = 0;` (0 means "follow up the same day"), default it to `7` using `||` and then using `??`.
// Print both and explain the difference in a comment.
let followUpDays = 0;
let followup = followUpDays || 7;
console.log("Follow-up with ||:", followup, "Days");

followup = followUpDays ?? 7;
console.log("Follow-up with ??:", followup, "Days");
