$(document).ready(function() 
{
	let t = document.getElementById('toobin');
	let o = document.getElementById('sorkin');
	let c = document.getElementById('chua');
	let s = document.getElementById('sampson');
	
	t.addEventListener('click', function()
	{
		fetch('json_files/toobin.json')
		.then(response => response.json())
		      .then(data =>
		{
			document.getElementById('speakers').innerHTML = data.speakers;
		})
	});
	o.addEventListener('click', function()
	{
		fetch('json_files/toobin.json')
		.then(response => response.json())
		      .then(data =>
		{
			document.getElementById('speakers').innerHTML = data.speakers;
		})
	});
	c.addEventListener('click', function()
	{
		fetch('json_files/toobin.json')
		.then(response => response.json())
		      .then(data =>
		{
			document.getElementById('speakers').innerHTML = data.speakers;
		})
	});
	s.addEventListener('click', function()
	{
		fetch('json_files/toobin.json')
		.then(response => response.json())
		      .then(data =>
		{
			document.getElementById('speakers').innerHTML = data.speakers;
		})
	});
  });
