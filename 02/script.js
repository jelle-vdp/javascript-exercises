let goodMovies = [
    'Dogtooth',
    'Gummo',
    'The Killing of a Sacred Deer'
]

goodMovies = goodMovies
                .map(movie => movie.toLowerCase())
                .reverse();

document.write('<ul>');
goodMovies.forEach(movie => document.write('<li>' + movie + '</li>'))
document.write('</ul>');