const app = "I don't do much."
var kittens = [
  'Milo',
  'Otis',
  'Garfield'
  ];
  
  
function destructivelyAppendKitten(name) {
  var newKittens = kittens.push(name);
  return newKittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten () {
  kittens.shift();
}