function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function getValue()
{
  var x = parseInt(document.getElementById('inputed').value);
  var y = (3 * x) + 2;
  document.getElementById('response').innerHTML = y;
}
document.getElementById('but').addEventListener('click', getValue);
