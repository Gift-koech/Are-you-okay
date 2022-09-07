const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '323e6e957cmsh4306a46ada0243dp10c3ebjsnfebfcbce53fc',
		'X-RapidAPI-Host': 'mental-health-info-api.p.rapidapi.com'
	}
};
 
search = document.querySelector("#searchbar")
 search.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e.target.search.value);
    fetch(`https://mental-health-info-api.p.rapidapi.com/news/${e.target.search.value}`, options).then(response => {
        return response.json(); 
    })
    .then(data =>{
        console.log(data);
        const html = data
       
            return `
            <div class = "user flex-child">
            <p>${article.source}</p>
            <p>${article.title}</p>
            <a href="${article.url}">click here</a>
            </div>
            `;
        })
        .join('');
        //console.log(html);
        document.querySelector("#app").insertAdjacentHTML('afterbegin',html) 
  
    })
    e.target.reset();
})
    
    
    

	
	    

    