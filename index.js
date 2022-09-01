const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '323e6e957cmsh4306a46ada0243dp10c3ebjsnfebfcbce53fc',
		'X-RapidAPI-Host': 'mental-health-info-api.p.rapidapi.com'
	}
};
fetch('https://mental-health-info-api.p.rapidapi.com/news/thetimes', options)
	.then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })