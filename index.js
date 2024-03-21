function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log("Sum of [1, 2, 3, 4, 5]:", sum([1, 2, 3, 4, 5]));

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
//function findlongest(strings) {}
//function filterif(strings, length) {}
//function print(n) {}
//function sortage(data) {}
//function filterover50(data) {}
//function maparray(data) {}
//function agesum(data) {}
//function ageavg(data) {}
//function incrementage(object) {}
//function agecopyreturn(object) {}
