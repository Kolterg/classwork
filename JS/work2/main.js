// // 1
// // Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//
// let arr = ['a', 'b', 'c'];
// let l = arr.length;
//
// for (let i = 1; i <= l; i++) {
//   arr[arr.length] = i
// }
//
// console.log(arr);

// // 2
// // Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//
// let arr = [1,2,3];
// let newArr = [];
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
// }
//
// console.log(newArr);

// // 3
// // Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//
// let arr = [1,2,3];
//
// while (arr.length < 6) {
//     arr[arr.length] = ++arr.length;
// }
//
// console.log(arr);

// // 4
// // Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//
// let arr = [1,2,3];
// let nums = [4,5,6];
//
// for (const num of nums) {
//     arr.unshift(num);
// }
//
// console.log(arr);

// // 5
// // Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift().
//
// let arr = ['js','css','jq'];
//
// console.log(arr.shift());

// // 6
// // Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop().
//
// let arr = ['js','css','jq'];
//
// console.log(arr.pop());

// //7
//
// let arr = [1,2,3,4,5];
//
// arr = arr.slice(3,5);
// console.log(arr);

// //8
//
// let arr = [1,2,3,4,5];
//
// arr = arr.slice(0,2);
// console.log(arr);

// //9
//
// let arr = [1,2,3,4,5];
//
// arr.splice(1,2);
// console.log(arr);

// //10
//
// let arr = [1,2,3,4,5];
//
// arr.splice(3,0,'a','b','c');
// console.log(arr);

// //11
//
// let arr = [1,2,3,4,5];
//
// arr.splice(1,0, 'a', 'b');
// arr.splice(6,0, 'c')
// arr.splice(8,0, 'e')
//
// console.log(arr);

// //12
//
// let nums = [1,2,3,4,5,6,7,8,9,10];
//
// for (const num of nums) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// }

// //13
//
// let nums = [1,2,3,4,5,6,7,8,9,10];
// let nums2 = [];
//
// for (const num of nums) {
//     nums2.push(num);
// }
//
// console.log(nums2);

// //14
//
// let nums = [1,2,3,4,5,6,7,8,9,10];
// let nums2 = [];
//
// for (let i = 0; i < nums.length; i++) {
//     nums2[i] = nums[i];
// }
//
// console.log(nums2);

//====================================================================================================================

// //1
//
// let arr = [2,17,13,6,22,31,45,66,100,-18];

// //1.1
//
// let i = 0;
//
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// //1.2
//
// for (const num of arr) {
//     console.log(num);
// }

// //1.3
//
// let i = 0;
//
// while (i < arr.length) {
//     if (i % 2 > 0) {
//     console.log(arr[i]);
//     }
//     i++;
// }

// //1.4
//
// let len = arr.length;
//
// for (let i = 0; i < len; i++) {
//     if (i % 2 > 0 )
//     console.log(arr[i]);
// }

// //1.5
//
// let i = 0;
//
// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//     }
//     i++;
// }

// //1.6
//
// for (const num of arr) {
//     if (num % 2 === 0 )
//     console.log(num);
// }

// //1.7
//
// let len = arr.length;
//
// for (let i = 0; i < len; i++) {
//     if (arr[i] % 3 === 0) {
//         arr.splice(i,1, 'okten');
//     }
// }
//
// console.log(arr);

// //1.8
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// //1.9.1
//
// let i = arr.length - 1;
//
// while (i >= 0) {
//     console.log(arr[i]);
//     i--;
// }

// //1.9.2
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// //1.9.3
//
// let i = arr.length - 1;
//
// while (i >= 0) {
//     if (i % 2 > 0) {
//     console.log(arr[i]);
//     }
//     i--;
// }

// //1.9.4
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (i % 2 > 0 )
//     console.log(arr[i]);
// }

// //1.9.5
//
// let i = arr.length - 1;
//
// while (i >= 0) {
//     if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//     }
//     i--;
// }

// //1.9.6
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 === 0 )
//     console.log(arr[i]);
// }

// //1.9.7
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 3 === 0) {
//         arr.splice(i,1, 'okten');
//     }
//     console.log(arr[i]);
// }
//
// console.log(arr);

// //1.10.1
//
// let nums = [];
// let num = 1;
//
// while (nums.length < 50) {
//     if (num % 2 === 0) {
//         nums.push(num);
//     }
//     num++;
// }
//
// console.log(nums);

// //1.10.2
//
// let nums = [];
// let num = 1;
//
// while (nums.length < 50) {
//     if (num % 2 > 0) {
//         nums.push(num);
//     }
//     num++;
// }
//
// console.log(nums);

//2 ???

let nums = [];

