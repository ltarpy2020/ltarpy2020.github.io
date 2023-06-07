let employees = document.getElementById('ename');
let s = document.getElementById('salary');
let a = document.getElementById('add');
let d = document.getElementById('display');
let people = [];
let x = [];

a.addEventListener('click', function()
{

  if (employees.value === "" || s.value === "")
  {
    alert("Please enter data into text boxes");
  }
  else if (isNaN(s.value))
  {
    alert("Please enter a number here");
  }
  else if (s.value < 5000)
  {
    alert("Please enter a number greater than 5000");
  }
  else
  {
    people.push(employees);
    x.push(s);
  }
});

d.addEventListener('click', function()
{
const it = people.values();
const j = x.values();

for (let letter of it)
{
  document.getElementById('re').innerHTML = letter;
}
for (let y of j)
{
  document.getElementById('result').innerHTML = j;
}
});
