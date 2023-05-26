import { createStore } from 'vuex';

import todoStore from './todoStore';

// main.js에 use 명령으로 등록한다
const rootStore = createStore({
  // share 할 값을 관리
  state: {
    storeName: 'Global Counter',
    cnt: 1,
    contacts: [
      { no: 1001, name: '김유신', tel: '010-1212-3331', address: '경주' },
      { no: 1002, name: '장보고', tel: '010-1212-3332', address: '청해진' },
      { no: 1003, name: '관창', tel: '010-1212-3333', address: '황산벌' },
    ],
  },
  // state에 있는 값을 변경할 함수를 지정
  // component에서 commit 명령으로 호출한다
  mutations: {
    // state => 위에 있는 state 객체
    // payload => 이 함수가 호출되면서 전달되는 값
    increase(state, payload) {
      state.cnt = state.cnt + payload;
    },
    decrease(state) {
      state.cnt = state.cnt - 1;
    },
  },
  // mutations에 있는 함수가 호출되지 전 사전 처리 작업을 정의
  // ex] axios(비 동기 처리 등..)
  // dispatch()로 호출한다
  actions: {
    // action.commit 명령으로 mutations의 메서드 호출
    // payload => 이 함수가 호출되면서 전달되는 값
    decreaseAction(action) {
      setTimeout(() => {
        action.commit('decrease');
      }, 1000);
    },
  },
  // state에 있는 값을 기반으로 수정된 값이 필요한 경우
  // computed와 동일한 기능
  getters: {
    contactSize: (state) => state.contacts.length,
    getFirst: (state) => state.contacts[0],
    getItem: (state) => (no) => state.contacts.find((item) => item.no === Number(no)),
  },
  // 외부 store에 등록될 파일을 정의한다
  // 또는 여기서 직접 정의해도 된다
  modules: {
    todoStore,
    /*
    todoStore: {
      namespaced: true,
      state: {},
      mutations: {},
    },
    */
  },
});
export default rootStore;
