


/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
function sleep(ms) {
    const wakeUp = Date.now() + ms;
    while (Date.now() < wakeUp) {}
  }
  
  function one() {
    console.log('--------- START ---------');
    sleep(2000);
    const result = 2000;
    console.log(`ONE: ${result}`);
    console.log('--------- END ---------');
  }
  // one();
  
  function two() {
    console.log('--------- START ---------');
    setTimeout(() => {
      const result = 2000;
      console.log(`TWO: ${result}`);
    }, 2000);
    console.log('--------- END ---------');
  }
  // two();
  
  function three() {
    console.log('--------- START ---------');
    setTimeout(() => {
      const result = 3000;
      console.log(`THREE: ${result}`);
  
      // 두번째 시간이 걸리는 작업
      setTimeout(() => {
        const value = 1000 + result;
        console.log(`THREE Value: ${value}`);
      }, result);
    }, 2000);
    console.log('--------- END ---------');
  }
  // three();
  
  function four(callback) {
    console.log('--------- START ---------');
    setTimeout(() => {
      const result = 2000;
      console.log(`FOUR: ${result}`);
      // console.log(callback);
      callback(result);
    }, 2000);
    console.log('--------- END ---------');
  }
  // four( (x) => {
  //   console.log('Hello world', x);
  // });
  
  function five(ms) {
    // resolve => then이 전달하는 함수 () => console.log('Success')
    // reject => catch가 전달하는 함수 () => console.error('Error')
    const promise = new Promise((resolve, reject) => {
      if (ms < 1000) reject(new Error('시간이 너무 짧습니다...'));
      else {
        setTimeout(() => {
          const result = 3000;
          resolve(result);
        }, ms);
      }
    });
  
    return promise;
  }
  
  /*
  five(2000)
    .then((resp) => {
      console.log(resp);
  
      // 결과값 기반으로 다시 시간 걸리는 작업이 필요한 경우 여기서 요청
      // 결과 처리는 다음 then이 받아 처리한다
      return five(3000);
    })
    .then((resp) => {
      console.log(`두번째 ${resp}`);
  
      // 일반 값(시간 걸리는 작업 아님)도 return 하면 다음 then이 받아 처리할 수 있음
      return 1000;
    })
    .then((resp) => {
      console.log(`세번째 ${resp}`);
    })
    .catch((err) => console.error(err));
  */
  
  /*
  const pro = five(2000);
  pro.then((resp) => {
    console.log(resp);
    return five(3000);
  });
  pro.then((resp) => {
    console.log(resp);
  });
  pro.catch((err) => console.error(err));
  */
  
  // ES2017
  // async ~ await
  // 함수 기반으로 구현해야 한다
  async function fiveProcess() {
    try {
      const resp01 = await five(2000); // 값이 리턴될때까지 대기
      console.log(`one: ${resp01}`);
  
      const resp02 = await five(3000);
      console.log(`two: ${resp02}`);
    } catch (err) {
      console.error(err);
    }
  }
  
  fiveProcess();
  console.log('--------- 프로그램 종료 ---------');
  
  
  
  