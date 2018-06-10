/*

TABLE OF CONTENTS
A. Utilities
  1. randomInt function: takes two numbers and returns a random int
  2.

*/


// A. Utilities

// 1. randomInt

function randomInt(min, max) {
  //inclusive on both sides
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
