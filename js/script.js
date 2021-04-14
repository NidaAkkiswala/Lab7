function init() {
	
	var entry = document.getElementById("entrybutton");
	var input = document.getElementById("entryinput");
	var output = document.getElementById("textoutput");
	
	funtion alertMe() {
		alert('Nida Akkiswala: ' + input.value);
		output.innerHTML = input.value;
	}
	entry.addEventListener('click', alertMe);
}
window.addEventListener('load', init);