# wutchara-challenge-18-JS-quizzes

---

REF: https://github.com/zero-to-mastery/coding_challenge-18

---

```javascript
// ------- 1 -------
var result = (function(a) {
  return a*a;
}(5.5));
console.log(result);
5.5*5.5 ==> 30.25

// ------- 2 -------
const b = [1, 2, 3];
const f = (a, ...b) => a + b;

console.log(f(1));
// 1

// ------- 3 -------
let f = (...f) => f;
console.log(f(10));
// [10]

f = (...f) => f.reduce(f => f);
console.log(f(10));
// 10

function ff() {
  return arguments;
}
console.log(ff(10));
// { '0': 10 }

f = f => f;
console.log(f(10));
// 10


// ------- 4 -------
var foo = 10;
bar = 3;
(function () {
  var foo = 2;
  bar = 1;
}())
bar = bar + foo;
console.log(bar);
// 1 + 10 => 11


// ------- 5 -------
var x = 5;

(function () {
    console.log(x);
    var x = 10;
    console.log(x); 
})();
// undefinded
// 10

// ------- 6 -------
(function(){
  var a = b = 3;
})();

console.log(typeof a);
// undefinded
console.log(typeof b);
// 3

// ------- 7 -------
function foo1() {
  return {
    bar: 'bar',
  };
}

function foo2() {
  return
  {
    'bar';
  }
}

console.log(foo1());
// { bar: 'bar' }
console.log(foo2());
// undefinded


// ------- 8 -------
console.log(0.1 + 0.2);
// 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);
// false
console.log(9007199254740993 === 9007199254740992);
// true => over


// ------- 9 -------
const a = {},
    b = {c:'b'},
    c = {b:'c'};

a[b] = 111;
a[c] = 333;


console.log(a[b]);
// 333
// a => { '[object Object]': 333 }


// ------- 10 -------
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
// event queues
// 5
// 5
// 5
// 5
// 5


// ------- 11 -------
console.log(1 < 2 < 2); // true(1) < 2 => true
// true
console.log(3 > 2 > 1); // true(1) > 1 => false
// false

```
