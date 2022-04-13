<template>
    <div class="container">
        <h1 class="fw-normal fs-2 mb-3">ToDo App</h1>
        <div class="d-flex gap-3">
            <input @change="todoTextChange" v-bind:value="todoText" placeholder="Enter Value" class="form-control" type="text">
            <button @click="addTodoI" class="btn btn-warning">Add</button>
        </div> 
    </div>
        
</template>

<script>
import {mapActions} from  "vuex";
import {v1} from "uuid";
export default {
    data(){
        return {
            todoText : "",
        }
    },
    methods: {
        
        ...mapActions(["addTodo"]),
        todoTextChange(e){
            this.todoText = e.target.value;
        },
        addTodoI() {
            this.addTodo({
                id: v1(),
                title: this.todoText
            });
            this.todoText = "";
            // if todoText empty then do not add
            if(this.todoText === ""){
                return;
            }
            console.log("result");

        }
    }
}
</script>

<style>
</style>