const fees = [
  {
    price: 10.75,
    title: "Normal fee"
  }, {
    price: 9.75,
    title: "Discounted fee"
  }, {
    price: 8.05,
    title: "Kinepolis Student Card"
  }
];

const extras = [
  {
    price : 2.00,
    title : "Supplement 3D"
  }, {
    price : 2.00,
    title : "Supplement Escape"
  }, {
    price : 3.00,
    title : "Supplement HFR 3D"
  }, {
    price : 0.75,
    title : "Supplement Long Duration Movie"
  }, {
    price : 2.50,
    title : "Supplement Cosy Zone"
  }, {
    price : 1.00,
    title : "Supplement Atmos"
  }
];

const generateCombinations = num => {
  const combination = parseFloat(fees[num].price) + parseFloat(extras[num].price);
  document.write('<li>' + fees[num].title + ' and ' + extras[num].title + ' costs €' + combination + '</li>');
};

document.write('<h3>Fees</h3>');
document.write('<ul>');
fees.forEach(fee => document.write('<li>' + fee.title + ': €' + fee.price) + '</li>')
document.write('</ul>');

document.write('<h3>Extra\'s</h3>');
document.write('<ul>');
extras.forEach(extra => document.write('<li>' + extra.title + ': €' + extra.price) + '</li>')
document.write('</ul>');

document.write('<h3>For example, some combinations</h3>');
document.write('<ul>');
generateCombinations(0);
generateCombinations(1);
generateCombinations(2);
document.write('</ul>');