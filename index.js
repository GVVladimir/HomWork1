// задание 1
// let password = String(prompt('Введите пароль: '));
// password = password.toLocaleLowerCase();

// if(password === 'пароль') {
//     console.log ('Пароль введен верно');
// } else {
//     console.log ('Пароль введен неправильно');
// }


// задание 2
// let c = prompt('введите число');
// (c > 0 && c <10) ? console.log ('Верно') : console.log('Неверно');

// задание 3
// let d = prompt('Введите первое число');
// let c = prompt('Введите второе число');

// (d > 100 || c > 100) ? console.log('Верно') : console.log('Неверно');

// задание 4
// let a = '2';
// let b = '3';

//     console.log(Number(a+b));

// задание 5
// let monthNumber = prompt('Введите месяц');
// switch (monthNumber) {
//     case '1':
//     case '2':
//     case '12':
//     console.log('Зима');        
//     break;
//     case '3':
//     case '4':
//     case '5':
//     console.log('Весна');
//     break;
//     case '6':
//     case '7':
//     case '8':
//     console.log('Лето');
//     break;   
//     case '9':
//     case '10':
//     case '11':
//     console.log('весна') ;  
//     default:
//     console.log('Такого месяца нет')
//         break;
// }

// задание 7
// let randomNumber = Number(prompt('Пожалуйста, введите любое число'));
// randomNumber = Number(randomNumber);
// if (isNaN(randomNumber)) {
//     console.log('Нужно ввести число.')
// }
// else if(randomNumber % 2 === 0) {
//     console.log('Число четное!');
// } else {
//     console.log('Нечетное число!')
// }

// задание 8
// let clientOS = prompt('Какая у Вас IOS?');
// let a = 1;
// let b = 0;

// if(clientOS === '1'){
//     console.log('Установите версию приложения для Android по ссылке');
// } else if(clientOS === '0') {
//     console.log('Установите версию приложения для iOS по ссылке');
// } else {
//     console.log('Что то пошло не так');
// }

// задание 9
// let clientOS = prompt('Какая у Вас IOS?');
// const clientDeviceYear = prompt('Кокого года Ваш телефон?');

// if(clientOS === '1'){
//     if(clientDeviceYear < 2015){
//         console.log('Установите облегченную версию приложения для Android по ссылке');
//     }else{
//     console.log('Установите версию приложения для Android по ссылке');
// }
// } else if(clientOS === '0') {
//     if(clientDeviceYear < 2015){
//         console.log('Установите облегченную версию приложения для iOS по ссылке');
//     } else {
//         console.log('Установите версию приложения для iOS по ссылке');
//     } 

// } else {
//     console.log('Что то пошло не так');
// }

// домашка 2.4
//задание 1
// for (let i = 0;i < 2; i++){
//     console.log('привет')
// }
// задание2
// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// задание 3
// let i = 7;

// while (i <=22) {
//     console.log(i);
//     i++;
// }

// задание 4
// let obj = {
//     Коля: 200,
//     Вася: 300,
//     Петя: 400
// }

// for (let key in obj) {
//     console.log(`${key} - зарплата ${obj[key]} долларов.`);
// }

// задание 5
// let i = 1000;
// let sum = 0;
// while (i >= 50) {
//    i = i/2;
//    sum++
// }
// console.log(i);
// console.log(sum);

// задание 6
// let i = prompt('какой сегодня день?');
// if(i === 'пятница'){
// alert('сдать отчет')
// } else {
//     alert('скоро пятница');
// }

// задание 7
// let i = 1;

// while (i <= 31) {
//     alert (`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
//     i += 7;
// }
