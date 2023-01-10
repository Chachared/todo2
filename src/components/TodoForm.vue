<script setup lang="ts">
import type { Todo } from '@/interfaces/todo.interface';
import { ref } from 'vue';


const props = defineProps<{ 
    content: string
}>();

const emit = defineEmits<{
    (e: 'cancel'): Partial<Todo>;
    (e: 'update', updatedContent: string): Partial<Todo>;
}>();

const input = ref<string>(props.content);
</script>

<template>
    <div class="container">
        <div class="todo-content">
            <input 
                v-model="input" 
                type="text"
                class="flex-fill"
            />
            <button 
                @click="$emit('update', input)"
                class="btn btn-success rounded-pill"
            >éditer
            </button>
            <button 
                @click="$emit('cancel')"
                class="btn btn-danger rounded-pill"
            >annuler
            </button>
        </div>
    </div>
</template>

<style scoped>
    
</style>