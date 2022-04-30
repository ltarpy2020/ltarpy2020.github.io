
function headsOrTails()
{
  let headsOrTails = 0;
  let computer = 0;
  computer = Math.floor(Math.random() * 2);
  headsOrTails = Math.floor(Math.random() * 2);
  if (computer === headsOrTails)
  {
    document.getElementById('result').innerHTML = 'win';
  }
  else if (computer != headsOrTails)
  {
    document.getElementById('result').innerHTML = 'lose';
  }
}
document.getElementById('go').addEventListener('click', headsOrTails);
