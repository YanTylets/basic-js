const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

 let obj = {};
 obj.turns = (2 ** disksNumber) - 1;
 obj.seconds = Math.floor((obj.turns * 3600)/turnsSpeed);
 return obj;
 };
};
