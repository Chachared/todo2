import { defineStore } from 'pinia';
import type { Todo } from '@/interfaces/todo.interface';
import { fetchTodos, addTodo, deleteTodo, editTodo } from '@/services/todo.service';

const BASE_URL = 'https://restapi.fr/api/todos';

interface TodoState {
    todos: Todo[];
    isLoading: boolean;
}

export const useTodos = defineStore('todos', {
    state: (): TodoState => ({
        todos: [],
        isLoading: false,
    }),
    getters: {
        todoList(state: TodoState) {
            return state.todos
        }
    },
    actions: {
        async fetchTodos() {
            const todos =  await fetchTodos();
            this.isLoading = true;
            if (Array.isArray(todos)) {
                this.todos = todos;
            } else {
                this.todos = [todos];
            };
            this.isLoading = false;
        },
        async addTodo(content: string) {
            const newTodo =  await addTodo({
                content,
                done: false,
                editMode: false
            });
            this.todos.push(newTodo);
        },
        async deleteTodo(todoId: string) {
            await deleteTodo(todoId);
            this.todos = this.todos.filter((todo) => todo._id !== todoId);
        },
        async editTodo(todoId: string, update: Partial<Todo>) {
            const todoIndex = this.todos.findIndex((todo) => todo._id === todoId);
            const updatedTodo = await editTodo(todoId, {
                ...this.todos[todoIndex],
                ...update
            } as Todo);
            this.todos[todoIndex] = updatedTodo;
        }
    }
});




















//initialFetchTodo