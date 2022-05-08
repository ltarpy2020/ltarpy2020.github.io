function getData()
{
  let inputs = document.getElementById('look').value;
  
  if (inputs === wedding || Wedding)
  {
    document.getElementById('result').innerHTML = 'Look for Figure 1, 2 or 3';
  }
}
document.getElementById('submit').addEventListener('click', getData);
