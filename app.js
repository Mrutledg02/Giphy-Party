console.log("Let's get this party started!");

$(document).ready(function () {
    // Giphy API key
    const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
  
    // Event listener for form submission
    $('#searchBtn').click(function (event) {
      event.preventDefault();
  
      // Get the user's input
      const searchTerm = $('#searchInput').val();
  
      // Make a request to the Giphy API with search parameters
      axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          api_key: apiKey,
          q: searchTerm,
        },
      })
      .then(function (response) {
        // Get an array of GIFs from the response
        const gifs = response.data.data;

        // Ensure there are results
        if (gifs.length > 0) {
          // Randomly select an index
          const randomIndex = Math.floor(Math.random() * (gifs.length - 1));

          // Extract the GIF URL from the randomly selected index
          const gifUrl = gifs[randomIndex].images.original.url;

          // Append the GIF to the page
          $('#gifContainer').append(`<img src="${gifUrl}" alt="${searchTerm} GIF">`);
        } else {
          console.error('No GIFs found for the search term:', searchTerm);
        }
      })
      .catch(function (error) {
        console.error('Error fetching data from Giphy:', error);
      });
  });
  
    // Event listener for removing all GIFs
    $('#removeGifs').click(function () {
      $('#gifContainer').empty();
    });
  });