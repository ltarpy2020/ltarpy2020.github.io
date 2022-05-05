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

