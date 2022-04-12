import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, title: "one " },
      { id: 2, title: "two " },
      { id: 3, title: "three " },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
      console.log(state.todos);
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('add_todo', todo);
    }
  },
  modules: {
  }
})
