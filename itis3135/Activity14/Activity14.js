$(document).ready(function() {
	let t = document.getElementById('toobin');
	let o = document.getElementById('sorkin');
	let c = document.getElementById('chua');
	let s = document.getElementById('sampson');
	
	t.addEventListener('click', function()
	{
		fetch('json_files/toobin.json')
		.then(response => response.json()
		      .then(data =>
		{
			document.getElementById('result').innerHTML = data.sentence;
		}
	});
	o.addEventListener('click', function()
	{
		$.getJSON('json_files/sorkin.json');
	});
	c.addEventListener('click', function()
	{
		$.getJSON('json_files/chua.json');
	});
	s.addEventListener('click', function()
	{
		$.getJSON('json_files/sampson.json');
	});
	
	
}); // end ready
