function getShape()
{

  var text;
  var sides = prompt("How many sides would you like to enter (3-8)");
  switch(sides)
  {
    case 3:
      alert(text = "triangle");
      break;
    case 4:
      alert(text = "polygon");
      break;
    case 5:
      alert(text = "pentagon");
      break;
    case 6:
      alert(text = "hexagon");
      break;
    case 7:
      alert(text = "heptagon");
      break;
    case 8:
      alert(text = "octogon");
      break;
    default:
      alert(text = "Enter a number 3-8");
      break;
  }
}

  function validateEntry()
  {
    if(isNaN(sides))
    {
      sides = alert("Enter a valid number");
    }

    if (sides % 1 != 0)
    {
      sides = Math.round(sides)
      return sides;
    }
    else if (sides < 0)
    {
      sides = Math.abs(sides)
      return sides;
    }
  }
