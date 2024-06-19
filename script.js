




//Задание 1: ""Управление персоналом компании""

//Реализуйте класс Employee(сотрудник), который имеет следующие свойства и методы:

//Свойство name(имя) - строка, имя сотрудника.
//Метод displayInfo() - выводит информацию о сотруднике(имя).
//Реализуйте класс Manager(менеджер), который наследует класс Employee
//и имеет дополнительное свойство и метод:

//Свойство department(отдел) - строка, отдел, в котором работает менеджер.
//Метод displayInfo() - переопределяет метод displayInfo()
//родительского класса и выводит информацию о менеджере(имя и отдел).
//// Пример использования классов
//const employee = new Employee(""John Smith"");
//employee.displayInfo();
//// Вывод:
//// Name: John Smith

//const manager = new Manager(""Jane Doe"", ""Sales"");
//manager.displayInfo();
//// Вывод:
//// Name: Jane Doe
//// Department: Sales


const names = ["Sasha", "Masha", "Piter", "Jackson", "Romul", "Akhmet", "Si", "Inokentiy", "Buba", "Ciao"];
const jobs = ["plumber", "electrician", "programmer", "director", "accountant", "tester", "analyst", "marketer", "cleaner", "driver"];
//const companies = ["Google", "Yandex", "Boeing", "Airbus", "Boston Dynamics", "Umbrella", "Cisco Robotics"];
//const cities = ["New York", "Stanbul", "Paris", "Pikin", "London"];

const departaments = ["salary", "trading", "analisis", "develop"];

class Employee {
    constructor(name,job,salary,experience) {
        this.name = name;
        this.job = job;
        this.salary = salary;
        this.experience = experience;
    }
    displayInfo() {
        console.log(`Name:${this.name}\nJob:${this.job}\nSalary:${this.salary}\nExperience:${this.experience}`);
    }
}


class Manager extends Employee {
    constructor(name, salary, experience, dep) {
        super(name, "manager", salary, experience);
        this.department = dep;
    }
    displayInfo() {
        console.log(`Name:${this.name}\nJob:${this.job}\nSalary:${this.salary}\nExperience:${this.experience}\nDepartment:${this.department}`);
    }
}


var arr = new Array();

for (var i = 0; i < 5; i++) {
    arr.push(new Employee(names[Math.round(Math.random() * (names.length - 1))],
        jobs[Math.round(Math.random() * (jobs.length - 1))],
        Math.round(1+Math.random() * (jobs.length - 1))* 1000,
        Math.round(Math.random() * 10)));
}


arr.forEach((person) => person.displayInfo());
console.log("-------------------------------------------");

for (var i = 0; i < 3; i++) {
    arr.push(new Manager(names[Math.round(Math.random() * (names.length - 1))],
    Math.round(1+Math.random() * (jobs.length - 1))* 1000,
        Math.round(Math.random() * 10),
    departaments[Math.round(Math.random() * (departaments.length - 1))]));
}


arr.forEach((person) => person.displayInfo());

//2 ""Управление списком заказов""

//Реализуйте класс Order(заказ), который имеет следующие свойства и методы:

//Свойство orderNumber(номер заказа) - число, уникальный номер заказа.
//Свойство products(продукты) - массив, содержащий список продуктов в заказе.
//Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
//Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

//// Пример использования класса
//class Product {
//    constructor(name, price) {
//        this.name = name;
//        this.price = price;
//    }
//}

//const order = new Order(12345);

//const product1 = new Product(""Phone"", 500);
//order.addProduct(product1);

//const product2 = new Product(""Headphones"", 100);
//order.addProduct(product2);

//console.log(order.getTotalPrice()); // Вывод: 600

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
}

class Order {
    constructor(num) {
        this.id = num;
        this.products = new Array();
    }

