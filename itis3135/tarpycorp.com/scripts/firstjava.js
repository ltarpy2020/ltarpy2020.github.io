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

function rps()
{
  let user = 0;
  let compute = 0;
  compute = Math.floor(Math.random() * 3);
  user = Math.floor(Math.random() * 3);
  if (user === compute)
  {
    document.getElementById('rocks').innerHTML = 'Its a tie';
  }
  else if (user != compute)
  {
    if (user === 0 && compute === 1)
    {
      document.getElementById('rocks').innerHTML = 'User chooses rock and wins!';
    }
    if (user === 0 && compute === 2)
    {
      document.getElementById('rocks').innerHTML = 'User chooses rock and loses';
    }
    if (user === 1 && compute === 0)
    {
      document.getElementById('rocks').innerHTML = 'User chooses scissor and loses';
    }
    if (user === 1 && compute === 2)
    {
      document.getElementById('rocks').innerHTML = 'User chooses scissor and wins!';
    }
    if (user === 2 && compute === 0)
    {
      document.getElementById('rocks').innerHTML = 'User chooses paper and wins!';
    }
    if (user === 2 && compute === 1)
    {
      document.getElementById('rocks').innerHTML = 'User chooses paper and loses';
    }
  }
  document.getElementById('go').addEventListener('click', rps);
