const bestActors = [
  {
    actor: "Forest Whitaker",
    film: "The Last King of Scotland",
    age: 45
  }, {
    actor: "Daniel Day-Lewis",
    film: "There Will Be Blood",
    age: 50
  }, {
    actor: "Sean Penn",
    film: "Milk",
    age: 48
  }, {
    actor: "Jeff Bridges",
    film: "Crazy Heart",
    age: 60
  }, {
    actor: "Colin Firth",
    film: "The King's Speech",
    age: 50
  }, {
    actor: "Jean Dujardin",
    film: "The Artist",
    age: 39
  }, {
    actor: "Daniel Day-Lewis",
    film: "Lincoln",
    age: 55
  }, {
    actor: "Matthew McConaughey",
    film: "Dallas Buyers Club",
    age: 44
  }, {
    actor: "Eddie Redmayne",
    film: "The Theory of Everything",
    age: 33
  }, {
    actor: "Leonardo DiCaprio",
    film: "The Revenant",
    age: 41
  }
];

bestActors.splice(0, bestActors.length - 5);

bestActors.sort((a, b) => b.age - a.age);

document.write('<ol>');
bestActors.forEach(ac => document.write('<li>' + ac.actor + ' in ' + ac.film + ' at the age of ' + ac.age + '</li>'));
document.write('</ol>');

const totalAge = bestActors.reduce(((acc, actor) => acc + actor.age), 0);

console.log(totalAge);