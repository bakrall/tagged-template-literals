(function() {
	'use strict'

	const main = document.querySelector('main');
	let people = [{
	    firstName: 'Fred',
	    lastName: 'Johnson'
	}, 
	{
	    firstName: 'Helga',
	    lastName: 'Johansson'
	}, 
	{
	    firstName: 'Mickey',
	    lastName: 'Mouse'
	}, 
	{
	    firstName: 'Jane',
	    lastName: 'Street'
	}];

	function buildList(htmlTags, elements) {
	    let markup = htmlTags[0];
	 
	    for (let x = 0; x < elements.length; x ++) {
	        markup += `<li>${elements[x]}</li>`;
	    }
	 
	    markup += htmlTags[1];
	 
	    main.innerHTML = markup;
	}

	buildList`<ul>${people.map( (person) => `${person.firstName} ${person.lastName}` )}</ul>`;
})();