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
  }
document.getElementById('paper').addEventListener('click', rps);


  var button = document.getElementById("clicker")
  var count = 0;
  button.onclick = function() 
  {
    count += 1;
    button.innerHTML = "Number of Clicks: " + count;
  };

function insulting()
{
  let x = 0;
  x = Math.floor(Math.random() * 5);
  
  switch (x)
  {
    case 0:
      document.getElementById('insulter').innerHTML = 'Youre football team is trash';
      break;
    case 1:
      document.getElementById('insulter').innerHTML = 'You need a new shirt';
      break;
    case 2:
      document.getElementById('insulter').innerHTML = 'Stop playing too many video games';
      break;
    case 3:
      document.getElementById('insulter').innerHTML = 'Quit sleeping in';
      break;
    case 4:
      document.getElementById('insulter').innerHTML = 'Youre shoes look weird';
      break;
  }
}
document.getElementById('insult').addEventListener('click', insulting);
