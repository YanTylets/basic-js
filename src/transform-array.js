const CustomError = require("../extensions/custom-error");
module.exports = function transform(arr1) {
  if (!Array.isArray(arr1)) throw 'Error';
  let arr = [...arr1];
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == 'string' ) {
        if (arr[i] == '--discard-next') {
            if ([i] == (arr.length-1)) {
                arr.splice([i], 1)
            } else {
            arr[i+1] = undefined;
            arr.splice([i], 1);
            }
        } else if (arr[i] == '--discard-prev') {
            if (i == 0) {
                arr.splice([i], 1)
            } else {
            arr[i-1] = undefined;
            arr.splice([i], 1);
            }
        } else if (arr[i] == '--double-next') {
            if ([i] == (arr.length-1)) {
                arr.splice([i], 1)
            } else {
            arr.splice([i], 1, arr[i+1])}
        } else if (arr[i] == '--double-prev') {
            if (i == 0) {
                arr.splice([i], 1)
            } else {
            arr.splice([i], 1, arr[i-1])
            }
        }
        i = 0;
}
}
return arr.filter(item => typeof(item) == 'number');
}
