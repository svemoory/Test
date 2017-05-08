/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MLSOData from './MLSOData'
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/

'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function(number, locale) {
    return number.toLocaleString(locale);
};
