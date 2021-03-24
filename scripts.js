// Access html
const app = document.getElementById('root');
// console.log(app);

// create image
const logo = document.createElement('img');
// console.log(logo);
// set attribute to place an image
logo.src = 'logo.png'

// create another element, a div this time, and set the class attribute to container
const container = document.createElement('div');
// debugger;
container.setAttribute('class', 'container'); // doesnt seem to work

// place in website to the app root
app.appendChild(logo);
app.appendChild(container);
// This will only be visible in the Inspect Elements tab, not in the HTML source code,

// // Open a connection to API & Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
// console.log(request);
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://www.breakingbadapi.com/api/QUOTES', true)

// access data inside the onload function
request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    // console.log(data);

    // ok response range 200 to 299
    if (request.status >= 200 && request.status < 400) {
        // create a data variable that contains all the JSON as an array of JavaScript objects
        data.forEach((quote) => {
            // // Log each movie's title
            // console.log(movie.title);
            // // Log each movie's description
            // console.log(movie.description);

            // Create a div with a card class
            const card = document.createElement('div');
            // console.log(card);
            card.setAttribute('class', 'card');
            // console.log(card);

            // Create an h1 and set the text content to the films' title
            const h1 = document.createElement('h1');
            h1.textContent = quote.quote;
            // console.log(h1);

            // Create a p and set the text content to the film's description limit to 300 chars
            const p = document.createElement('p');
            p.textContent = quote.author;
            // OR
            // p.textContent = movie.description.substring(0.300);
            // console.log(p);

            // Append the cards to the container element
            container.appendChild(card);

            // Each card will contain an h1 and a p
            card.appendChild(h1);
            card.appendChild(p);
        })
    } else {

        // Error of an error: error doesn't show on screen
        const errorMessage = document.createElement('footer')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)


        // const errorMessage = document.createElement('marquee');
        // // console.log(errorMessage)

        // errorMessage.textContent = `Gah, it's not working`;
        // // console.log(errorMessage)


        // app.appendChild(errorMessage);
        // console.log(errorMessage)

        // console.log('error');
    }
}

// Send request
request.send();