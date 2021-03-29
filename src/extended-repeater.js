const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
str = String(str);
options.addition = String(options.addition);
if (options.separator == undefined) {
  options.separator = '+';
}
if (options.additionSeparator == undefined) {
  options.additionSeparator = '|';
}
if (options.repeatTimes == undefined) {
options.repeatTimes = 1;
}
if (options.additionRepeatTimes == undefined) {
  options.additionRepeatTimes = 1;
  }
let addition = '';
if (options.addition == 'undefined') {
  addition = '';
} else { addition = ((options.addition + options.additionSeparator).repeat(options.additionRepeatTimes)).slice(0, addition.length-options.additionSeparator.length)}
let newStr = '';
newStr = (str + addition +options.separator).repeat(options.repeatTimes).slice(0, newStr.length - options.separator.length);
return newStr;
}
  
