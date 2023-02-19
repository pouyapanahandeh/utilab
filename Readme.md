### UTILAB

This package provides developers with a collection of commonly used utility functions to make their code more efficient and maintainable. Arrays, strings, dates, and more are handled by its functions.

Here is a list of the functions provided by the package:

`reverseString(str)`: This function takes a string as input and returns a new string with the characters in reverse order.

`sortByDate(arr)`: This function takes an array of dates as input and returns a new array with the dates sorted in ascending order.

`sumArray(arr)`: This function takes an array of numbers as input and returns the sum of all the numbers in the array.

`uniqueElements(arr)`: This function takes an array as input and returns a new array with only the unique elements in the original array.

`capitalize(str)`: This function takes a string as input and returns a new string with the first letter capitalized.

`isPalindrome(str)`: This function takes a string as input and returns true if the string is a palindrome (i.e., the same forwards and backwards) and false otherwise.

`truncate(str, maxLength, suffix)`: This function takes a string, a maximum length, and an optional suffix as input and returns a truncated string with the suffix added if the original string is longer than the maximum length.

`getQueryParam(name, url)`: This function takes a parameter name and an optional URL as input and returns the value of the parameter in the URL query string.

`isObject(obj)`: This function takes an object as input and returns true if it is an object (i.e., not null and of type 'object') and false otherwise.

`isEmail(email)`: This function takes an email address as input and returns true if it is a valid email address and false otherwise.

`capitalizeEveryWord(str)`: This function takes a string as input and returns a new string with the first letter of every word capitalized.

`formatCurrency(value, symbol)`: This function takes a number and an optional currency symbol as input and returns a formatted currency string.

#### To use this package in your project, you first need to install it via npm. You can do this by running the following command in your project directory:

```javascript
npm install utilab
```

Once you have installed the package, you can import the functions you need in your code by using the `require` statement. Here's an example:

```javascript
const myUtils = require('my-utility-library');

const str = 'hello world';
const reversedStr = myUtils.reverseString(str);
console.log(reversedStr); // 'dlrow olleh'

```