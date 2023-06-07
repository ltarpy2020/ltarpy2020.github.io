//functions have parameters
//arrows (=>) does the same thing in const

function sum(a, b)
{
    return a + b
}
console.log(sum(3,4));

//const can call functions

const sumB = function(a, b)
{
    return a + b
}
console.log(sumB(3, 4));

const sumArrow = (a, b) => a + b;
console.log(sumArrow(2,8));