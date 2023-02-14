// BINARY SEARCH 


// const array = [23, 323, 23, 3, 32, 323, 45, 56, 78, 90990];
// function binarySearch(arr, target) {
//   let left = 0;
//   let right = array.length - 1;
//   while (left <= right) {
//     let midind = Math.floor((left + right) / 2);
//     console.log(midind);
//     if (arr[midind] === target) {
//       return midind;
//     } else if (target > arr[midind]) {
//       left = midind + 1;
//     } else {
//       right = midind - 1;
//     }
//   }
//   return -1;
// }


// BINARY SEARCH WITH RECURSION

// let arr = [1, 2, 3, 5, 7, 9, 12, 113, 200, 201];

// let left = 0,
//   right = arr.length - 1;
// function binarySearchRecursion(arr, target, left, right) {
//   let middleIndex = Math.ceil((right + left) / 2);

//   if (arr[middleIndex] == target) {
//     return middleIndex;
//   }

//   if (arr[middleIndex] < target) {
//     return binarySearchRecursion(arr, target, middleIndex + 1, right);
//   } else {
//     return binarySearchRecursion(arr, target, left, middleIndex - 1);
//   }
// }

// console.log(binarySearchRecursion(arr, 200, left, right));
