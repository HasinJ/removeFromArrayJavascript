const removeFromArray = function(array,remove) {
  for (let i = 1; i < array.length; i++) {
    if (array[i]==remove) {
      array.splice(i,1);
    }
  }
  return array;
}

module.exports = removeFromArray
