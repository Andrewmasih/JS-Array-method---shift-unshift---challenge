/* The Challenge: 
1/ create an array, oneToFive which contains the values 1 to 5 in increasing order. 2/ Push the number -1 onto the front of the Array and store the return value of the methid you used, the length of the modified array,in a varible 'unshifted'. 3/ Remove the first item from the front of the array and store the return value of the method youy used in a avarible, 'shifted'.

Requirements:
1/ all arrays items must be numbers.
2/ the 'shifted' and 'unshifted' varibles must contain the correct values. */


let oneToFive = [1, 2, 3, 4, 5];

let unshifted = oneToFive.unshift(-1);

let shifted = oneToFive.shift()


console.log(oneToFive);
console.log(unshifted);
console.log(shifted);