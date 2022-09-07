const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '323e6e957cmsh4306a46ada0243dp10c3ebjsnfebfcbce53fc',
		'X-RapidAPI-Host': 'mental-health-info-api.p.rapidapi.com'
	}
};

    fetch('https://mental-health-info-api.p.rapidapi.com/news/thetimes', options).then(response => {
        return response.json(); 
    })
    .then(data =>{
        console.log(data.data);
        const html = data
        .map(article => {
            return `
            <div class = "user">
            <p>Source:${article.source}</p>
            <p>Title:${article.title}</p>
            <p>${article.url}</p>
            </div>
            `;
        })
        .join('');
        console.log(html);
        document.querySelector("#app").insertAdjacentHTML('afterbegin',html) 
    })

	
	    

    