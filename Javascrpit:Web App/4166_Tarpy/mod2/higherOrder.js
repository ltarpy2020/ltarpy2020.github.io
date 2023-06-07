//higher order functions takes a function as an argument

function greaterThan(a)
{
    return function(b)
    {
        return b > a;
    }
}
const greaterThan10 = greaterThan(10);
console.log(greaterThan10(5));

const nums = [3, -5, 6, 8, -2, 1];
nums.sort(comp);

function comp(a,b)
{
    return b - a;
}
console.log(nums);