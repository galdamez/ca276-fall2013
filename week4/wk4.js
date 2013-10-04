// Jose Galdamez

var 
	counties,
	countiesMenu,
	i;

counties = [
	"Allegany County", 
	"Anne Arundel County", 
	"Baltimore City", 
	"Baltimore County", 
	"Calvert County", 
	"Caroline County", 
	"Carroll County", 
	"Cecil County", 
	"Charles County", 
	"Dorchester County", 
	"Frederick County", 
	"Garrett County", 
	"Harford County", 
	"Howard County", 
	"Kent County", 
	"Montgomery County", 
	"Prince George's County", 
	"Queen Anne's County", 
	"Saint Mary's County", 
	"Somerset County", 
	"Talbot County", 
	"Washington County", 
	"Wicomico County", 
	"Worcester County"
];

// populate drop down menu
countiesMenu = document.getElementById('countiesMenu');
// we write the menu options one by one

for (i = 0; i < counties.length; i += 1) {
	// concatenate a new option tag
	countiesMenu.innerHTML += '<option>' + counties[i] + '</option>';
}

// When county menu changes
countiesMenu.onchange = function () {
	var 
		countySeat,
		countySeatDisplay;

	// Set reference to countySeatDisplay on the Web page
	countySeatDisplay = document.getElementById('countySeatDisplay');

	// console.log(getCountySeat(this.value));

	// Determine what the county seat is
	countySeat = getCountySeat(this.value);

	// Write it back to the page
	countySeatDisplay.value = countySeat;
}

// Define function
// @value county name
function getCountySeat(value) {
	// We reference the user's selection using the variable below
	// this.value

	// Montgomery: Rockville
	// Baltimore: Towson
	// Prince George's: Upper Marlboro

	// If the value is equal to the string 'SOMETHING'
	// then countySeat = 'VALUE OF COUNTY SEAT'

	if (value === 'Montgomery County') {
		return 'Rockville';
	}

	if (value === 'Anne Arundel County') {
		return 'Annapolis';
	}

	if (value === 'Caroline County') {
		return 'Denton';
	}

	if (value === 'Carroll County') {
		return 'Denton';
	}

	return 'Sorry bub';
}






