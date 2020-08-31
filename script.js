
let selections = document.getElementsByClassName('selection');
let properties = document.getElementsByClassName('property');
let content = document.getElementsByClassName('content');
let activeSelection = "CCV01";
let activeProperty = "Sequence";
changeDisplay();

Array.from(selections).forEach(function(selection) {
	selection.addEventListener('click', function(){pickSelection(this.innerHTML)});
});

Array.from(properties).forEach(function(property) {
	property.addEventListener('click', function(){pickProperty(this.innerHTML)});
});

function pickSelection(name) {
    activeSelection = name;
	contentID = activeSelection + " " + activeProperty;
	console.log ("Current content is " , activeSelection + " " + activeProperty);
	changeDisplay();
}
    
function pickProperty(name) {
    activeProperty = name;
	contentID = activeSelection + " " + activeProperty;
	console.log ("Current content is " , activeSelection + " " + activeProperty);
	changeDisplay();
}

function changeDisplay() {
	let i
	for (i=0; i < selections.length; i++){
		if (selections[i].innerHTML === activeSelection) { 
			selections[i].style.backgroundColor = "#ed320a";
		} else {
			selections[i].style.backgroundColor = "";
		}
	}
	
	for (i=0; i < properties.length; i++){
		if (properties[i].innerHTML === activeProperty) { 
			properties[i].style.backgroundColor = "#ed320a";
		} else {
			properties[i].style.backgroundColor = "";
		}
	}
	
	for (i=0; i < content.length; i++){
		content[i].style.display = "none";
	}
	//console.log ("Current content is " , activeSelection + " " + activeProperty);
	//document.getElementById(activeSelection).className += " active";
	//document.getElementbyId(activeProperty).className += " active";
	document.getElementById(activeSelection + " " + activeProperty).style.display = "block";
}

