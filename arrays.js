var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var string = "foo"
function addElementToBeginningOfArray(chocolateBars,string){ 
  return [string,...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars,string){ chocolateBars.unshift(string);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars,string){
  return [...chocolateBars,string]
}
function destructivelyAddElementToEndOfArray(chocolateBars,string){chocolateBars.push(string);
  return chocolateBars;
}
function accessElementInArray(array,index){
  return console.log(chocolateBars[0])
}