let sli = 1;
showSlides(sli);

function plusSlides(x)
{
  showSlides(sli += x);
}

function currentSlide(x)
{
  showSlides(sli = x)
}

function showSlides(x)
{
  let i = 0;
  let slides = document.getElementsByClassName('mySlides');
  let d = document.getElementsByClassName('dot');
  if (n > slides.length)
  {
    sli = 1;
  }
  if (n < 1)
  {
    sli = sides.length
  }
  for (i = 0; i < d.length; i++)
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }  
  slides[sli-1].style.display = "block";
  d[sli-1].className += " active";
}
