//Summation
//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//For example:

//summation(2) -> 3
//1 + 2

//summation(8) -> 36
//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
var summation = function(num) {
    let result = 0;
    for(var i = 1; i <= num; i++) {
        return += i;
    }
return result;
}
//After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

//You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

//Write a code that gives out the total amount for different days(d).

function baseCost(days, rate) {
    return days * rate;
}
function discountRate(days) {
    if ( days >= 7 ) {
        return 50;
    }
    else if ( days >= 3 ) {
        return 20;
    }
    else {
        return 0;
    }
}  

function rentalCarCost(days){
    return baseCost(days,40) - discountRate(days);
}