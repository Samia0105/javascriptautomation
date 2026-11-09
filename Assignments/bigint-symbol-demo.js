//Part A - BigInt:
let MAX_SAFE_INTEGER = 9007199254740991;
console.log("max:", MAX_SAFE_INTEGER);
max1 = MAX_SAFE_INTEGER + 1;
console.log("max +  1:", max1);
max2 = MAX_SAFE_INTEGER + 2;
console.log("max + 2:", max2);
max3 = MAX_SAFE_INTEGER + 3;
console.log("max + 3:", max3);
console.log("");
bigmax = 9007199254740991n;
console.log("bigMax", bigmax);
bigmax1 = bigmax + 1n;
console.log("bigMax + 1n: ", bigmax1);
bigmax2 = bigmax + 2n;
console.log("bigMax + 2n: ", bigmax2);
bigmax3 = bigmax + 3n;
console.log("bigMax + 3n: ", bigmax3);
console.log("typeof bigmax:", typeof bigmax);
console.log("");

//Part B - Symbol:
let sym1 = Symbol("labResultId");
let sym2 = Symbol("labResultId");
console.log("sym1 === sym2:", sym1 === sym2);
console.log("typeof sym1:", typeof sym1);
console.log("sym1.description:", sym1.description);
console.log("sym2.description:", sym2.description);
