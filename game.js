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
        } else if (manth == 13){
            alert('Бывает только зарплата')
        } else {
           alert ('Нет такого месяца и времени года...');
        }
    
    };


 
    
    
    
    function wordArr() {

    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    list = (list.sort(() => Math.random() - 0.5));
    alert(list);
    
    let firstWord = prompt ('Чему равнялся первый элемент массива?');
    let lastWord = prompt ('Чему равнялся последний элемент массива?');
    
        
    if (firstWord.toLowerCase() === list[0].toLowerCase() && lastWord.toLowerCase() === list[list.length-1].toLowerCase()){
        alert ('Поздравляю, вы молодец!');
    } else if (firstWord.toLowerCase() === list[0].toLowerCase() || lastWord.toLowerCase() === list[list.length-1].toLowerCase()){
        alert ('Почти получилось')
    } else {
        alert('Попробуй еще раз')
    }
        
    };
