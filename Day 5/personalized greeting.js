//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//Use conditionals to return the proper message:
//Case: name equals owner	'Hello boss'
//return: otherwise	'Hello guest'
function greet (name, owner) {
    if (name === owner){
      return 'Hello boss'
    }else
      return 'Hello guest'
  }
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot separating them.
//It should look like this:
//Sam Harris => S.H
//patrick feeney => P.F
function abbrevName(name){
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
