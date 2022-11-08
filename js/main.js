const Pi = 3.14;

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
  return a * b;
}

console.log(square(2, 2));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function kolo(r) {
  return Pi * r * r;
}

console.log(kolo(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h, r) {
  return 2 * Pi * 2 * (r + h);
}

console.log(cylinder(2, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
function iter(a) {
  for (let i = 0; i < a.length; i++) {
    const aElement = a[i];
    console.log(aElement);
  }
}

iter([1, 2, 3, 4]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(p) {
  return document.write(`<p>${p}</p>`)
}

paragraph('idiot');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulli(c) {
  return document.write(`<ul>
    <li>${c}</li>
    <li>${c}</li>
    <li>${c}</li>
  </ul>`);
}

ulli('dad');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulli2(c, k) {
  document.write(`<ul>`);
  for (let i = 0; i < k; i++) {
    const cElement = c[i];
    document.write(`<li>${c}</li>`)
  }
  document.write(`</ul>`);
}

ulli2('ccc', 2);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function iter2(a) {
  document.write(`<ul>`);
  for (let i = 0; i < a.length; i++) {
    const aElement = a[i];
    document.write(`<li>${aElement}</li>`);
  }
  document.write(`</ul>`);
}

iter2(['a', true, 2, null]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function block(a) {
  for (let i = 0; i < a.length; i++) {
    const aElement = a[i];
    document.write(`<div>`);
    document.write(`<h1>${aElement.id}</h1>`)
    document.write(`<h3>${aElement.name}</h3>`)
    document.write(`<h4>${aElement.age}</h4>`)
    document.write(`</div>`);
  }
}
block([
  {name: 'vasya', age: 31, id:1},
  {name: 'petya', age: 30, id:2},
  {name: 'kolya', age: 29, id:3},
  {name: 'olya', age: 28, id:4},
  {name: 'max', age: 30, id:5},
  {name: 'anya', age: 31, id:6},
  {name: 'oleg', age: 28, id:7},
  {name: 'andrey', age: 29, id:8},
  {name: 'masha', age: 30, id:9},
  {name: 'olya', age: 31, id:10},
  {name: 'max', age: 31, id:11}]
);
// - створити функцію яка повертає найменьше число з масиву
function min_number(a) {
  let start_number=a[0];
  for (const aElement of a) {
    if (start_number>aElement){
      start_number=aElement;
    }
  }
  return start_number;
}

console.log(min_number([8,2,3,4,5,6,7,8,9]));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sum(a) {
  let summary_element=0;
  for (const aElement of a) {
    summary_element=summary_element+aElement;
  }
  return summary_element;
}

console.log(sum([1,1,1,1,-3]))
