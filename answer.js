// ! Strict rules: You may only use what we covered in class: variables, operators, strings, template strings, if / else, switch, ternary, and functions. No arrays, no loops, no objects.

// * Question 1

function describeValue(value) {
  if (value) {
    return typeof value + " | truthy";
  }
  return typeof value + " | falsy";
}

console.log(describeValue(7));
console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));
console.log(describeValue(NaN));
console.log(describeValue({}));
console.log(describeValue([]));
