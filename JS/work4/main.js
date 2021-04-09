// 1
// Створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

function funcMinMax() {
    let minNum = arguments[0];
    let maxNum = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxNum) {maxNum = arguments[i]}
        if (arguments[i] < minNum) {minNum = arguments[i]}
    }
    console.log(`Максимальне ${maxNum}`);
    return minNum;
}

// console.log(`Мінімальне ${funcMinMax(23, 43, 543, 231, 43, 23, 123, 123421, 321)}`);

// 2
// Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
// Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// 9. Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів.
// 10. Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів.

let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function keysOrValues(arr) {
    let keys = [];
    let values = [];
    let some = prompt('Keys or Values');
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        if (some === 'Keys') {
            let keyArr = Object.keys(arrElement);
            for (let j = 0; j < keyArr.length; j++) {
                const keyArrElement = keyArr[j];
                keys.push(keyArrElement);
            }
            return keys;
        }
        if (some === 'Values') {
            let valueArr = Object.values(arrElement);
            for (let j = 0; j < valueArr.length; j++) {
                const valueArrElement = valueArr[j];
                values.push(valueArrElement);
            }
            return values;
        }
        console.log('Uncorect');
    }
}

// console.log(keysOrValues(arr));

// 3
// Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1".

let arr1 = [1,2,3,4,5,6];
let i = 2;

function swap(arr, i) {
    let el1 = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = el1;
    return arr;
}

// console.log(swap(arr1, i));

// 4
// Створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100.

let arr2 = [21,33,12,0,2,3,0,11,23,43];

function zeroToEnd(arr) {
    let len = arr.length;
    for (let j = 0; j < len; j++) {
        if (arr[j] === 0) {
            arr.splice(j,1);
            arr.push(0);
        }
    }
    return arr;
}

// console.log(zeroToEnd(arr2));

// 5
// Дано список імен.
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


