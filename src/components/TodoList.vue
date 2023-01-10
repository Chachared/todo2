<script setup lang="ts">
import type { Todo } from '@/interfaces/todo.interface';
import { useTodos } from '@/stores/todo.store';
import { ref } from 'vue';
import TodoForm from './TodoForm.vue';

const input = ref<string>('');

const todosStore = useTodos();
todosStore.fetchTodos();

function addTodo() {
    todosStore.addTodo(input.value);
    input.value = '';
}

function editTodo(todoId: string, update: Partial<Todo>) {
    todosStore.editTodo(todoId, update);
}

function deleteTodo(todoId: string) {
    todosStore.deleteTodo(todoId);
}


</script>

<template>
    <div class="container">
        <h1 class="my-2">TodoList Vue3</h1>
        <h2 class="mb-5">avec Pinia</h2>
        <div class="border rounded-pill text-center my-3">FILTRES</div>
        <div class="border rounded-pill text-center my-3">
            <input v-model="input" type="text" class="rounded-pill ps-2" />
            <button @click="addTodo" class="btn btn-primary rounded-pill mx-3 my-3">ajouter</button>
        </div>
        <div class="my-3">
            <div v-if="todosStore.isLoading">
                <p class="h5">Chargement en cours</p>
            </div>
            <ul v-else>
                <li v-for="todo in todosStore.todos" :key="todo.content" class="my-3">
                    <div 
                        v-if="!todo.editMode" 
                        @click="editTodo(todo._id!, { done: !todo.done })"
                    >
                        <input 
                            :checked="todo.done" 
                            type="checkbox" 
                            class="me-2"
                        />
                        <span>{{ todo.content }}</span>
                        <button 
                            @click.stop="editTodo(todo._id!, { editMode: true })"
                            class="btn btn-success rounded-pill mx-3"
                        >éditer</button>
                        <button 
                            @click.stop="deleteTodo(todo._id!)"
                            class="btn btn-danger rounded-pill mx-1"
                        >supprimer</button>
                    </div>
                    <div v-else>
                        <TodoForm 
                            :content="todo.content" 
                            @cancel="editTodo(todo._id!, { editMode: false })"
                            @update="editTodo(todo._id!, { editMode: false, content: $event })" 
                        />
                    </div>
                </li>
            </ul>

        </div>

    </div>
</template>

<style scoped>
ul {
    list-style-type: none;
}
</style>