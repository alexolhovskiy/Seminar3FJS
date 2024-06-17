

//1

class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    
    displayInfo(){
        console.log(`Tiile:${this.title},Author:${this.author},Pages:${this.pages}`);
    }
}

var lib =new Array();
for (var i = 0; i < 10; i++) {
    lib.push(new Book("Title" + i, "Author" + i, i));
}


lib.forEach((book) => book.displayInfo());



//2

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Name:${this.name},Age:${this.age},Grade:${this.grade}`);
    }
}

// Пример использования класса
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();


const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();




//1

//function Person(name,age,gender) {
//    this.name = name;
//    this.age = age;
//    this.gender = gender;
//    this.intriduce = function () {
//        console.log(`My name is ${this.name},I am ${this.age}, I am ${this.gender}`);
//    }

//    this.changeName=function(newName){
//        this.name = newName;
//    }
//}


//let person1 = new Person("John", 24, "male");
//person1.intriduce();
//person1.changeName("Mike");
//person1.intriduce();




//2

//function Animal() {
//    this.name = '';
//    this.eat = function () {
//        console.log(this.name+" eat");
//    }
//}

//function Dog(name) {
//    this.name = name;
//    this.bark = function () {
//        console.log("Gav,Gav");
//    }
//    this.eat;
//}

//var dog =new Dog("Jery");
//var animal = new Animal();
//dog.eat = animal.eat;

//dog.bark();
//dog.eat();



//3

//const calculator = {
//    name: "Calc",
//    mult(a,b) {
//        return ""+this.name+" "+(a*b);
//    },

//    add(a, b) {
//        return "" + this.name + " " +( a + b);
//    },

//    subtract(a, b) {
//        return "" + this.name + " " + (a - b);
//    },

//}

//const stud = {
//    name: "Sasha",

//}

//console.log(calculator.add.call(calculator, 10, 5));
//console.log(calculator.mult.apply(calculator, [3, 5]));
//console.log(calculator.subtract.call(calculator, 33, 7));

//console.log(calculator.add.call(stud, 10, 5));
//console.log(calculator.mult.apply(stud, [3, 5]));
//console.log(calculator.subtract.call(stud, 33, 7));









