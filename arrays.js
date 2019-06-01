var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var string = "foo"
function addElementToBeginningOfArray(chocolateBars,string){ 
  return [string,...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars,string){
  return chocolateBars.unshift(string)
}
function addElementToEndOfArray(chocolateBars,string){
  return [...chocolateBars,string]
}
function destructivelyAddElementToEndOfArray(chocolateBars,string){
  return chocolateBars.push(string)
}