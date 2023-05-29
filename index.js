// задание 1
// let minNumber = (a, b) => {
//     if (a > b){
//         console.log(b);
//     } else {
//         console.log(a)
//     }
   // }; 
//  minNumber(4, 5);

// задание 2
// const num = (a) => a % 2 === 0 ? console.log('Число четное') : console.log('Число нечетное');
// num(2);

// задание 3

// function squareNum(a) {
//     console.log(squareNum(5));
// }
// 

// function squareNum(a) {
    //     return a*a;
// }

// хадание 4

// let userAge = prompt('Сколько вам лет?')

// function hellowUser(userAge) {
//     if(userAge < 0){
//         alert ('Вы ввели неправильное значение');
//     } else if (userAge > 12){
//         alert ('Добро пожаловать!');
//     } else {
//         alert ('Привет друг')
//     }
    
// };
// hellowUser(userAge);

// задание 5

// function twoNum (a, b) {
//     if(isNaN(a, b)){
//         return 'Одно или оба значения не являются числом';
//     } 
//         return a * b;
//     };
  
//  console.log(twoNum('o', 8));

// задание 6

// let cube = prompt('Введите число')

// function cubeNum(a) {
//     if(isNaN(a)){
//         return'Переданный параметр не является числом';
//     } else { 
             
//         return `a в кубе равняется ${Math.pow(a, 3)}`;
        
//     }
// };
// console.log(cubeNum(cube));

// задание 7
// const circle1 = {
//     radius: 1,
//     getArea: function(){
//         console.log(`Радиус circle1 равен ${2 * Math.PI * Math.pow(circle1.radius, 2)}`);
//     },
//     getPerimeter: function(){
//         console.log(`Периметр circle1 равен ${Math.PI * Math.pow(circle1.radius, 2)}`)
//     }
    
// }; 
//         circle1.getArea();
//         circle1.getPerimeter();

//     const circle2 = {
//         radius: 7,
//         getArea: function(){
//             console.log(`Радиус circle2 равен ${2 * Math.PI * Math.pow(circle2.radius, 2)}`);
//         },
//         getPerimeter: function(){
//             console.log(`Периметр circle2 равен ${Math.pow(circle2.radius, 2)}`)
//         }
//     }; 
//         circle2.getArea();;
//         circle2.getPerimeter();


// задание 8
    function timeYear(){
        
        let manth = prompt('Введите номер месяца');

    if (manth == 12 || manth == 1 || manth == 2){
        alert ('Время года зима');    
    } else if ( manth == 3 || manth == 4 || manth == 5){
        alert('Время года Весна');
    } else if (manth == 6 || manth == 7 || manth == 8){
        alert ('Время года Лето');
    } else if (manth == 9 || manth == 10 || manth == 11){
        alert ('Время года Осень');
    } else {
        alert ('Нет такого месяца и времени года...');
    }

}
timeYear();

 


	



 