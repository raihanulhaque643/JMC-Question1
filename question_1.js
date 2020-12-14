// question_1 started_at: 7:10pm, ended_at:8:00pm

// build array from given graph:
let ts = [7, -10, 13, 8, 4, -7.2, -12, -3.7, 3.5, -9.6, 6.5, -1.7, -6.2, 7];

// // test inputs:
// let test_1 = [5.4, 7, 8, 9.4, -5.2, -6, -7, -9, -9];
// let test_2 = [3.2, 7, 8, 9, -3, -6.6, -7.2, -9, -9];
// let test_3 = [1.2, 7.2, 8.4, 9.6, -2, -6, 5, -3, -9];
// let test_4 = [5, -4.6, 8, 9.4, -5, -6, -7, 4.6, -9];
// let test_5 = [7, -8, 9, -5.2, -6.4, -7, -9, -9];
// let test_6 = [5.6, -7, 8.2, 9.4, 5, -6, -7, 9.2, 9];
// let test_7 = [];



// closestToZero function definition:
const closestToZero = (inputArray) => {
    if (inputArray.length) {

        // Do the following if array has items:

            const negativeItems = inputArray.filter((item) => (item < 0));
            const PositiveItems = inputArray.filter((item) => (item > 0));
            const negativeToPositive = negativeItems.map((item) => item * -1); //convert negatives to positives;

            const sortedPositives = PositiveItems.sort((a, b) => {return a - b });
            const sortedNegatives = negativeToPositive.sort((a, b) => {return a - b });

            const smallestPostive = sortedPositives[0];
            const smallestNegative = sortedNegatives[0];

            if( smallestNegative === smallestPostive ) {
                console.log(`Closest to zero: ${smallestPostive}`);
            } else if ( smallestNegative > smallestPostive ) {
                console.log(`Closest to zero: ${smallestPostive}`);
            } else if ( smallestNegative < smallestPostive ) {
                const result = -1 * smallestNegative;
                console.log(`Closest to zero: ${result} `);
            }

        
    } else {
        console.log(inputArray.length)
        return 0;
    }
};  

// call the fucntion closestToZero:
closestToZero(ts);

// To run code: 
// 1. Ensure node is installed
// 2. Navigate to the folder that contains this file from cmd/terminal
// 3. Run: node question_1.js

