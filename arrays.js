var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candy = "foo"
function addElementToBeginningOfArray(chocolateBars, candy){
  return [candy, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, candy){
  return chocolateBars.unshift(candy)
}
function addElementToEndOfArray(chocolateBars, candy){
  return [...chocolateBars, candy]
}
function destructivelyAddElementToEndOfArray(chocolateBars, candy){
  return chocolateBars.push(candy)
}

var accessElementInArray = [array, index]
