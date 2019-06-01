var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var string = "foo"
function addElementToBeginningOfArray(chocolateBars,foo){ 
  return [foo,...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray()