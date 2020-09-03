//Declare Variables
let selections = document.getElementsByClassName('selection');
let properties = document.getElementsByClassName('property');
let content = document.getElementsByClassName('content');
let activeSelection = "CCV01";
let activeProperty = "Sequence";
changeDisplay();

//Read ID tag from active left tab
Array.from(selections).forEach(function(selection) {
	selection.addEventListener('click', function(){pickSelection(this.id)});
});

//Read ID tag from active top tab
Array.from(properties).forEach(function(property) {
	property.addEventListener('click', function(){pickProperty(this.id)});
});

//Store left tab (selection) and update content
function pickSelection(name) {
    activeSelection = name;
	console.log ("Current content is " , activeSelection + " " + activeProperty);
	changeDisplay();
}
    
//Store top tab (property) and update content	
function pickProperty(name) {
    activeProperty = name;
	console.log ("Current content is " , activeSelection + " " + activeProperty);
	changeDisplay();
}


function changeDisplay() {
	let i
	//Set background color of active selection
	for (i=0; i < selections.length; i++){
		if (selections[i].id === activeSelection) { 
			selections[i].style.backgroundColor = "#f7f1e3";
		} else {
			selections[i].style.backgroundColor = "";
		}
	}
	
	//Set background color of active property
	for (i=0; i < properties.length; i++){
		if (properties[i].id === activeProperty) { 
			properties[i].style.backgroundColor = "#f7f1e3";
		} else {
			properties[i].style.backgroundColor = "";
		}
	}
	
	//Clear display of content and make selected content visible
	for (i=0; i < content.length; i++){
		content[i].style.display = "none";
	}
	document.getElementById(activeSelection + " " + activeProperty).style.display = "block";
}

