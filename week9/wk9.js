// Attach a click event to button

document.getElementById('terms').onclick = function () {
	var modal, mask, text, textNode, container;

	text = 'Lorem ipsum there is some text here';
	textNode = document.createTextNode(text);

	// Obtain reference to DOM nodes
	// modal = document.getElementById('modal');
	// mask = document.getElementById('mask');

	// Change style attribute
	// modal.style.display = 'block';
	// mask.style.display = 'block';

	// mask = document.createElement('div');
	// mask.setAttribute('id', 'mask');
	// mask.setAttribute('style', 'display: block;');
	// document.body.appendChild(mask);

	// modal = document.createElement('div');
	// modal.setAttribute('id', 'modal');
	// modal.setAttribute('style', 'display: block;');
	// // Attach text node
	// modal.appendChild(textNode);
	// // Append to page
	// document.body.appendChild(modal);

	container = document.getElementById('container');
	container.innerHTML = '<div id="mask"></div>';
	container.innerHTML += '<div id="modal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, repudiandae, minima, in iure eos dolorum placeat consequatur vero magni eius explicabo magnam delectus laboriosam deleniti quia illo non voluptatibus libero.</div>';
};