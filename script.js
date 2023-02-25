const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '046151bb77msh896388e1662cba1p1e3bd2jsnfc000b673e83',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kathmandu', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));