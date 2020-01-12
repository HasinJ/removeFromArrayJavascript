const removeFromArray = function(array) {
  for (let j = 1; j < arguments.length; j++) { //counter variable starts from 1 instead of 0 because argument[0] is an array
    let remove=undefined; //resets variable
    remove = arguments[j];

    for (let i = 0; i < array.length; i++) {
      if (array[i]==remove) { array.splice(i,1);}
    }
  }
    return array;
}

module.exports = removeFromArray
