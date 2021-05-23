var inp_as = document.getElementById('a_size'),
  array_size = inp_as.value;
var inp_gen = document.getElementById('a_generate');
var inp_aspeed = document.getElementById('a_speed');
//var array_speed=document.getElementById('a_speed').value;

var butts_algos = document.querySelectorAll('.algos button');
var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById('array_container');
cont.style = 'flex-direction:row';

//Array generation and updation.

inp_gen.addEventListener('click', generate_array);
inp_as.addEventListener('input', update_array_size);

function generate_array() {
  cont.innerHTML = '';

  for (var i = 0; i < array_size - 1; i++) {
    div_sizes[i] =
      Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
    divs[i] = document.createElement('div');
    cont.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style =
      ' margin:0% ' +
      margin_size +
      '%; background-color:blue; width:' +
      (100 / array_size - 2 * margin_size) +
      '%; +  height:' +
      div_sizes[i] +
      '%;';
  }
}

// console.log('This is the div_sizes : ', div_sizes);

function update_array_size() {
  array_size = inp_as.value;
  generate_array();
}

//   Execute a JavaScript immediately after a page has been loaded:
window.onload = update_array_size();

// Running the appropriate algorithm
console.log(butts_algos.length); // 6
for (var i = 0; i < butts_algos.length; i++) {
  butts_algos[i].addEventListener('click', runalgo);
}

function disable_butons() {
  console.log('Diable Button clicked ...');

  for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].classList = [];
    butts_algos[i].classList.add('butt_locked');

    butts_algos[i].disabled = true;
    inp_as.disabled = true;
    inp_gen.disabled = true;
    inp_aspeed.disabled = true;
  }
}

function runalgo() {
  console.log('Calling runalgo function ...');

  disable_butons();

  this.classList.add('butt_selected');
  switch (this.innerHTML) {
    case 'Bubble':
      Bubble();
      break;

    case 'Selection':
      Selection_sort();
      break;

    case 'Insertion':
      Insertion();
      break;

    case 'Merge':
      Merge();
      break;

    case 'Quick':
      Quick();
      break;

    case 'Heap':
      Heap();
      break;
  }
}
