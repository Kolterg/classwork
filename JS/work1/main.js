// //1
//
// let str = 'Привет';
// let num = 123;
// let flag = true;
// let txt = 'true';
//
// str = typeof str;
// num = typeof num;
// flag = typeof flag;
// txt = typeof txt;
//
// console.log(str);
// console.log(num);
// console.log(flag);
// console.log(txt);

// //2
//
// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;
//
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// //3
//
// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';

// //4
//
// let height = 23;
// let width = 10;
//
// let s = (height + width)*2;

// //5
//
// let heightC = 10;
// let dC = 4;
// let p = 3.14;
//
// let sC = Math.pow(p*(dC/2), 2);
//
// let v = sC*heightC;

// //6
//
// let n = 3;
// let m = 4;
//
// let k = ((n**2) + (m**2))**(1/2);
//
// console.log(k);

// //7
//
// let str = 'Hello world';
//
// document.write('<h3>' + str + '</h3>');
// alert(str);
// console.log(str);

// //8
//
// alert('Retamoso\nMark\nMaksimovich\nProgramist');

// //9
//
// let str1 = 'Кто ';
// let str2 = 'ты ';
// let str3 = 'такой?';
// let concatenation = str1 + str2 + str3;
//
// document.write('<h1>' + concatenation + '</h1>');

// //10
//
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); // 205
// document.write(str - a + "<br/>"); // 15
// document.write(str * "2" + "<br/>"); // 40
// document.write(str / 2 + "<br/>"); // 10

// //11
//
// parseInt("3.14") // 3
// parseInt("-7.875") // -7
// parseInt("435") // 435
// parseInt("Вася") // NaN

// //12
//
// let str = prompt("Enter something", "ho-ho");
// console.log(str);

// //13
//
// let num1 = prompt('set your number');
// let num2 = prompt('set your number');
//
// num1 = +num1;
// num2 = +num2;
//
// alert(num1 + num2);

// //14
//
// let surname = prompt('set your surname');
// let name = prompt('set your name');
// let age = prompt('set age name');
// let str = 'Доброго вечера ' + name + ' ' + surname + 'мои поздравления что вам ' + age + '!!!'
//
// alert(str);

// //15
//
// let num1 = prompt('set first number');
// let num2 = prompt('set second number');
// let num3 = prompt('set third number');
// let max;
// let mid;
// let min;
//
// if (num1 > num2) {
//     if (num1 > num3) {
//         max = num1;
//     } else max = num3;
// } else if (num2 > num3) {
//     max = num2;
// } else max = num3;
//
// if (num1 < num2) {
//     if (num1 < num3) {
//         min = num1;
//     } else min = num3;
// } else if (num2 < num3) {
//     min = num2;
// } else min = num3;
//
// if (num1 == max) {
//     if (num2 == min) {
//         mid = num3;
//     } else mid = num2;
// } else if (num2 == max) {
//     if (num1 == min) {
//         mid = num3;
//     } else mid = num1;
// } else if (num2 == min) {
//     mid = num1;
// } else mid = num2
//
// console.log(max);
// console.log(mid);
// console.log(min);

// //16
//
// let color = prompt('Какого цветф светофор?');
//
// if (color == 'красный') {
//     alert('стой');
// } else if (color == 'желтый') {
//     alert('подожди');
// } else if (color == 'зеленый') {
//     alert('иди');
// } else alert('делай что хочешь');

//17

let color = prompt('Какого цветф светофор?');
let isRoadClear = confirm('Дорога пуста?')

if ((color == 'красный') && (isRoadClear == false)) {
    alert('стой и жди');
} else if ((color == 'красный') && (isRoadClear == true)) {
    alert('стой всё равно');
} else if ((color == 'желтый') && (isRoadClear == false)) {
    alert('всё равно жди');
} else if ((color == 'желтый') && (isRoadClear == true)) {
    alert('жди');
} else if ((color == 'зеленый') && (isRoadClear == false)) {
    alert('подожди пока нарушители проедут');
} else if ((color == 'зеленый') && (isRoadClear == true)) {
    alert('иди');
} else alert('делай что хочешь');