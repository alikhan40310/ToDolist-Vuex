<template>
  <div class="todoitem">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>



  </div>
</template>

<script>
// import todoitem 
import TodoItem from '@/components/TodoItem.vue'
export default {
    name: 'TodoList',
    components: {
     TodoItem,
    }
}
</script>

<style scoped> 

</style>