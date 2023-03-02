const test = require('node:test');
const assert = require('node:assert');

const validateInputData = (hour, minute) => {
  if (hour > 24 || hour < 0) {
    throw new Error('hour can not be less than 0 < or > bigger than 24')
  };
  if (minute > 60 || minute < 0) {
    throw new Error('minute can not be less than 0 < or > bigger than 60')
  };
}

const HOURS = [
  /** 0 */ 'twelve',
  /** 1 */ 'one',
  /** 2 */ 'two',
  /** 3 */ 'three',
  /** 4 */ 'four',
  /** 5 */ 'five',
  /** 6 */ 'six',
  /** 7 */ 'seven',
  /** 8 */ 'eight',
  /** 9 */ 'nine',
  /** 10 */ 'ten',
  /** 11 */ 'eleven',
];

const getTextHour = (hour) => {
  const index = hour % 12;
  return HOURS[index];
}

const editedHours = (hour, minute) => {
  if (minute > 37 && minute <= 59) return  hour + 1;
  return hour
}

const QUARTERS = [15, 30, 45, 60, 0];
const roundMinutes = (minute) => {
  if (minute === 23) return 15;
  for (const el of QUARTERS) {
    if (minute >= el - 7 && minute <= el + 7) {
      if(el === 60) return 0;
      return el;
    }
  }
}

const transformTime = (hour, textHour, minute) => {
  if ((hour === 24 && minute === 0) || (hour === 0 && minute === 0)) return 'midnight';
  if (hour === 12 && minute === 0) return 'noon';
  if (minute === 0) return textHour + " o'clock";
  if (minute === 15) return 'quarter past ' + textHour;
  if (minute === 30) return 'half past ' + textHour;
  if (minute === 45) return 'quarter to ' + textHour;
}

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
  validateInputData (hour, minute);
  const roundedMinute = roundMinutes(minute);
  const editedHour = editedHours(hour, minute);
  const textHour = getTextHour(editedHour);

  return transformTime(editedHour, textHour, roundedMinute)
}

// Tests:
test('printTime', () => {
  assert.strictEqual(printTime(9, 0), "nine o'clock");
  assert.strictEqual(printTime(9, 30), 'half past nine');
  assert.strictEqual(printTime(11, 53), 'noon');
  assert.strictEqual(printTime(12, 3), 'noon');
  assert.strictEqual(printTime(9, 15), 'quarter past nine');
  assert.strictEqual(printTime(12, 8), 'quarter past twelve');
  assert.strictEqual(printTime(21, 45), 'quarter to ten');
  assert.strictEqual(printTime(23, 52), 'quarter to twelve');
  assert.strictEqual(printTime(23, 59), 'midnight');
  assert.strictEqual(printTime(0, 7), 'midnight');
});

test('Throw error', () => {
  assert.throws(() => {
    printTime(25,14);
  });
  assert.throws(() => {
    printTime(15,61);
  });
});

//Ich wollte hier noch ein Test füt types schreiben, aber weis noch nicht wie das funktioniert
// test('printTime', () => {
//   assert.strictEqual(printTime('asd', 0), "nine o'clock");
// });
