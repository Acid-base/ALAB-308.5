function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log("Sum of [1, 2, 3, 4, 5]:", sum([1, 2, 3, 4, 5]));
//
function average(numbers) {
  if (numbers.length === 0) {
    return 0; // Return 0 if the array is empty to avoid division by zero
  }

  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total / numbers.length;
}
console.log("Average of [1, 2, 3, 4, 5]:", average([1, 2, 3, 4, 5]));
//
function findLongest(strings) {
  let longestString = strings[0]; // Initialize longestString with the first element
  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > longestString.length) {
      longestString = strings[i]; // Update longestString if the current string is longer
    }
  }

  return longestString;
}
console.log("Longest string in array:", findLongest(["red", "green", "blue"]));
//
function filterIf(strings, length) {
  const filteredStrings = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > length) {
      filteredStrings.push(strings[i]);
    }
  }
  return filteredStrings;
}
console.log(
  "Strings over 5 char ['red', 'green', 'blue', 'orange']: ",
  filterIf(["red", "green", "blue", "orange"], 5)
);
//

//function print(n) {}
//function sortage(data) {}
//function filterover50(data) {}
//function maparray(data) {}
//function agesum(data) {}
//function ageavg(data) {}
//function incrementage(object) {}
//function agecopyreturn(object) {}
