<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { z } from 'zod';
import { toFormValidator } from '@vee-validate/zod';

//declarer const todo ?

const props = defineProps<{ content:string }>();

const required = { required_error: 'Veuillez renseigner le champ' };
const validationSchema = toFormValidator(
    z.object({
        content: z.string(required).min(3, { message: 'La todo doit faire au moins 3 caractères' }).max(20, { message:'La todo ne doit pas dépasser 20 caractères' })
    })
);

useForm({
    validationSchema
});

const content = useField("content");


</script>

<template>
    <div class="container">
        <form>
            <div class="todo-content">
                <input v-model="content.value.value" type="text"/>
                <button class="btn btn-success rounded-pill">edit</button>
                <button class="btn btn-danger rounded-pill">cancel</button>
            </div>  
            <div v-if="content.errorMessage.value" class="form-error">
                <small>{{ content.errorMessage.value }}</small>
            </div> 
        </form>
    </div>
</template>

<style scoped>
    
</style>