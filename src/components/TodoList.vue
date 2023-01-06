<script setup lang="ts">
import { useTodos } from '@/stores/todo.store';
import { ref } from 'vue';

const todosStore = useTodos();
const input = ref<string>('');

function addTodo() {
    todosStore.addTodo(input.value);
    input.value='';
}

function deleteTodo(todoId: string) {
    todosStore.deleteTodo(todoId);
}


</script>

<template>
    <div class="container">
        <h1 class="my-2">TodoList Vue3</h1>
        <h2 class="mb-5">Pinia / Axios / VeeValidate / Zod</h2>
        <div class="border rounded-pill text-center my-3">FILTRES</div>
        <div class="border rounded-pill text-center my-3">
            <input v-model="input" type="text" class="rounded-pill ps-2"/>
            <button @click="addTodo" class="btn btn-primary rounded-pill mx-3 my-3">add</button>
        </div>
        <div class="my-3">
            <div v-if="todosStore.isLoading">
                <p class="h5">Chargement en cours</p>
            </div>
            <ul v-else>
                <li v-for="todo in todosStore.todos" class="my-3">
                    {{ todo.content }}
                    <button class="btn btn-success rounded-pill mx-3">update</button>
                    <button @click.stop="deleteTodo(todo._id!)" class="btn btn-danger rounded-pill mx-1">delete</button>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<style scoped>
ul {
    list-style-type: '-- ';
}
</style>