var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var string = "foo"
function addElementToBeginningOfArray(chocolateBars,string){ 
  return [string,...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolateBars.unshift(string)){
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars,string){
  return [...chocolateBars,string]
}
function destructivelyAddElementToEndOfArray(chocolateBars,chocolateBars.push(string)){
  return chocolateBars
}
