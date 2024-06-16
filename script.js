//1

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));


//2

function Counter() {
    this.cnt = 0;
    this.increment = function () {
        this.cnt++;
        return this.cnt;
    }
    this.decrement = function () {
        this.cnt--;
        return this.cnt;
    }

    this.getCnt = function () {
        return this.cnt;
    }
}

function createCounter() {
    return new Counter();
}

var counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.getCnt());


//3

function findElementByClass(element, name) {
    if (element.classList.contains(name)) {
        return element;
    } else {
        for (var i = 0; i < element.children.length; i++) {
            var el = findElementByClass(element.children[i], name)
            if (el != null) {
                return el;
            }
        }
        return null;
    }
}


const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'form-control');
console.log(targetElement);













//function arrayMerge(...arr) {
//    return arr;
//}


//console.log(arrayMerge(...[1, 2, 3, 4, 5], ...[11, 22, 33, 44, 55, 66, 77]));


//const arrayMerge=(arr1, arr2)=> [...arr1, ...arr2];


//console.log(arrayMerge([1, 2, 3, 4, 5],[11, 22, 33, 44, 55, 66, 77]));

//function arrayMergeWithoutDubl(...arr) {
//    return arr.filter((item, index) => {
//        for (var i = 0; i < index; i++) {
//            if (arr[i] == item) {
//                return false;
//            }
//        }
//        return true;
//    });
//}


//const removeDoblicates = (...args) => args.filter((item, index) => args.indexOf(item) === index);


//console.log(arrayMergeWithoutDubl(...[1, 2, 3, 4, 5], ...[11, 22, 1, 33, 44, 3, 55, 66, 77]));

//console.log(removeDoblicates(...[1, 2, 3, 4, 5],...[11, 22, 1, 33, 44, 3, 55, 66, 77]));

//2

//const getEvenNumbers = (arr) => arr.filter((item) => item % 2 === 0);

//console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));



//const calculateAvarege = (arr) => arr.reduce((sum, item) => sum += item) / arr.length;

//console.log(calculateAvarege([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


//const CapitalizeFirstLetter = (str) => str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");


//console.log(CapitalizeFirstLetter("vcbcbc fdfgdff fgfgrfg wwwww rrrrr rrr"));



//3

//function myObj(num) {
//    this.num = num;
//    this.add = function (num) {
//        this.num += num;
//        return this.num;
//    }

//    this.subtract = function (num) {
//        this.num -= num;
//        return this.num;
//    }
//}


//var my_obj = new myObj(10);

//console.log(my_obj);


//console.log(my_obj.add(9));

//console.log(my_obj.subtract(8));


//4






//function getName(name) {
//    return name;
//}

//function createGreatings(func) {
//    return "Hello " + func;
//}

//console.log(createGreatings(getName("John")));



//function summ(num) {
//    var res = num % 10;
//    if (Math.floor(num/10)!= 0) {
//        res += summ(Math.floor(num / 10));
//    }
//    return res;
//}



//console.log("RES "+summ(403253));


























































