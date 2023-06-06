// function log(arrItem) {
//     console.log("Элемент массива:", arrItem);
// }

// function each(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i]);
//   }

// } 
// each(["Глеб", "Олег", "Татьяна", "Платон"], log)

// const timer = (deadline) => {
// };

// const timer = (deadline) => {
//     if (isNaN(+deadline)) { // + − приводим значение к number, если это NaN,
//         console.log('Передано некорректное число'); // выводим сообщение
//         return; // выходим из функции
//     }

//     let time = deadline;
//     console.log(time);
//   const interval = setInterval(() => {
//        console.log(deadline);
//     }, 1000);

//     setInterval(() => {
//         clearInterval(interval);
//         console.log('Время истекло!')
//     }, 1000);
// };

// const deadline = prompt('На сколько секунд вы хотите поставить таймер?');
// timer(1);

// задание 1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];

//  people.sort(function(a, b) {
//     if(a.age > b.age){
//         return 1;
//     } if (a.age < b.age){
//     return -1
// } 
//  })
//  console.log(people.sort())


// задание 2
// let arr = [3, -4, 1, 9]

//     const ruleFunction = arr.filter((i) => i > 0); 
//     console.log(ruleFunction);
    
//     function isMale() {
//     // писать код тут
//     }
//     function filter() {
//     // писать код тут
//     }
    
    // console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
   
// задание 3
// const timer = (deadline) => {
//     let time = new Date();
  
//    const interval = setInterval(() => {
//         alert (deadline)
//     }, 3000);
//     setInterval(() => {
//       clearInterval(interval); 

//       alert ('30 секунд истекло'); 
//     }, 30000);
// };
// timer(new Date())



// задание 4
// function delayForSecond(callback) {
//    const interval = setInterval(() => {
//        console.log('Привет, Глеб!')
//     }, 2000);
//     setInterval(() => {
//         clearInterval(interval);
//     }, 2000);
//   callback();
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// });


// задание 5

// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) {cb();}
//     }, 1000);
// };
// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     setTimeout(() => {
//         console.log(`Привет, ${name}!`); 
//     }, 1500);
//  };

// delayForSecond(sayHi(`Глеб`));
