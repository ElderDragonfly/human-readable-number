'use strickt';
/*jshint esversion: 6 */
module.exports = function toReadable(numb) {
    let result;

    let one_nineArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let eleven_thirteenArray = ['ten', 'eleven', 'twelve', 'thirteen', '', 'fifteen'];
    let two_nineTens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    function lastTwoTens(number) {
      let numberString = number.toString();
      let firstNumberOfnumberString = numberString.split('').shift();
      let lastNumberOfnumberString = numberString.split('').pop();
  
      if(number == 0) {
        result = '';
        return result;
      }
      if(numberString.length == 1)  {
        result = (one_nineArray[number]);
        return result;
      }
      if(number >= 10 && number <= 15 && number != 14) {
        result = (eleven_thirteenArray[lastNumberOfnumberString]);
        return result;
      }
      if(number >= 16 && number <= 19 || number == 14) {
        one_nineArray[8] = 'eigh';
        result = (`${one_nineArray[lastNumberOfnumberString]}teen`);
        return result;
      }
      if(number >= 20 && number <= 99) {
        result = (`${two_nineTens[firstNumberOfnumberString - 1]} ${one_nineArray[lastNumberOfnumberString]}`);
        return result;
      }
    }
    if(numb === 0) {
        result = 'zero';
        return result;
    }
    if (numb >= 100) {
      let numbString = numb.toString().split('');
      numbString.splice(0, 1);
      numbString = +numbString.join('');
      result = `${one_nineArray[+numb.toString().split('')[0]]} hundred ${lastTwoTens(numbString)}`;
      return result.trim();
    } else {
      return (lastTwoTens(numb)).trim();
    }
};
