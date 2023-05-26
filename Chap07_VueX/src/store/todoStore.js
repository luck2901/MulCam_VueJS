const todoListStore = {
  namespaced: true,
  state: {
    todoList: [
      { id: 1, text: '첫 번째 할 일', done: true },
      { id: 2, text: '두 번째 할 일', done: false },
      { id: 3, text: '세 번째 할 일', done: false },
    ],
    text: '',
    cnt: 4,
  },
  mutations: {
    updateTodo(state, payload) {
      // payload => id
      // console.log(payload);
      const index = state.todoList.findIndex((item) => item.id === Number(payload));
      console.log(index);
      state.todoList[index].done = !state.todoList[index].done;
    },
    deleteTodo(state, payload) {
      // payload => id
      const index = state.todoList.findIndex((item) => item.id === Number(payload));
      state.todoList.splice(index, 1);
    },
    addTodo(state, payload) {
      // payload => text (할 일)
      const todo = { id: state.cnt++, text: payload, done: false };
      state.todoList.push(todo);
    },
    changeText(state, payload) {
      // payload => text (할 일)
      state.text = payload;
    },
  },
  actions: {},
  getters: {},
  modules: {},
};
export default todoListStore;
