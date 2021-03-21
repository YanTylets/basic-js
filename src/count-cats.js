const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    let arr;
    let num = 0;
  for(let i = 0; i < backyard.length; i++) {
    arr = backyard[i];
    for(let j = 0; j < arr.length; j++) {
      if (arr[j] === '^^') {
        num += 1;
      }
    }
  }
  return num;
  };
