
function headsOrTails()
{
  let headsOrTails = 0;
  let computer = 0;
  let wins = 0;
  computer = Math.floor(Math.random() * 2);
  headsOrTails = Math.floor(Math.random() * 2);
  if (computer === headsOrTails)
  {
    wins = "win";
  }
  else if (computer != headsOrTails)
  {
    wins = "lose"
  }
}
