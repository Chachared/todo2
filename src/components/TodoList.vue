<script setup lang="ts">

</script>

<template>
    <div class="container">
        <h1 class="mb-5">TodoList Vue3 / Pinia / Axios</h1>
        <div class="border rounded-pill text-center my-3">FILTRES</div>
        <div class="border rounded-pill text-center my-3">
            <input type="text" class="rounded-pill"/>
            <button class="btn btn-primary rounded-pill mx-3">add</button>
        </div>
        <div class="border rounded-pill my-3">
            <ul>
                <li>LISTE v-for
                    <button class="btn btn-success rounded-pill mx-3">update</button>
                    <button class="btn btn-danger rounded-pill mx-1">delete</button>
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