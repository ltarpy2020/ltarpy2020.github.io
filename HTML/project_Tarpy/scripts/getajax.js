function ajaxCall()
{
	$.ajax(
		{
			"info.json"
			type: "GET",
			success: function(data)
	{
		var s = JSON.stringify(data);
		document.getElementById('re').innerHTML = s;
	}
};
}
