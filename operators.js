let price = 500;
let tax = 0.15; // 15% tax
let deliveryFee = 100;

let totalBill = (price * tax) + price + deliveryFee;
console.log("Total Bill in PKR:", totalBill); 

// 2. ASSIGNMENT OPERATORS
// Shortcuts to update values
let score = 10;
score += 5; // Same as score = score + 5
console.log("Updated Score:", score);

// 3. COMPARISON OPERATORS
// Used for "If/Else" logic (Validation)
let userAge = 20;
let requiredAge = 18;

let canVote = userAge >= requiredAge;
console.log("Is User eligible to vote?", canVote); // Returns true or false

// 4. LOGICAL OPERATORS (The "Thinkers")
// Combining multiple conditions
let hasTicket = true;
let hasIDCard = false;

// AND (&&) - Both must be true
let canEnterExam = hasTicket && hasIDCard; 
console.log("Allowed in Exam Hall?", canEnterExam);

// OR (||) - At least one must be true
let isSunday = true;
let isHoliday = false;
let isSchoolClosed = isSunday || isHoliday;
console.log("Is School Closed today?", isSchoolClosed);

// 5. TERNARY OPERATOR (The Pro Shortcut)
// A mini If/Else in one line
let marks = 85;
let result = (marks >= 80) ? "Scholarship Awarded" : "Regular Admission";
console.log("Academic Status:", result);

// 6. TYPE OPERATOR
console.log("Type of 'totalBill' variable:", typeof totalBill);