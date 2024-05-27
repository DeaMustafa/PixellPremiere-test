document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        // Action Movies
        { title: 'Action Movie 2', genre: 'action', image: 'images/image 1.jpg' },
        { title: 'Action Movie 3', genre: 'action', image: 'images/image 2.jpg' },
        { title: 'Action Movie 4', genre: 'action', image: 'images/image 3.jpg' },
        { title: 'Action Movie 5', genre: 'action', image: 'images/image 4.jpg' },
        { title: 'Action Movie 6', genre: 'action', image: 'images/image 5.jpg' },
        
        { title: 'Action Movie 8', genre: 'action', image: 'images/image 7.jpg' },
        { title: 'Action Movie 9', genre: 'action', image: 'images/image 8.jpg' },
        { title: 'Action Movie 10', genre: 'action', image: 'images/image 9.jpg' },
        { title: 'Action Movie 10', genre: 'action', image: 'images/image 10.jpg' },
        { title: 'Action Movie 10', genre: 'action', image: 'images/image 11.jpg' },

        // Comedy Movies
        { title: 'Comedy Movie 1', genre: 'comedy', image: 'images/image 1.jpg' },
        { title: 'Comedy Movie 2', genre: 'comedy', image: 'images/image 2.jpg' },
        { title: 'Comedy Movie 3', genre: 'comedy', image: 'images/image 3.jpg' },
        { title: 'Comedy Movie 4', genre: 'comedy', image: 'images/image 4.jpg' },
        { title: 'Comedy Movie 5', genre: 'comedy', image: 'images/image 5.jpg' },
        { title: 'Comedy Movie 6', genre: 'comedy', image: 'images/image 6.jpg' },
        { title: 'Comedy Movie 7', genre: 'comedy', image: 'images/image 7.jpg' },
        { title: 'Comedy Movie 8', genre: 'comedy', image: 'images/image 8.jpg' },
        { title: 'Comedy Movie 9', genre: 'comedy', image: 'images/image 9.jpg' },
        { title: 'Comedy Movie 10', genre: 'comedy', image: 'images/image 10.jpg' },
        { title: 'Comedy Movie 10', genre: 'comedy', image: 'images/image 11.jpg' },


        // Drama Movies
        { title: 'Drama Movie 1', genre: 'drama', image: 'images/image 1.jpg' },
        { title: 'Drama Movie 2', genre: 'drama', image: 'images/image 2.jpg' },
        { title: 'Drama Movie 3', genre: 'drama', image: 'images/image 3.jpg' },
        { title: 'Drama Movie 4', genre: 'drama', image: 'images/image 4.jpg' },
        { title: 'Drama Movie 5', genre: 'drama', image: 'images/image 5.jpg' },
        { title: 'Drama Movie 6', genre: 'drama', image: 'images/image 6.jpg' },
        { title: 'Drama Movie 7', genre: 'drama', image: 'images/image 7.jpg' },
        { title: 'Drama Movie 8', genre: 'drama', image: 'images/image 8.jpg' },
        { title: 'Drama Movie 9', genre: 'drama', image: 'images/image 9.jpg' },
        { title: 'Drama Movie 10', genre: 'drama', image: 'images/image 10.jpg' },
        { title: 'Drama Movie 10', genre: 'drama', image: 'images/image 11.jpg' },

        // Horror Movies
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 1.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 2.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 3.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 4.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 5.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 6.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 7.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 8.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 9.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 10.jpg' },
        { title: 'Horror Movie 1', genre: 'horror', image: 'images/image 11.jpg' },
        // Romance Movies
        { title: 'Romance Movie 1', genre: 'romance', image: 'images/image 1.jpg' },
        { title: 'Romance Movie 1', genre: 'romance', image: 'images/image 2.jpg' },
        { title: 'Romance Movie 1', genre: 'romance', image: 'images/image 3.jpg' },
        { title: 'Romance Movie 1', genre: 'romance', image: 'images/image 4.jpg' },
        { title: 'Romance Movie 1', genre: 'romance', image: 'images/image 5.jpg' },
        { title: 'Romance Movie 1', genre: 'romance', image: 'images/image 6.jpg' },
        { title: 'Romance Movie 1', genre: 'romance', image: 'images/image 7.jpg' },
        
        { title: 'Sci-Fi Movie 1', genre: 'sci-fi', image: 'images/image 1.jpg' },
        { title: 'Thriller Movie 1', genre: 'thriller', image: 'images/image 1.jpg' },
        { title: 'Documentary Movie 1', genre: 'documentary', image: 'images/image 1.jpg' }
    ];

    const searchInput = document.getElementById('search-input');
    const moviesContainer = document.getElementById('movies-container');

    const displayMovies = (filteredMovies) => {
        moviesContainer.innerHTML = '';
        filteredMovies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            `;
            moviesContainer.appendChild(movieElement);
        });
    };

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
        displayMovies(filteredMovies);
    });

    displayMovies(movies); // Paraqit filmat fillestarë
});
