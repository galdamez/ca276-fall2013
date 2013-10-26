// Attach a click event to button

// Inject onto page using the W3C API
document.getElementById('w3cExample').onclick = function() {
	var modal, mask, text, textNode, container;

	text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, repudiandae, minima, in iure eos dolorum placeat consequatur vero magni eius explicabo magnam delectus laboriosam deleniti quia illo non voluptatibus libero.';
	textNode = document.createTextNode(text);

	// Create mask
	mask = document.createElement('div');
	mask.setAttribute('id', 'mask');
	mask.setAttribute('style', 'display: block;');
	document.body.appendChild(mask);

	// Create modal
	modal = document.createElement('div');
	modal.setAttribute('id', 'modal');
	modal.setAttribute('style', 'display: block;');

	// Attach text node
	modal.appendChild(textNode);

	// Append to page
	document.body.appendChild(modal);
}

// Inject onto page using innerHTML
document.getElementById('innerHTMLExample').onclick = function() {
	var modal, mask, text, textNode, container;

	text = 'Lorem ipsum there is some text here';
	textNode = document.createTextNode(text);

	container = document.getElementById('container');
	container.innerHTML += '<div id="mask"></div>';
	container.innerHTML += '<div id="modal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, repudiandae, minima, in iure eos dolorum placeat consequatur vero magni eius explicabo magnam delectus laboriosam deleniti quia illo non voluptatibus libero.</div>';
};

//jQuery approach
$('#jQueryExample').on('click', function() {
	$('#container')
		.append('<div id="mask"></div>')
		.append('<div id="modal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, repudiandae, minima, in iure eos dolorum placeat consequatur vero magni eius explicabo magnam delectus laboriosam deleniti quia illo non voluptatibus libero.</div>');
})