let apiKey = 'f4051c4c';
let form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
	event.preventDefault();
	let apiURL = 'http://www.omdbapi.com/';
	let title = document.querySelector('input[type="text"]').value;
	let year = document.querySelector('input[type="number"]').value;
	let plot = document.querySelector('select').value;
	plot = plot == 'full' ? 'full' : '';
	title = title.replace(' ', '+');
	if (title) apiURL += `?t=${title}`;
	if (year) apiURL += `?y=${year}`;
	if (plot) apiURL += `?plot=${plot}`;
	apiURL += `&apikey=${apiKey}`;
	var data = await fetch(apiURL) // the await key waits until the fetch responds. After
		// receiving the response the value is stored in var.
		.then((response) => response.json()) // add a rejection error
		//response.json() -> returns a promise
		.then((fetchedData) => {
			return fetchedData;
		});
	createShowcase(data);
});
// http://www.omdbapi.com/?t={title}&y={year}&plot=full&apikey=f4051c4c

// things to focus
// title, languagem country, actors, director,

function createShowcase(data) {
	let showcase = document.querySelector('.showcase');
	if (showcase.children.length) showcase.removeChild(showcase.children[0]);
	let img = document.createElement('img');
	img.setAttribute('src', data.Poster);
	showcase.appendChild(img);
}
