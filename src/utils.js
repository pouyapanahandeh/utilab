const _ = require('lodash');

function reverseString(str) {
  return str.split('').reverse().join('');
}

function sortByDate(arr) {
  return _.sortBy(arr, date => new Date(date));
}

function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

function uniqueElements(arr) {
  return [...new Set(arr)];
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
}

function truncate(str, maxLength, suffix = '...') {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + suffix;
  } else {
    return str;
  }
}

function getQueryParam(name, url = window.location.href) {
  name = name.replace(/[[]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function flattenObject(obj, delimiter = '.') {
  const result = {};
  function recurse(cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      for (let i = 0, l = cur.length; i < l; i++) {
        recurse(cur[i], prop + '[' + i + ']');
      }
      if (l === 0) {
        result[prop] = [];
      }
    } else {
      let isEmpty = true;
      for (let p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop + delimiter + p : p);
      }
      if (isEmpty && prop) {
        result[prop] = {};
      }
    }
  }
  recurse(obj, '');
  return result;
}

function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function capitalizeEveryWord(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

function formatCurrency(value, symbol = '$') {
  return symbol + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

module.exports = {
  reverseString,
  sortByDate,
  sumArray,
  uniqueElements,
  capitalize,
  isPalindrome,
  truncate,
  getQueryParam,
  isObject,
  flattenObject,
  isEmail,
  capitalizeEveryWord,
  formatCurrency
};