'use strict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();


// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//               b = prompt('На сколько оцените его?', '').trim();
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             console.log('done');
//             personalMovieDB.movies[a] = b;
//         } else {
//             console.log('error');
//              i--;
//         }
        
//     }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         if (genre === '' || genre == null) {
//             console.log('Вы ввели некорректные данные или не ввели их вовсе');
//             i--;
//         } else {
//             personalMovieDB.genres[i - 1] = genre;
//         }
//     }
// }
// writeYourGenres();

//console.log(personalMovieDB);


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// function secondTask() {
//    for(let i=1;i<11;i++)
//     {
//         if (i%2!=0) {
//             continue;
//         }
//         console.log(i);
//     }  
// }
// let i = 0;

// while ( i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         console.log(i);
//     }   
// }


// const arrayOfNumbers = [];
//     for(let i=5;i<11;i++)
//     {
//         arrayOfNumbers[i-5] = i;
//         console.log(i);
//     } 
//     console.log(arrayOfNumbers);
//     // Не трогаем
//     return arrayOfNumbers;
    
//  let i = 2;

// while (i <= 16) {
//     if (i % 2 !== 0) {
       
//         console.log(i);
//     }  
//      i++;
// }


// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

    
//     for (let j = 0; j < arr.length; j++) {
//         result[j] = arr[j];}
//     console.log(result);
    
//     // Не трогаем
//     return result;
  
// const data = [5, 10, 'Shopping', 20, 'Homework'];

//  for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }
//     console.log(data);

//     return data;

//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 0; i < data.length; i++) {
//         result[i] = data[data.length - 1 - i];
//     }
//     console.log(result);

//     return result;


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result);

// function sayHello(name) {
//     return console.log(`Привет, ${name}!`);
// }

// sayHello('Ksenya');

// let mas = [];
// function returnNeighboringNumbers(number) {
//  for (let i=0; i<3; i++) {
//      mas[0] = number-1; 
//      mas[1] = number; 
//      mas[2] = number+1; 
//  }
//     console.log(mas);
//     return mas;
// }
// returnNeighboringNumbers(5);


// function getMathResult(a, b) {
//     let result = '';
//     if (typeof(b) !== 'number' || b <= 0) {
//         return a;
//     }
//     else {
//     for (let i = 1; i <= b; i++) {
//         if (i === b) {
//             result += `${a * i}`;
//         } else {
//             result += `${a * i}---`;
//         }
//     }
// }
//     console.log(result);
//     return result;
// }
// getMathResult(5, s);

 const length = +prompt('Длина ребра куба:', '');
let result = '';

function volumeCube(length) {
    if (typeof(length) !== 'number' || length <= 0 || !Number.isInteger(length)) {
        return 'При вычислении произошла ошибка';
    }   
    return length * length * length;
}
function areaCube(length) {
    if (typeof(length) !== 'number' || length <= 0 || !Number.isInteger(length)) {
        return 'При вычислении произошла ошибка';
    }
    return 6 * (length * length);
}
console.log(`Объем куба: ${volumeCube(length)}, площадь всей поверхности: ${areaCube(length)}`);

let number = 5;
function getCoupeNumber(number) {
    if (typeof(number) !== 'number' || !Number.isInteger(number)) {
        return 'Ошибка. Проверьте правильность введенного номера места';}
    else if (number <= 0 || number > 36 ) {
        return 'Таких мест в вагоне не существует';}
    
    return Math.ceil(number/4);
    
}
console.log(getCoupeNumber(number));

function getTimeFromMinutes(minutes) {
    if (typeof(minutes) !== 'number' || !Number.isInteger(minutes)) {
        return 'Ошибка. Проверьте правильность введенного количества минут';
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (hours === 0) {
        return `${remainingMinutes} минут`;
    } else if (hours === 1) {
        return `${hours} час ${remainingMinutes} минут`;
    } else if (hours >= 2 && hours <= 4) {
        return `${hours} часа ${remainingMinutes} минут`;
    } else {
        return `${hours} часов ${remainingMinutes} минут`;
    }
}
console.log(getTimeFromMinutes(300));


function findMaxNumber(a, b, c,d) {

    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
        return 0;
    }
    else if (a === undefined || b === undefined || c === undefined || d === undefined) {
        return 0;
    }
    return Math.max(a, b, c, d);
}

console.log(findMaxNumber(1, 2, 3, 4));

let result = '';
function fib(n) {
    if (typeof(n) !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return '';
    }
    if (n <= 1) {
        return '0';
    }
    let result = '0 1';
    let a = 0;
    let b = 1;

    for (let i = 2; i < n; i++) {
       let c = a + b;
        result += ' ' + c;
        a = b;
        b = c;
    }

     return result;
}
console.log(fib(8));