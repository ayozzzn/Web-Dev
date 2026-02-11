alert("I'm JavaScript");

let Admin, Name;
Name = "John";
Admin = Name;
alert(Admin);

let OutPlanetName = "Earth";
let CurrentUserName = "John";

const BIRTHDAY = '18.04.1982';
const age = SomeCode(BIRTHDAY);

let PersonName = "Ilya";
alert(` hello ${1}`); // hello 1
alert(` hello ${"PersonName"}`); // hello PersonName
alert(` hello ${PersonName}`) // hello Ilya

let Forename = prompt("What is your name?", "");
alert(Forename);

let a = 1, b = 1;

alert( ++a ); // 2
alert( b++ ); // 1
alert ( a ); // 2
alert ( b ); // 2

let c = 2;
let x = 1 + (c *= 2); // c = 4, x = 5

"" + 1 + 0 // = "10"
"" - 1 + 0 // = - 1
true + false // = 1
6 / "3" // = 2
"2" * "3" // = 6
4 + 5 + "px" // = "9px"
"$" + 4 + 5 //= "$45"
"4" - 2 // = 2
"4px" - 2 // = NaN
"  -9  " + 5 // = " - 9 5 "
"  -9  " - 5 // = - 14
null + 1 // = 1
undefined + 1 // = NaN
" \t \n" - 2 // = -2

let n = +prompt("First number?", 1);
let m = +prompt("Second number?", 2);

5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

if ("0") {
    alert( 'Hello' );
}

let value = prompt('What is the "official" name of JavaScript?')

if (value == 'ECMAScript') {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
}

let number = prompt('Type a number', 0);
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

let result = (a + b < 4) ? 'Below' : 'Over';

let message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings!' :
    (login == '') ? 'No login' :
    '';

alert(null || 2 || undefined); // 2
alert( alert(1) || 2 || alert(3)); // 1, then 2
alert(1 && null && 2); // null
alert( alert(1) && alert(2)); // 1, then undefined
alert(null || 2 && 3 || 4) // 3

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

let UserName = prompt("Who's there?");
if (UserName === 'Admin') {
    let pass = prompt('Password?');
    if (pass === 'TheMaster') {
        alert('Welcome!');
    } else if (pass === '' || pass === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (UserName === '' || UserName === null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}

let i = 3;
while (i) {
    alert(i--);
}

let t = 0;
while (++t < 5) alert(t); // from 1 to 4

let z = 0;
while (z++ < 5) alert(z); // from 1 to 5

for (let i = 0; i < 5; i++) alert(i); // from 0 to 4
for (let i = 0; i < 5; ++i) alert(i); // from 0 to 4

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}

let e = 0;
while (e < 3) {
    alert(`number ${i}`);
    i++;
}

let num;
do {
    num = prompt("Enter a number grreater than 100?", 0);
} while (num <= 100 && num);

let p = 10;
nextPrime:
for (let i = 2; i <= p; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    alert(i);
}

if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert("Okay we support these browsers too");
} else {
    alert("We hope that this page looks ok!");
}

let A = +prompt('A?', '');
switch(A) {
    case 0:
        alert(0);
        break;
    
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2, 3');
        break;
}

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);


