const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Patches = require('Patches');

Promise.all([
  Scene.root.findFirst('scr'),
  Patches.outputs.getScalar('points')
]).then(function(results) {
  const counter = results[0];
  const scoreNumber = results[1];
  counter.text = scoreNumber.toString();
});