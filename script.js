// THE GOAL OF THIS FUNCTION
// This function accepts a sorted array of integers.
// It should find the first pair where the sum is 0.
// Returns an array that includes both values that sum to zero
// or undefined if pair don't exist.

//1st Solution
// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i],arr[j]];
//             }
//         }
//     }
// }

// 2nd Solution
function sumZero(arr){
    left = 0;
    right = arr.length - 1;
    while (left < right){
        let sum = arr[left] + arr[right];
        if (sum === 0){
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        } else {
            left ++;
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));