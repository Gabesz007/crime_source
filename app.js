
import './styles.css';

console.log('<--> Eddig működik.')

fetch('https://data.police.uk/api/crimes-street-dates')
    .then(response => {
    if (!response.ok) {
        throw new Error('Nincsen válasz, HIBA!' + response.statusText);
    }
    return response.json(); 
    })
    .then(data => {
    console.log(data); 
    })
    .catch(error => {
    console.error('Probléma van a fetchel:', error);
    });


