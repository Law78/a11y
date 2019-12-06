var options = {
  edge: 'left',
  draggable: true,
  inDuration: 500,
  outDuration: 250,
  onOpenStart: null,
  onOpenEnd: null,
  onCloseStart: null,
  onCloseEnd: null,
  preventScrolling: true
}
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.sidenav');
console.log(M);
var instances = M.Sidenav.init(elems, options);
});

function Submit(e){
  e = e || window.event;
  var target = e.target || e.srcElement;
  var name = document.querySelector('form > input').value;
  e.preventDefault();
  console.log('Hello Submit!', name);
  document.getElementById('res').innerHTML = name;
}

function changeEye() {
  var eye = document.querySelector('#eye').value;
  document.querySelector('main').setAttribute('style', `filter:blur(${eye}px)`);
}