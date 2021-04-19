// 2
// Є масив котрий характеризує правила.
// Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html.

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

const content = document.createElement('div');

content.setAttribute('id', 'content');

document.body.appendChild(content);

const h1 = document.createElement('h1');

h1.innerText = 'Правила бойцовского клуба';

document.body.appendChild(h1);

const wrap = document.createElement('div');

wrap.setAttribute('id', 'wrap');

document.body.appendChild(wrap);

for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    const ruleDiv = document.createElement('div');

    ruleDiv.classList.add('rules');
    ruleDiv.classList.add(`rule${i}`);

    wrap.appendChild(ruleDiv);

    const ruleH2 = document.createElement('h2');

    ruleH2.innerHTML = `${rule.title}`;

    ruleDiv.appendChild(ruleH2);

    const ruleP = document.createElement('p');

    ruleP.innerHTML = `${rule.body}`;

    ruleDiv.appendChild(ruleP);
}