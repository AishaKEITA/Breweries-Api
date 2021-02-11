// const axios = require('axios').default; // only use this if you are using other libaries not vanilla js

 /* --->get Json through the link <--- */
axios.get('https://api.openbrewerydb.org/breweries/')
    .then(function (response) {
        // handle success
        const data = response.data;
        console.log(response.data);

        data.forEach(brewery => {
            console.log(brewery)

/* --->create html elements and get elements form index html page <--- */
            document.getElementById('heading').style.font = "italic bold 50px arial,serif";
            let div = document.createElement('div');
            let h1 = document.createElement('h1');
            let countryCity = document.createElement('p');
            let createUpdate = document.createElement('p');
            let streetPostal = document.createElement('p')

/* --->add text content to elements<--- */
            h1.textContent =  brewery.name
            countryCity.textContent = `Country: ${brewery.country}, City: ${brewery.city}`;
            streetPostal.textContent = `Street: ${brewery.street}, Postal Address: ${brewery.postal_code}`;
            createUpdate.textContent = `Created: ${brewery.created_at} Upadated: ${brewery.updated_at}`;
            
            
    /* --->style elements<--- */
        
            
    /* --->add an element to the div using the append child method<--- */
            div.appendChild(h1)
            div.appendChild(countryCity)
            div.appendChild(streetPostal)
            div.appendChild(createUpdate)
    
    /* --->add the div to the document<--- */
            document.body.appendChild(div);
        });

    })