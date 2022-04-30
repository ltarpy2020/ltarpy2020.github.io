function headsOrTails()
{
  let doIt = 0;
  let computer = 0;
  computer = Math.floor(Math.random() * 2);
  heads = Math.floor(Math.random() * 2);
  if (computer === doIt)
  {
    document.getElementById('result').innerHTML = 'Do it';
  }
  else if (computer != doIt)
  {
    document.getElementById('result').innerHTML = 'Dont do it';
  }
}
document.getElementById('go').addEventListener('click', headsOrTails);
