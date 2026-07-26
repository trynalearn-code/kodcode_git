export function isEven(n) {
  return n % 2 === 0;
}

// 2. Returns the larger of two numbers
export function max(a, b) {
  return a > b ? a : b;
}

// 3. Calculates the average of an array of numbers
// Throws an error if the array is empty
export function average(numbers) {
  if (numbers.length === 0) {
    throw new Error('Array is empty');
  }

  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}

// 4. Converts a string to Title Case
export function toTitleCase(str) {
  return str
    .split(' ')
    .map(word =>
      word.charAt(0).toUpperCase() +
      word.slice(1).toLowerCase()
    )
    .join(' ');
}

// 5. Returns only the even numbers from an array
export function filterEven(numbers) {
  return numbers.filter(num => num % 2 === 0);
}