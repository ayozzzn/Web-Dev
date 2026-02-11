function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
    alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
    alert(pow(x, n));
}

describe("Raises x to power n", function() {
    it("5 in the power of 1 equals 5", function() {
        assert.equal(pow(5, 1), 5);
    });
    it.only("5 in the power of 2 equals 25", function() {
        assert.equal(pow(5, 2), 25);
    });
    it("5 in the power of 3 equals 125", function() {
        assert.equal(pow(5, 3), 125);
    });
});

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130   
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);

function multiplyNumeric(obj) {
    for (let jey in obj) {
        if (typeof ogj[key] == 'number') {
            obj[key] *= 2;
        }
    }
} 

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user = makeUser();
alert(user.ref().name);

let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();

let obj = {};
function A() {return obj; }
function B() {return obj; }

alert(new A() == new B());

function Calculator() {
    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

let calc = new Calculator();
calc.read();

alert("Sum=", calc.sum());
alert("Mul=", calc.mul());

function Accumulator(staringValue) {
    this.value = staringValue;
    this.read = function() {
        this.value += +prompt('How much to add?', 0);
    };
}

let accum = new Accumulator();
accum.read();
accum.read();
alert(accum.value);