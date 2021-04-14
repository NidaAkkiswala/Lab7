function init() 
{
	var entry = document.getElementById("entrybutton");
	
	function alertMe() 
	{
		var input = document.getElementById("entryinput");
		var output = document.getElementById("textoutput");
		alert('Nida Akkiswala: ' + input.value);
		output.innerHTML = input.value;
	}
	entry.addEventListener('click', alertMe);
}
window.addEventListener('load', init);