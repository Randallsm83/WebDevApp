/* eslint no-console: 0 */
/* global require */

import './style.css';

import Modernizr from 'modernizr';

require('./index.html');

console.log('wut');
if (Modernizr.video) {
	console.log('video works');
}
if (Modernizr.canvas) {
	console.log('canvas works');
}
