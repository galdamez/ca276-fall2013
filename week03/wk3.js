// Jose Galdamez

var counties,
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

console.log(i);