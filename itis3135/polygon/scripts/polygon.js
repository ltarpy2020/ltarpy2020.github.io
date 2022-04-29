function getSides()
{
	var num = prompt("We'd like you to enter a number 3-8 to see what polygon you get!");
	var round = Math.round(Math.abs(num));
	
	switch(round)
	{
		case 3:
			alert("This is a triangle");
			break;
		case 4:
			alert("This is a rectangle");
			break;
		case 5:
			alert("This is a pentagon");
			break;
		case 6:
			alert("This is a hexagon");
			break;
		case 7:
			alert("This is a septagon");
			break;
		case 8:
			alert("This is an octgon");
			break;
		default:
			alert("We have an input error. Please enter valid number (3-8)");
			getSides();
			break;
	}
}

