// задание 1

// let str = 'kjhfuoia';
// str = str.toUpperCase();
// console.log(str);

// задание 2

// const arrStr = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// let search = 'к';

// arrStr.forEach((arrStr) => {
//     if (arrStr.toLowerCase().includes(search.toLowerCase())){
//         console.log(arrStr);
//     };
// });

// задание 3
// let number = 32.58884;

// number = Math.floor(number);
// console.log(number);

// number = Math.ceil(number);
// console.log(number);

// number = Math.round(number);
// console.log(number);

// задание 4

// let arr = [52, 53, 49, 77, 21, 32];
// console.log(arr);

// let minNum = (elem) => elem.reduce((x, y) => Math.min(x, y));
// console.log(minNum(arr));

// let maxNum = (elem) => elem.reduce((x, y) => Math.max(x, y));
// console.log(maxNum(arr));

// let mini = arr[0];
// for ( let i of arr){
//     if (i < mini){
//         mini = i;
//     }
// } console.log(mini);

// let mini = Math.min(...arr);
// console.log(mini);

// задание 5

// let arr = Math.round(Math.random() * 10);
// console.log(arr);

// function num(min, max) {
//     let romNum = min + Math.random() * (max - min)
//     return Math.round(romNum);
// }
// console.log(num(1, 10));

// задание 6

// let a = 15;

// const arr = Array.from({length: a / 2}, () => Math.floor(Math.random() * a + 1));
// console.log(arr);

// Задание 7

// const arr = (min, max) => {
//     let randomNum = Math.random() * (max - min + 1)
//     return Math.round(randomNum);
// }
// console.log(arr(20, 60));

// задание 8

// let currentDate = new Date();
// console.log(currentDate);

// задание 9

// let currentDate = new Date();
// console.log(currentDate)
// currentDate.setDate (73);
// console.log(currentDate);

// задание 10

// Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
// Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
// Время: <часы>:<минуты>:<секунды>
// Время, которое будет выведено, также хранится в объекте Date.

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDay = new Date;
// let toDay = "Сегодня: " + myDay.getDate() + " " + months[myDay.getMonth()] + " " + myDay.getFullYear() + ", " + days[myDay.getDay()] + ' ' 
// + 'Время: ' + myDay.getHours() + ' ' + 'Часов' + ' ' + myDay.getMinutes() + ' ' +  'минут' + ' ' + 'секунд' + ' ' + myDay.getSeconds();

// console.log(toDay)

// задание 11

