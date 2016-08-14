
function attachInitialReactEl() {
  var body = document.getElementsByTagName('body')[0];
  const reactEl = document.createElement('div');

  body.appendChild(reactEl);

  return reactEl;
}

export {
  attachInitialReactEl
};