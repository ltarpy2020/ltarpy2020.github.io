function funFact()
{
  let x = 0;
  x = Math.floor(Math.random() * 5);
  switch(x)
  {
    case 0:
      document.getElementById('response').innerHTML = "The Panthers were first founded in 1993";
      break;
    case 1:
      document.getElementById('response').innerHTML = "The Charlotte Hornets used to be called the Bobcats";
      break;
    case 2:
      document.getElementById('response').innerHTML = "Chirstian McCaffery was drafted 8th overall back in 2017";
      break;
    case 3:
      document.getElementById('response').innerHTML = "I was at the playoff game back in 2014 when we beat the AZ Cardinals";
      break;
    case 4:
      document.getElementById('response').innerHTML = "I love the NFL, but love college basketball more. NC State is my favorite team";
      break;
  }
}
document.getElementById('fact').addEventListener('click', funFact);

function randoAsHeck()
{
  let x = 0;
  x = Math.floor(Math.random() * 11);
  switch(x)
  {
    case 0:
      document.getElementById('response').innerHTML = "The Cardinals went 11-6 last year";
      break;
    case 1:
      document.getElementById('response').innerHTML = "The Falcons went 7-10 last year";
      break;
    case 2:
      document.getElementById('response').innerHTML = "The Ravens went 8-9 last year";
      break;
    case 3:
      document.getElementById('response').innerHTML = "The Cardinals went 11-6 last year";
      break;
    case 4:
      document.getElementById('response').innerHTML = "The Panthers went 5-12 last year";
      break;
    case 5:
      document.getElementById('response').innerHTML = "The Cowboys went 12-5 last year";
      break;
    case 6:
      document.getElementById('response').innerHTML = "The Jags went 3-14 last year";
      break;
    case 7:
      document.getElementById('response').innerHTML = "The Chiefs went 12-5 last year";
      break;
    case 8:
      document.getElementById('response').innerHTML = "The Rams went 12-5 last year and won the Super Bowl";
      break;
    case 9:
      document.getElementById('response').innerHTML = "The Giants went 4-13 last year";
      break;
    case 10:
      document.getElementById('response').innerHTML = "The Steelers went 9-7-1 last year";
      break;
  }
}
document.getElementById('rando').addEventListener('click', randoAsHeck);

