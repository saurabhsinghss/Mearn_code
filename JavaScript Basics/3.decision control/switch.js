let day = 4;
if (day == 1) {
  console.log("Monday");
} else if (day == 2) {
  console.log("Tuesday");
}
else if (day == 3) {
  console.log("wednesday");
}
else if (day == 4) {
  console.log("Thursday");
}
else if (day == 5) {
  console.log("Friday");
}
else if (day == 6) {
  console.log("Saturday");
}
else if(day === 7) {
  console.log("Sunday");
}
else {
  console.log("Invalid day");
}
// Using switch case:

let dayNumber=6
switch (dayNumber) {
  case 1: console.log("Monday");
    break;
  case 2: console.log("Tuesday");
    break;
  case 3: console.log("wednesday");
    break;
  case 4: console.log("Thursday");
    break;
  case 5: console.log("Friday");
    break;
  case 6: console.log("Saturday");
    break;
  case 7: console.log("Sunday");
    break;
  default: console.log("Enter valid day number");
    break;
}