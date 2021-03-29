const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(reverse) {
    this.reverse = true;
    if (reverse === false) {
      this.reverse = false;
    }
  }


  encrypt(message, key) {
    if (arguments.length < 2) throw new Error;

    let messArr = message.toLowerCase().split('');

    let AlphaArr = messArr.filter(el => el.match(/[a-z]/));
    let AlphaStr = AlphaArr.join('');

    let keyAlphaArrShort = [];
    let keyLow = key.toLowerCase();
    for (let i = 0; i < AlphaArr.length; i++) {
      keyAlphaArrShort.push(keyLow[i % keyLow.length]);
    }
    let keyAlphaStrShort = keyAlphaArrShort.join('');

    let numAlpha = [];
    for (let j = 0; j < AlphaStr.length; j++) {
      numAlpha.push(AlphaStr.charCodeAt(j) - 97);
    }

    let numKey = [];
    for (let a = 0; a < keyAlphaStrShort.length; a++) {
      numKey.push(keyAlphaStrShort.charCodeAt(a) - 97);
    }

    let numСipher = [];
    for (let b = 0; b < numAlpha.length; b++) {
      if ((numAlpha[b] + numKey[b]) >= 26) {
        numСipher.push(numAlpha[b] + numKey[b] - 26);
      } else {
        numСipher.push(numAlpha[b] + numKey[b]);
      }
    }

    let cipher = [];
    for (let c = 0; c < numСipher.length; c++) {
      cipher.push(String.fromCharCode(numСipher[c] + 97));
    }

    let result = [];
    let count = 0;
    for (let d = 0; d < messArr.length; d++) {
      if (!messArr[d].match(/[a-z]/)) {
        result.push(messArr[d]);
        count++;
      } else {
        result.push(cipher[d - count]);
      }
    }

    if (!this.reverse) result.reverse();
    return result.join('').toUpperCase();
  }


  decrypt(encryptedMessage, key) {
    if (arguments.length < 2) throw new Error;

    let encryptedMessageArr = encryptedMessage.toLowerCase().split('');

    let cipherArr = encryptedMessageArr.filter(el => el.match(/[a-z]/));
    let cipherStr = cipherArr.join('');

    let keyAlphaArrShort = [];
    let keyLow = key.toLowerCase();
    for (let i = 0; i < cipherArr.length; i++) {
      keyAlphaArrShort.push(keyLow[i % keyLow.length]);
    }
    let keyAlphaStrShort = keyAlphaArrShort.join('');

    let numCipher = [];
    for (let j = 0; j < cipherStr.length; j++) {
      numCipher.push(cipherStr.charCodeAt(j) - 97);
    }

    let numKey = [];
    for (let a = 0; a < keyAlphaStrShort.length; a++) {
      numKey.push(keyAlphaStrShort.charCodeAt(a) - 97);
    }

    let numStr = [];
    for (let b = 0; b < numCipher.length; b++) {
      if ((numCipher[b] - numKey[b]) < 0) {
        numStr.push(numCipher[b] - numKey[b] + 26);
      } else {
        numStr.push(numCipher[b] - numKey[b]);
      }
    }

    let string = [];
    for (let c = 0; c < numStr.length; c++) {
      string.push(String.fromCharCode(numStr[c] + 97));
    }

    let result = [];
    let count = 0;
    for (let d = 0; d < encryptedMessageArr.length; d++) {
      if (!encryptedMessageArr[d].match(/[a-z]/)) {
        result.push(encryptedMessageArr[d]);
        count++;
      } else {
        result.push(string[d - count]);
      }
    }

    if (!this.reverse) result.reverse();
    return result.join('').toUpperCase();
  }

}

module.exports = VigenereCipheringMachine;
