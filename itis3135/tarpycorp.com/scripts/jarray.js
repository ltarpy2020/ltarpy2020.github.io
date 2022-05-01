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

function displayed()
{
  for (let i = 0; i < people.length; i++)
  {
    let row = t.insertRow(i);
    let r1 = row.insertCell(0);
    let r2 = row.insertCell(1);
    r1.innerHTML = people[i];
    r2.innerHTML = x[i];
    if (i > 0) 
    {
      t.deleteRow(i - 1);
    }
  }
