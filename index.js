
var lastName = prompt('Введите фамилию:');
var firstName = prompt('Введите имя:');
var age = prompt('Введите возраст:');
var sx = confirm('Ваш пол мужской?');
if (sx === true)
  var wmen = "мужской";
else
  wmen = "женский";

var ageInDays = age * 365;
var ageWithFive = (age * 1) + 5;
const menPensionAge = 62;
const womenPensionAge = 57;
if (wmen == "женский" && (age * 1) < womenPensionAge)
  var pensionAge = "нет";
if (wmen == "мужской" && (age * 1) < menPensionAge)
  var pensionAge = "нет";
else
  pensionAge = "да";

alert(`    Ваше фио: ${lastName} ${firstName} 
    Ваш возраст в годах: ${age}
    Ваш возраст в днях: ${ageInDays}
    Ваш пол: ${wmen}
    Через пять лет вам будет: ${ageWithFive}
    Вы на пенсии: ${pensionAge}`);
