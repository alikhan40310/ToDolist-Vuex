<template>
  <div class="app ">
    <TodoInput />
    <TodoList />
    <TodoItem />
    </div>
    
</template>

<script>
// import todoinput
import TodoInput from './components/TodoInput.vue'
// import todolist
import TodoList from './components/TodoList.vue'
// import todoitem
import TodoItem from './components/TodoItem.vue'
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList,
    TodoItem,
  }
}
</script>

<style>
  .app{
    margin-top: 4rem;
  }
</style>
