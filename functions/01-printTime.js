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

const hours = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'one',
  14: 'two',
  15: 'three',
  16: 'four',
  17: 'five',
  18: 'six',
  19: 'seven',
  20: 'eight',
  21: 'nine',
  22: 'ten',
  23: 'eleven',
  24: 'twelve',
}
function printTime( hour, minute ) {
  // validation of entered data
  if ( hour > 24 || hour < 0 ) return false;
  if ( minute > 60 || minute < 0 ) return false;

  //time rounding
  let roundedMinute;
  if ( minute > 52 ) {
    roundedMinute = 0;
    hour += 1;
  }
  if ( minute < 8 ) roundedMinute = 0;
  if ( minute > 52 ) roundedMinute = 0;
  if ( minute > 7  && minute < 24 ) roundedMinute = 15;
  if ( minute > 23 && minute < 38 ) roundedMinute = 30;
  if ( minute > 37 && minute < 53 ) roundedMinute = 45;

  //result output
  if ( hour === 24 && roundedMinute === 0 ) return ( 'midnight' );
  if ( hour === 12 && roundedMinute === 0 ) return ( 'noon' );
  if ( roundedMinute === 0 ) return ( hours[hour] + ' o\'clock' );
  if ( roundedMinute === 15 ) return ( 'quarter past ' + hours[hour] );
  if ( roundedMinute === 30 ) return ( 'half past ' + hours[hour] );
  if ( roundedMinute === 45 ) return ( 'quarter to ' + hours[hour + 1] );

  // return `${hour}:${minute}`;
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
