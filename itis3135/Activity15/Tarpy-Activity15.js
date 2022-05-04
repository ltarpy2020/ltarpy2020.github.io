$(document).ready(function()
{
  let fImage = $("<img>");
  let fName = $("<h2>");
  let fSection = $("<h3>");
  let fBio = $("<p>");
   $.getJSON('facultyList.json', function(data)
{
    $.each(data, function()
    {
      $.each(this, function()
      {
        $("#faculty").append(fImage);
        $("#faculty").append(fName);
        $("#faculty").append(fSection);
        $("#faculty").append(fBio);
      })
    })
 });
});
