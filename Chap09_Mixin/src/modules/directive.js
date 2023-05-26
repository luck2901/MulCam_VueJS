export const view = {
  created(el, binding, vnode, prevNode) {
    console.log(el);
    console.log(binding);
    console.log(vnode);
    console.log(prevNode);
  },
  beforeMount() {},
  mounted(el, binding) {
    // console.log(binding.value, typeof(binding.value));       // true, boolean
    if (binding.value === true) el.style.display = 'block';
    else el.style.display = 'none';
  },
  beforeUpdate() {},
  updated(el, binding) {
    if (binding.value === true) el.style.display = 'block';
    else el.style.display = 'none';
  },
  beforeUnmount() {},
  unmounted() {},
};

// 어떠한 hook에서도 동작
export const showHide = (el, binding) => {
  if (binding.value === true) el.style.display = 'block';
  else el.style.display = 'none';
};

// 지시자가 붙은 경우
// modifiers => v-name.속성
export const setColor = (el, binding) => {
  // if (binding.value === binding.oldValue) return;
  if (binding.modifiers.color) el.style.color = binding.value;
  else el.style.color = 'lightgray';
};

// 인수가 붙은 경우
export const setArgs = (el, binding) => {
  // if (binding.value === binding.oldValue) return;
  switch (binding.arg) {
    case 'color':
      el.style.color = binding.value;
      break;
    case 'border':
      el.style.border = '1px solid ' + binding.value;
      el.style.background = 'lightgray';
      break;
    default:
      throw new Error('인수가 지정되지 않았습니다');
  }
};

// DOM 추가
export const makeDOM = (el, binding) => {
  const text = document.createTextNode('**');
  el.appendChild(text);

  el.addEventListener('mouseenter', (evt) => {
    evt.target.style.cursor = 'pointer';
    el.style.background = binding.value;
  });
  el.addEventListener('mouseleave', () => {
    el.style.background = '';
  });
};
