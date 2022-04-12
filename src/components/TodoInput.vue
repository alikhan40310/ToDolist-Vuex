<template>
    <div class="container">
        <h1 class="fw-normal fs-2 mb-3">ToDo App</h1>
        <div class="d-flex gap-3">
            <input placeholder="Enter Value" class="form-control" type="text">
            <button @click="addTodo(23)" class="btn btn-warning">Add</button>
        </div> 
    </div>
        
</template>

<script>
import {mapActions} from  "vuex";
export default {
    data(){
        
    },
    methods: {
        ...mapActions(["addTodo"])
    }
}
</script>

<style>
</style>