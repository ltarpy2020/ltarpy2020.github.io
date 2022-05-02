let n = document.getElementById('next');
let p = document.getElementById('previous');
let p1 = document.getElementById('mySlides1');
let p2 = document.getElementById('mySlides2');
let p3 = document.getElementById('mySlides3');
let p4 = document.getElementById('mySlides4');

n.addEventListener('click', function()
{
	for (let i = 0; i < 4; i++)
  {
  	switch (i)
    {
    	case 0:
      	p1.style.visibility = "visible";
        break;
      case 1:
        p2.style.visibility = "visible";
        break;
        case 2:
        p3.style.visibility = "visible";
        break;
        case 3:
        p4.style.visibility = "visible";
        break;
    }
  }
});
