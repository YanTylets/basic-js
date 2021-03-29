const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links: [],
  getLength() {
   return this.links.length;
  },
  addLink(value) { if (value === undefined){
    this.links.push(`( )`);
  } else {
  this.links.push(`( ${value} )`);
  }
  return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  removeLink(position){
    if(typeof(position) !== 'number' || position >= this.links.length || !Number.isInteger(position)) throw 'Error'
    this.links.splice(position-1, 1);
    return this;
  },
  finishChain() {
    return this.links.join('~~');
    links=[];
  },
}

module.exports = chainMaker;
