// 1
// - Сворити масив нецензцрних слів.
//   Створити інпут текстового типу.
//   Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//   Перевірку робити при натисканні на кнопку

let lay = ['чорт', 'дідько', 'біс', 'падлюка', 'холера', 'трясця', 'покидьок', 'бовдур', 'йолоп', 'бевзень',
    'дурбелик', 'телепень', 'дупа'];

const form1 = document.createElement('form');
document.body.appendChild(form1);

const input1 = document.createElement('input');
input1.setAttribute('type', 'text');
input1.setAttribute('name', 'input1');
form1.appendChild(input1);

const button1 = document.createElement('button');
button1.innerText = 'OK';
form1.appendChild(button1);

button1.onclick = (ev) => {
    ev.preventDefault();
    for (const argument of lay) {
        if (input1.value === argument) {
            alert('Діє заборона на нецензурну лексику');
        }
    }
}

// 2
// - Створити масив нецензцрних слів.
//     Створити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

const form2 = document.createElement('form');
document.body.appendChild(form2);

const input2 = document.createElement('input');
input2.setAttribute('type', 'text');
input2.setAttribute('name', 'input1');
form2.appendChild(input2);

const button2 = document.createElement('button');
button2.innerText = 'OK';
form2.appendChild(button2);

button2.onclick = (ev) => {
    ev.preventDefault();
    for (const argument of lay) {
        if (input2.value.indexOf(argument) !== -1) {
            alert('Діє заборона на нецензурну лексику');
        }
    }
}

// 4
// -- Взяти масив юзерів
// noinspection DuplicatedCode
let usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ

let form4 = document.createElement('form');
document.body.appendChild(form4);

let filterMarr = document.createElement('div');
filterMarr.innerHTML = 'Is Married: false';
form4.appendChild(filterMarr);
let checkboxMarr = document.createElement('input')
checkboxMarr.setAttribute('type', 'checkbox');
checkboxMarr.setAttribute('name', 'checkboxMarr');
filterMarr.appendChild(checkboxMarr);

let filter29 = document.createElement('div');
filter29.innerHTML = 'Older 29';
form4.appendChild(filter29);
let checkbox29 = document.createElement('input');
checkbox29.setAttribute('type', 'checkbox');
checkbox29.setAttribute('name', 'checkbox29');
filter29.appendChild(checkbox29);

let filterKyiv = document.createElement('div');
filterKyiv.innerHTML = 'Live in Kyiv';
form4.appendChild(filterKyiv);
let checkboxKyiv = document.createElement('input');
checkboxKyiv.setAttribute('type', 'checkbox');
checkboxKyiv.setAttribute('name', 'checkboxKyiv');
filterKyiv.appendChild(checkboxKyiv);

const button4 = document.createElement('button');
button4.innerText = 'OK';
form4.appendChild(button4);

button4.onclick = (ev) => {
    ev.preventDefault();
    if (checkboxMarr.checked) {
        usersWithAddress = usersWithAddress.filter(user => user.isMarried === false);
        console.log('No Married')
    }
    if (checkbox29.checked) {
        usersWithAddress = usersWithAddress.filter(user => user.age > 29);
        console.log('Older 29');
    }
    if (checkboxKyiv.checked) {
        usersWithAddress = usersWithAddress.filter(user => user.address.city === 'Kyiv');
        console.log('Live in Kyiv');
    }
    for (const user of usersWithAddress) {
        document.write(`Name: ${user.name}, age: ${user.age}, is married: ${user.isMarried}, lives in ${user.address.city} <br>`);
    }
}