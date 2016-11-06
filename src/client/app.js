/* eslint-env browser */

import 'babel-polyfill';
import Dog from '../shared/dog';

const browserPenny = new Dog('Browser Penny');

document.querySelector('.app').innerText = browserPenny.bark();
