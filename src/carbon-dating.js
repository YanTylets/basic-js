const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string' || Number(sampleActivity) <= 0 || isNaN(sampleActivity) || Number(sampleActivity > MODERN_ACTIVITY) || !isFinite(sampleActivity)) return false;
  let age = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))/(Math.LN2/HALF_LIFE_PERIOD))
  return age;
  };
