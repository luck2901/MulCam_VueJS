/* eslint-disable no-redeclare */
/* eslint-disable no-var */
(function () {
  // ES5. 함수 리터럴
  const yourHello = function () {
    return 1;
  };

  console.log('1 => ' + yourHello());

  {
    const yourHello = function () {
      return 2;
    };

    console.log('2 => ' + yourHello());
  }

  console.log('3 => ' + yourHello());
  console.log('');

  // ES6. Function
})();
