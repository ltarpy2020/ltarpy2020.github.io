function fn1()
{
	var inputs = document.getElementById('look').value;
  
  if (inputs === "wedding" || inputs === "Wedding")
  {
  	document.getElementById('result').innerHTML = "See Figure 1, 2, and 3 on the Photo Gallery Below";
  }
  else if (inputs === "family" || inputs === "Family")
  {
  	document.getElementById('result').innerHTML = "See Figures 4 and 5 on the Photo Gallery Below";
  }
  else if (inputs === "Gallery" || inputs === "gallery")
  {
  	document.getElementById('result').innerHTML = "See Figures 6 and 7 on the Photo Gallery Below";
  }
  else if (inputs === "Other" || inputs === "other")
  {
  	document.getElementById('result').innerHTML = "See Figures 8 on the Photo Gallery Below";
  }
  else
  {
  	document.getElementById('result').innerHTML = "Please enter valid data";
  }
}

$(document).ready(function() 
{
    $("#accordion").accordion(
        {
            collapsible: true,
            heightstyle: "content"
        });
})
