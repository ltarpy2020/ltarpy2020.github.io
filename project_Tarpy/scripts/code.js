function getData()
{
	var input = document.getElementById('look').value;
	if (input === "wedding" || "Wedding")
	{
	  	document.getElementById('result').innerHTML = "See Figures 1, 2 and 3 in Photo Gallery Below";
	}
	if (input === "family" || "Family")
	{
		document.getElementById('result').innerHTML = "See Figures 4 and 5 in Photo Gallery Below";
	}
	if (input === "gallery" || "Gallery")
	{
		document.getElementById('result').innerHTML = "See Figures 6 and 7 in Photo Gallery Below";
	}
	if (input === "other" || "Other")
	{
		document.getElementById('result').innerHTML = "See Figures 8 in Photo Gallery Below";
	}
	else
	{
		document.getElementById('result').innerHTML = "Please Enter valid Data";
	}
}
