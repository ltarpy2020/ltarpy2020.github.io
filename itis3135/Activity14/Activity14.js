$(document).ready(function() {
	let t = document.getElementById('toobin');
	let o = document.getElementById('sorkin');
	let c = document.getElementById('chua');
	let s = document.getElementById('sampson');
	
	t.addEventListener('click', function(data)
	{
		$.getJSON('json_files/toobin.json');
	});
	o.addEventListener('click', function(data)
	{
		$.getJSON('json_files/sorkin.json');
	});
	c.addEventListener('click', function(data)
	{
		$.getJSON('json_files/chua.json');
	});
	s.addEventListener('click', function(data)
	{
		$.getJSON('json_files/sampson.json');
	});
	
	
}); // end ready
