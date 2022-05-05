const goodMovies = [
    'Dogtooth',
    'Gummo',
    'The Killing of a Sacred Deer'
]

document.write('<ul>');
goodMovies.forEach(movie => document.write('<li>' + movie + '</li>'))
document.write('</ul>');