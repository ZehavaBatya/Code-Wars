//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//    4. pushElement(arr)  should push an element to arr, and then return arr
//    5. popElement(arr)   should pop an element from arr, and then return arr

const getLength = array => array.length;

const getFirst = array => array[0];

const getLast = array => array[array.length - 1];

const pushElement = array => array.concat(0);

const popElement = array => array.splice(0, array.length - 1);
