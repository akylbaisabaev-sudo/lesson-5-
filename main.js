const numbers = [7, 12, 5, 8, 20];
console.log("Исходный массив:", numbers);

numbers.push(9);
console.log("После добавления в конец:", numbers);

numbers.shift();
console.log("После удаления из начала:", numbers);

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Чётные числа:", evenNumbers);

const multipliedNumbers = numbers.map((number) => number * 5);
console.log("Умноженные на 5:", multipliedNumbers);

const average = numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
console.log("Среднее арифметическое:", average);

numbers.sort((a, b) => a - b);
console.log("Отсортированный по возрастанию:", numbers);

const celebrities = [
  { name: "Taylor Swift", age: 36, role: "singer" },
  { name: "Leonardo DiCaprio", age: 51, role: "actor" },
  { name: "Cristiano Ronaldo", age: 41, role: "footballer" },
  { name: "Lionel Messi", age: 39, role: "footballer" },
  { name: "Keanu Reeves", age: 62, role: "actor" },
  { name: "Beyoncé", age: 45, role: "singer" },
  { name: "Elon Musk", age: 55, role: "businessman" },
  { name: "Dua Lipa", age: 31, role: "singer" },
  { name: "Violet McGraw", age: 16, role: "actress" },
  { name: "Will Smith", age: 58, role: "actor" }
];

const names = celebrities.map((celebrity) => celebrity.name);
console.log("Имена:", names);

const descriptions = celebrities.map((celebrity) => `${celebrity.name} is a ${celebrity.role}`);
console.log("Описания:", descriptions);

const oldest = celebrities.reduce((max, celebrity) => celebrity.age > max.age ? celebrity : max);
const youngest = celebrities.reduce((min, celebrity) => celebrity.age < min.age ? celebrity : min);
console.log("Самый старший:", oldest.name, oldest.age);
console.log("Самый младший:", youngest.name, youngest.age);
console.log("Разница в возрасте:", oldest.age - youngest.age);

const hasMinor = celebrities.some((celebrity) => celebrity.age < 18);
console.log("Есть несовершеннолетний:", hasMinor);

const olderThanTwenty = celebrities.filter((celebrity) => celebrity.age > 20);
console.log("Старше 20 лет:", olderThanTwenty);
