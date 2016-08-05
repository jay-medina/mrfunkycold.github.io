module.exports = function() {
  var element = document.createElement('h1');

  element.innerHTML = 'hello world';

  var div = document.createElement('div');

  div.innerHTML = "now will it work";

  element.appendChild(div);

  return element;
}