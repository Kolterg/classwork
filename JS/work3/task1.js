// 1
// Напишіть код, який :

// 1_a
// Змінює колір тексту елемнту з ід main_header на назву групи (mon-year).

const mainHeader = document.getElementById('main_header');

mainHeader.style.color = '#580cde';
mainHeader.innerText = 'FEB-2021';

// 1_b
// Робить шириниу елементу ul 400px.

const ulElements = document.getElementsByTagName('ul');

ulElements[0].style.width = '400px';

// 1_c
// Робить шириниу всіх елементів з класом linkList шириною 50%.

const linkList = document.getElementsByClassName('linkList');

for (let i = 0; i < linkList.length; i++) {
    const linkListElement = linkList[i];
    linkListElement.style.width = '50%';
}

// 1_d
// Отримує текст який зберігається в елементі з класом listElement2.

const listElements2 = document.getElementsByClassName('listElement2');
const textListElement2 = listElements2[0].textContent;

// 1_e
// отримує всі елементи li та змінює ім колір фону на сірий

const liElements = document.getElementsByTagName('li');

for (let i = 0; i < liElements.length; i++) {
    const liElement = liElements[i];
    liElement.style.backgroundColor = 'gray';
}

// 1_f
// отримує всі елементи 'a' та додає їм клас anchor.

const aElements = document.getElementsByTagName('a');

for (let i = 0; i < aElements.length; i++) {
    const aElement = aElements[i];
    aElement.classList.add('anchar');
}

// 1_g
// отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів.

for (let i = 0; i < aElements.length; i++) {
    const aElement = aElements[i];
    const textAElement = aElement.textContent;
    if (textAElement === 'link3') {
        aElement.style.fontSize = '40px';
    }
}

// 1_h
// отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a.

for (let i = 0; i < aElements.length; i++) {
    const aElement = aElements[i];
    const textAElement = aElement.textContent;
    aElement.classList.add(`element_${textAElement}`);
}

// 1_i
// отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt().

const subHeader = document.getElementsByClassName('sub-header');
let subHeadBGC = prompt('Set background color for sub-header');

for (let i = 0; i < subHeader.length; i++) {
    const subHeaderElement = subHeader[i];
    subHeaderElement.style.backgroundColor = subHeadBGC;
}

// 1_j
// отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment.
// Колір отримати з prompt().

let subHeaderTC = prompt('Set text color for sub-header');

for (let i = 0; i < subHeader.length; i++) {
    const subHeaderEl = subHeader[i];
    textSubHeaderEl = subHeaderEl.textContent;
    if (textSubHeaderEl === 'content 2 segment') {
        subHeaderEl.style.color = subHeaderTC;
    }
}

// 1_k
// отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt().

const content1s = document.getElementsByClassName('content_1');

content1s[0].innerHTML = prompt('Set text to content_1');

// 1_l
// отримати елементи p та змінити їм padding на 20px.

const pElements = document.getElementsByTagName('p');

for (let i = 0; i < pElements.length; i++) {
    const pElement = pElements[i];
    pElement.style.padding = '20px';
}

// 1_m
// отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year).

const text2s = document.getElementsByClassName('text2');

for (let i = 0; i < text2s.length; i++) {
    const text2 = text2s[i];
    text2.innerText = 'FEB-2021';
}
