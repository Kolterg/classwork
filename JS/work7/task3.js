// 3
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст
//    по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті.

const body = document.body;
body.style.display = 'flex';

const some = document.createElement('div');
document.body.appendChild(some);

const h1s = document.getElementsByTagName('h1');
const h1 = h1s[0];
h1.setAttribute('id', 'h');
some.appendChild(h1);

const wrap = document.getElementById('wrap');
some.appendChild(wrap);

const h2 = document.getElementsByTagName('h2');

const content = document.getElementById('content');
content.innerHTML = '<h3>Заголовок</h3>';
content.style.margin = '10px'

const contentList = document.createElement('ol');
content.appendChild(contentList);

const li1 = document.createElement('li');
contentList.appendChild(li1);

const a1 = document.createElement('a');
a1.setAttribute('href', '#h');
a1.innerHTML = h1.textContent;
li1.appendChild(a1);

for (let i = 0; i < h2.length; i++) {
    const li = document.createElement('li');
    contentList.appendChild(li);

    h2[i].setAttribute('id', `h${i}`);

    const a = document.createElement('a');
    a.setAttribute('href', `#h${i}`);
    a.innerHTML = h2[i].textContent;
    li.appendChild(a);
}

