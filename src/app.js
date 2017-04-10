if (module.hot) {
   module.hot.accept()
}

var data = require('./data');

import forEach from 'lodash/forEach.js';

import './app.scss';

console.log(data);

let str = '';

forEach(data, (d) => {
   str += d.name;
});

const el = document.querySelector('#el')
el.innerHTML = `<p>Hello World 123 ${str}.</p>`;