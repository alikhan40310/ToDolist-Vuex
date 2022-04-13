<template>
  <div class="container">
    <div>
      <div v-if="todo" class="d-flex my-3 justify-content-between align-items-center text-align-center">
        <h3 class="col-md-4">{{ todo.title  }}</h3>
        <div class="mt-auto">
          <button class="btn btn-primary mx-2">Edit</button>
          <button @click="deleteTodo(todo.id)" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import mapactions
import { mapActions } from "vuex";
export default {
  props: {
    todo: {},
  },
  methods: {
    ...mapActions(["deleteTodo"]),
  },
}
</script>

<style>
</style>