// ! Strict rules: You may only use what we covered in class: variables, operators, strings, template strings, if / else, switch, ternary, and functions. No arrays, no loops, no objects.

// * Question 1

function describeValue(value) {
  if (value) {
    return typeof value + " | truthy";
  }
  return typeof value + " | falsy";
}

// console.log(describeValue(7));
// console.log(describeValue("hello"));
// console.log(describeValue(""));
// console.log(describeValue(25));
// console.log(describeValue(0));
// console.log(describeValue(true));
// console.log(describeValue(null));
// console.log(describeValue(undefined));
// console.log(describeValue(NaN));
// console.log(describeValue({}));
// console.log(describeValue([]));

// * Question 2

function getDayType(day) {
  switch (day.toLowerCase()) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}

// console.log(getDayType("Friday"));
// console.log(getDayType("SATURDAY"));
// console.log(getDayType("sunday"));
// console.log(getDayType("Monday"));
// console.log(getDayType("tuesday"));
// console.log(getDayType("Wednesday"));
// console.log(getDayType("Thursday"));
// console.log(getDayType("Bandarban"));

// * Question 3

function validateUsername(username) {
  const name = username.toLowerCase();

  if (name.length < 4) return "Too Short";
  if (name.includes(" ")) return "No Space Allowed";
  if (name.includes("admin")) return "Reserved Word";
  return "Available";
}

// console.log(validateUsername(" abcd"));
// console.log(validateUsername("abcd "));
// console.log(validateUsername("   "));
// console.log(validateUsername("    "));
// console.log(validateUsername("ad min"));
// console.log(validateUsername("my admin"));
// console.log(validateUsername("  admin  "));

// * Question 4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;

  if (distance > 2) {
    fare += (distance - 2) * 15;
  }

  fare += waitingMinutes * 2;

  if (isNight) {
    fare *= 1.2;
  }

  return fare;
}

console.log(getCngFare(5, true, 10));
