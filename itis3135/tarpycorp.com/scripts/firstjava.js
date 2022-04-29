window.onload = getDateAndTime();
function getDateAndTime()
{
  const date = new Date();

  const x = date.toDateString();

  const time = date.toLocaleTimeString();

  console.log("date: " + x);
  console.log("time: "+ time);
}
