const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
calculateDepth(arr, n=0) {
    let arr1 = arr.flat(n);
    if(!arr1.some(element => Array.isArray(element))) {
      return n+1;
    } else { 
      n++;
      return this.calculateDepth(arr, n);
    }
    }
    };
