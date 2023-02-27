/**
 * Write a function printTime
 * 0 hour - midnight
 * 12 hour - noon
 * 53-7 minute - o'clock
 * 8-23 minute - quarter past
 * 24-37 minute - half past
 * 38-52 minute - quarter to
 * @param{number} hour - 0-24 format, hour of a day
 * @param{number} minute - 0-59 format, minute of a day
 * @returns{string} returns a string representation of a time
 */
function printTime(hour, minute) {
  return `${hour}:${minute}`;
}

// Tests:
console.assert(printTime(9, 0) === 'nine o\'clock');
console.assert(printTime(9, 15) === 'quarter past nine');
console.assert(printTime(9, 30) === 'half past nine'); 
console.assert(printTime(9, 45) === 'quarter to ten'); 
console.assert(printTime(21, 45) === 'quarter to ten'); 
console.assert(printTime(0, 7) === 'midnight'); 
console.assert(printTime(11, 53) === 'noon');
console.assert(printTime(12, 8) === 'quarter past twelve'); 
