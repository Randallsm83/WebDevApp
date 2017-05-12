/* eslint no-console: 0 */

import './style.css';

import Modernizr from 'modernizr';

console.log('wut');
if (Modernizr.video) {
	console.log('video works');
}
if (Modernizr.canvas) {
	console.log('canvas works');
}
