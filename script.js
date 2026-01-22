/***********************
 1️⃣ Function Declaration
***********************/
function sayHello(name) {
  return "Hello " + name;
}
console.log(sayHello("Soukaina"));
sayHello("name");

/***********************
 2️⃣ Function Expression
***********************/
const sayHi = function (name) {
  return "Hi " + name;
};
console.log(sayHi("Sara"));

/***********************
 3️⃣ Arrow Function
***********************/
const sayBye = (name) => {
  return "Bye " + name;
};
console.log(sayBye("Aya"));

/* Arrow function المختصرة */
const add = (a, b) => a + b;
console.log(add(3, 5));

/***********************
 4️⃣ Anonymous Function
***********************/
setTimeout(function () {
  console.log("Anonymous function executed");
}, 1000);

/***********************
 5️⃣ IIFE (Immediately Invoked Function)
***********************/
(function () {
  console.log("IIFE function running");
})();

/***********************
 6️⃣ Callback Function
***********************/
function greet(name, callback) {
  callback(name);
}

greet("Lina", function (name) {
  console.log("Welcome " + name);
});

/***********************
 7️⃣ Function with Default Parameters
***********************/
function multiply(a, b = 2) {
  return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 3));

/***********************
 8️⃣ Rest Parameters Function
***********************/
function sumAll(...numbers) {
  let sum = 0;
  for (let n of numbers) {
    sum += n;
  }
  return sum;
}
console.log(sumAll(1, 2, 3, 4));

/***********************
 9️⃣ Constructor Function
***********************/
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Omar", 22);
console.log(person1);

/***********************
 🔟 Method (Function inside Object)
***********************/
const user = {
  name: "Hajar",
  greet: function () {
    return "Hello, I'm " + this.name;
  },
};
console.log(user.greet());

/***********************
 1️⃣1️⃣ Generator Function
***********************/
function* generatorExample() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorExample();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

/***********************
 1️⃣2️⃣ Async Function
***********************/
async function fetchData() {
  return "Data loaded";
}

fetchData().then((result) => console.log(result));