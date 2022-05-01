let employees = document.getElementById('ename');
let s = document.getElementById('salary');
let a = document.getElementById('add');
let d = document.getElementById('display');
let t = document.getElementById('tables');

a.addEventListener('click', function()
{
  let people = [];
  let x = [];

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
  document.getElementById('re').innerHTML = people;
  document.getElementById('result').innerHTML = x;
});
