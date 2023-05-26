const app = function () {
  const x = 10;
  const y = 20;
  const appName = 'App';

  const onAdd = () => `${x} + ${y} = ${x + y}`;
  const onMin = (x, y) => `${x} - ${y} = ${x - y}`;
  const getName = () => appName;

  return {
    x: x,
    onAdd: onAdd,
    min: onMin,
    getName: getName,
  };
};

// 파일에서 1개의 요소만 지정할 수 있다.
export default app;

export const z = 100;
