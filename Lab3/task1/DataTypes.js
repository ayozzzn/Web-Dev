let str = "Hello";
str.test = 5;
alert(str.test);

let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert(a + b);

alert(6.35.toFixed(20));
alert(1.35.toFixed(20));
alert((6.35*10).toFixed(20));
alert(Math.round(6.35 * 10) / 10);

function readNumber() {
    let num;
    do {
        num = prompt("Enter a number please?", 0);
    } while (!isFinite(num));
    if (num == null || num == '') return null;
    return +num;
}
alert(`Read: ${readNumber()}`);

let i = 0; 
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert(i);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
alert(randomInteger(1, 3));

let newStr = str[0].toUpperCase() + str.slice(1);

function ucFirst() {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
alert(ucFirst("john"));

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
alert(checkSpam('but ViAgRa now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam('inconnect rabbit'));

function truncate(str, maxLength) {
    return (str.length > maxLength) ?
        str.slice(0, maxLength - 1) + '...' : str;
}

function extractCurrencyValue(str) {
    return +str.slice(1);
}

let fruits = ['Apples', 'Pear', 'Orange'];
let shoppingCart = fruits;
shoppingCart.push('Banana');
alert(fruits.length);

let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor((styles.length - 1) / 2)] = 'Classics';
alert(styles.shift());
styles.unshift('Rap, Reggae');

let arr = ['a', 'b'];
arr.push(function() {
    alert(this);
});
arr[2]();

function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt('A number please?', 0);
        if (value == "" || value == null || !isFinite(value)) break;
        number.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
alert(sumInput());

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
}
alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));
alert(getMaxSubSum([1, 2, 3]));
alert(getMaxSubSum([-1, -2, -3]));

function camelize(str) {
    return str
    .split('-')
    .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

function filterRange(array, a, b) {
    return array.filter(item => (a <= item && item <= b));
}
let array = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert(filtered);
alert(array);

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
    }
    if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
    }
}
let massive = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert(arr);

let elements = [5, 2, 1, -10, 8];
elements.sort((a, b) => b - a);
alert(elements);

function copySorted(arr) {
    return arr.slice().sort();
}
let strings = ['HTML', 'JavaScript', 'CSS'];
let sorted = copySorted(strings);
alert(sorted);
alert(sorted);

function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }

      return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
alert( usersMapped[0].id );
alert( usersMapped[0].fullName );

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}
let John = { name: "John", age: 25 };
let Pete = { name: "Pete", age: 30 };
let Mary = { name: "Mary", age: 28 };
let persons = [ pete, john, mary ];
sortByAge(persons);
alert(persons[0].name); 
alert(persons[1].name);
alert(persons[2].name); 

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};
for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
}

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 29 };
let arr1 = [ john, pete, mary ];
alert(getAverageAge(arr1));

function unique(arr) {
    let result = [];
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
}
let names = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert(unique(names)); 

function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
}

function unique(arr) {
    return Array.from(new Set(arr));
}

function aclean(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
    return Object.values(obj);
}
let words = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert(aclean(words));
  
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
alert(keys); 

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
let readMessages = new WeakSet();
readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[0]);
alert("Read message 0: " + readMessages.has(messages[0])); 
messages.shift();

let ms = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];
let readMap = new WeakMap();
readMap.set(ms[0], new Date(2017, 1, 1));

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
    return sum; 
}
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
alert(sumSalaries(salaries)); 

function count(obj) {
    return Object.keys(obj).length;
}

let user = {
    name: "John",
    years: 30
};
let {name, years: age, isAdmin = false} = user;
alert(name); 
alert(age);
alert(isAdmin);

function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
    return maxName;
}

let d1 = new Date(2012, 1, 20, 3, 12);
alert(d1);

let d2 = new Date("2012-02-20T03:12");
alert(d2);

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
  }
let date = new Date(2014, 0, 3); 
alert(getWeekDay(date));

function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) {
      day = 7;
    }
    return day;
}

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
let d = new Date(2015, 0, 2);
alert( getDateAgo(d, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(d, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(d, 365) ); // 2, (2 Jan 2014)

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28

function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today; 
    return Math.round(diff / 1000);
  }
alert(getSecondsToday());

function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }
alert(getSecondsToday());

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1); 
    let diff = tomorrow - now; 
    return Math.round(diff / 1000);
}

function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
    return totalSecondsInADay - totalSecondsToday;
}

function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) { 
      return 'right now';
    }
    let sec = Math.floor(diff / 1000);
    if (sec < 60) {
      return sec + ' sec. ago';
    }
    let min = Math.floor(diff / 60000); 
    if (min < 60) {
      return min + ' min. ago';
    }
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); 
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }
alert(formatDate(new Date(new Date - 1))); // "right now"
alert(formatDate(new Date(new Date - 30 * 1000))); // "30 sec. ago"
alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 min. ago"
// yesterday's date like 31.12.2016 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));
  
let user1 = {
    name: "John Smith",
    age: 35
  };
let users2 = JSON.parse(JSON.stringify(user1));
let room = {
    number: 23
  };
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
room.occupiedBy = meetup;
meetup.self = meetup;
alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));