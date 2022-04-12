import { useDebugValue, useLayoutEffect } from 'react';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.textContent = 'Удали меня';
    document.body.append(button);
    button.addEventListener('click', () => button.remove());
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let list = document.createElement('ul');
    document.body.append(list);
    arr.forEach((element) => {
        let newrow = document.createElement('li');
        newrow.textContent = element;
        newrow.addEventListener('mouseover', () =>
            newrow.setAttribute('title', element),
        );
        list.append(newrow);
    });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let link = document.createElement('a');
    link.setAttribute('href', 'https://tensor.ru/');
    link.textContent = 'tensor';
    document.body.append(link);
    link.addEventListener(
        'click',
        () => (link.textContent = link.textContent + ' ' + link.href),
    );
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let button = document.createElement('button');
    ul.addEventListener('click', (event) => (event.target.textContent += '!'));
    li.textContent = 'Пункт';
    button.textContent = 'Добавить пункт';
    button.addEventListener('click', () => {
        let element = document.createElement('li');
        element.textContent = 'Пункт';
        ul.append(element);
    });
    ul.append(li);
    document.body.append(ul);
    document.body.append(button);
}
