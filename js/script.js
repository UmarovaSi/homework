// let firstName = "Sitora";
// let lastName = "Umarova";
// let dateOfBirth = "19.03.2001";
// let placeOfBirth = "Qarshi";
// let age = 22;
// let weight = 46.5;
// let height = 162.5; 

// console.log("Имя: " + firstName);
// console.log("Фамилия: " + lastName);
// console.log("Дата рождения: " + dateOfBirth);
// console.log("Место рождения: " + placeOfBirth);
// console.log("Возраст: " + age);
// console.log("Вес: " + weight + " кг");
// console.log("Рост: " + height + " см");
// Запрашиваем первое число
// let num1 = +prompt("первое число:");
// let num2 = +prompt("второе число:");
// let sum = num1 + num2;
// alert("Сумма чисел: " + sum);

// let num3 = +prompt("первое число:");
// let num4 = +prompt("второе число:");
// let summa = num3 - num4;
// alert("остаток чисел: " + summa);

// let num5 = +prompt("первое число:");
// let num6 = +prompt("второе число:");
// let summ = num5 / num6;
// alert("остаток чисел: " + summ);



let number = (prompt("Введите число:"));

if (isNaN(number)) {
  console.log("Вы ввели некорректное значение.");
} else {
  if (number % 2 === 0) {
    console.log("Число", number, "является четным.");
  } else {
    console.log("Число", number, "является нечетным.");
  }
}





let monthNumber = parseInt(prompt("Введите цифру месяца (1-12):"));

let monthName, season;

switch (monthNumber) {
  case 1:
    monthName = "Январь";
    season = "Зима";
    break;
  case 2:
    monthName = "Февраль";
    season = "Зима";
    break;
  case 3:
    monthName = "Март";
    season = "Весна";
    break;
  case 4:
    monthName = "Апрель";
    season = "Весна";
    break;
  case 5:
    monthName = "Май";
    season = "Весна";
    break;
  case 6:
    monthName = "Июнь";
    season = "Лето";
    break;
  case 7:
    monthName = "Июль";
    season = "Лето";
    break;
  case 8:
    monthName = "Август";
    season = "Лето";
    break;
  case 9:
    monthName = "Сентябрь";
    season = "Осень";
    break;
  case 10:
    monthName = "Октябрь";
    season = "Осень";
    break;
  case 11:
    monthName = "Ноябрь";
    season = "Осень";
    break;
  case 12:
    monthName = "Декабрь";
    season = "Зима";
    break;
  default:
    monthName = "Неправильный номер месяца";
    season = "Неправильный номер месяца";
    break;
}

console.log("Месяц:", monthName);
console.log("Сезон:", season);








let dayNumber = parseInt(prompt("Введите номер дня недели (1-7):"));

let dayName;

switch (dayNumber) {
    default:
    dayName = "Неправильный день недели";
    break;
  case 1:
    dayName = "Понедельник";
    break;
  case 2:
    dayName = "Вторник";
    break;
  case 3:
    dayName = "Среда";
    break;
  case 4:
    dayName = "Четверг";
    break;
  case 5:
    dayName = "Пятница";
    break;
  case 6:
    dayName = "Суббота";
    break;
  case 7:
    dayName = "Воскресенье";
    break;
}

console.log("День недели:", dayName);






let hour = parseInt(prompt("Введите время (в часах):"));

let greeting;

if (hour >= 0 && hour < 6) {
  greeting = "Доброй ночи";
} else if (hour >= 6 && hour < 12) {
  greeting = "Доброе утро";
} else if (hour >= 12 && hour < 18) {
  greeting = "Добрый день";
} else if (hour >= 18 && hour < 24) {
  greeting = "Добрый вечер";
} else {
  greeting = "Некорректное время";
}

console.log(greeting);
