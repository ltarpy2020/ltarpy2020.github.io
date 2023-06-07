//let has global or block scope
//const cannot change
//var has global or function scope

// let a = 10;
// let b = 5;

// if (a > 1)
// {
//     a = a * b
// }
// console.log(a);
// console.log(b);


var a = 10;

function double()
{
    var b = a * 2;
    console.log(b);
}
console.log(a);
double();