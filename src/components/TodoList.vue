<template>
  <div class="todoitem" v-for="todo in allTodos" :key="todo.id">
    <TodoItem :todo="todo" />
  </div>
</template>

<script>
// import todoitem 
import TodoItem from '@/components/TodoItem.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters(['allTodos'])
  },
}
</script>

<style scoped>
</style>