    addProduct(product) {
        this.products.push(product);
    }
    getTotalPrice() {
        var total = 0;
        this.products.forEach((item) => total += item.price);
        return total;
    }
    getAllProducts() {
        this.products.forEach((item) => console.log(`Name:${item.name},Price:${item.price}\n`));
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log("Total Price: "+order.getTotalPrice()); // Вывод: 600
order.getAllProducts();
















//Seminar3
//2

//class Person {
//    constructor(name, age, gender) {
//        this.name = name;
//        this.age = age;
//        this.gender = gender;
//    }
//    introduction() {
//        console.log(`Hello, I am ${this.name}, I am ${this.age} years old`);
//    }
//}


//class Worker extends Person{
//    constructor(name, age, gender, job, company, salary) {
//        super(name, age, gender);
//        this.job = job;
//        this.company = company;
//        this.salary = salary;
//    }
//    introduction() {
//        super.introduction();
//        console.log(`Also I am ${this.job} in ${this.company} company`);
//    }
//}

//class Product {
//    constructor(name,cost) {
//        this.name = name;
//        this.cost = cost;
//    }

//}

//class Option extends Product {
//    constructor(name, cost, id, cnt) {
//        super(name, cost);
//        this.id = id;
//        this.cnt = cnt;
//    }
//}


//class Store {
//    constructor() {
//        this.products = new Array();
//        this.products.push(new Option("Kolbasa", 3, 1, 100));
//        this.products.push(new Option("Vodka", 10, 2, 1000));
//        this.products.push(new Option("Tank", 10000, 3, 10));
//        this.products.push(new Option("Shikoladka", 2, 4, 1000));
//        this.products.push(new Option("Kirpich", 4, 5, 100000));
//        this.products.push(new Option("Balalaika", 15, 6, 50));
//    }

//}

//class ShoppingCard {
//    static commonId = 0;
//    constructor(money) {
//        this.money = money
//        this.id = this.commonId;
//        this.commonId++;
//        this.lastDeposit = 0;
//        this.lastWithdrawal = 0;
//    }
//    putMoney(money) {
//        this.lastDeposit = money;
//        this.money += money;
//    }
//    getMoney(money) {
//        if (this.money >= money) {
//            this.lastWithdrawal = money;
//            this.money -= money;
//            return money;
//        } else {
//            return 0;
//        }
//    }
//    getBalance() {
//        console.log(`Balanse=${this.money}, Last Deposit=${this.lastDeposit},Last Withdrawal=${this.lastWithdrawal}`)
//    }
//}

//class Shop {
//    constructor(){
//        this.store = new Store();
//        this.clients = new Array();
//        this.card = new ShoppingCard(0);
//        this.flag = false;
//    }

//    addClient(castomer) {
//        this.clients.push(castomer);
//    }

//    productRequest(castomer, request) {
        
//        let client = this.clients.find((item) => {
//            if (item.name == castomer.name && item.card.id == castomer.card.id) {
//                return true;
//            }
//            return false;
//        });
//        if (client != undefined) {
//            request.forEach((item) => {
//                let option = this.store.products.find((product) => {
//                    if (product.name == item.name && product.cnt > item.cnt) {
//                        return true;
//                    }
//                    return false;
//                });
//                if (option != undefined) {
//                    item.cost = option.cost;
//                    //item.id = option.id;
//                }
//            });
//        }
//    }

//    sellIt(money) {
//        if (money > 0) {
//            this.card.putMoney(money);
//            this.flag = true;
//        }
//    }

//    giveIt(request) {
//        request.forEach((item) => {
//            var option=this.store.products.find((product) => item.name == product.name);
//            item.id = option.id;
//            option.cnt -= item.cnt;
//        });
//    }
//}

//class Castomer extends Worker{
//    constructor(name, age, gender, job, company, salary) {
//        super(name, age, gender, job, company, salary);
//        this.card = new ShoppingCard(0);
//        this.bag = new Array();
//    }
//    topUpCard(money) {
//        this.card.putMoney(money);
//    }

//    addBag(name, cnt) {
//        this.bag.push(new Option(name, 0, 0, cnt));
//    }

//    buyIt() {
//        var price = 0;
//        this.bag = this.bag.filter((item) => item.cost > 0);
//        this.bag.forEach((item) => price += item.cost * item.cnt);
//        if (price == this.card.getMoney(price)) {
//            return price;
//        }
//        return 0;
//    }
//}

//console.log("init shop");
//const shop = new Shop();
//console.log(shop.store.products);

//console.log("init castomer");
//const castomer = new Castomer("Sasha",40,"male","developer","Google",1000);
//castomer.introduction();
//castomer.topUpCard(1000);
//castomer.card.getBalance();

//shop.addClient(castomer);
//console.log(shop.clients);

//console.log("Castomer Add products");
//castomer.addBag("Balalaika", 300);
//castomer.addBag("Shikoladka", 5);
//castomer.addBag("Kirpich", 3);

//console.log(castomer.bag);

//shop.productRequest(castomer, castomer.bag);

//console.log(castomer.bag);


//console.log("Castomer Buy");
//shop.sellIt(castomer.buyIt());
//castomer.card.getBalance();
//shop.card.getBalance();
//console.log("Shop return");
//shop.giveIt(castomer.bag);
//console.log(castomer.bag);



////1

//class Person {
//    constructor(name, age, gender) {
//        this.name = name;
//        this.age = age;
//        this.gender = gender;
//    }
//    introduction() {
//        console.log(`Hello, I am ${this.name}, I am ${this.age} years old`);
//    }
//}


//class Worker extends Person{
//    constructor(name, age, gender, job,company) {
//        super(name, age, gender);
//        this.job = job;
//        this.company = company;
//    }
//    introduction() {
//        super.introduction();
//        console.log(`Also I am ${this.job} in ${this.company} company`);
//    }
//}


//class Citizen extends Worker{
//    constructor(name, age, gender, job, company, city) {
//        super(name, age, gender, job, company);
//        this.city = city;
//    }

//    introduction(){
//        super.introduction();
//        console.log(`In ${this.city} city`);
//    }
//}




//var person1 = new Citizen("Sasha", 40, "male", "developer","Google", "New York");
//person1.introduction();

//console.log(Object.getPrototypeChain(Citizen));

//console.log(Object.getPrototypeOf(Citizen));
//console.log(Object.getPrototypeOf(Worker));
//console.log(Object.getPrototypeOf(Person));