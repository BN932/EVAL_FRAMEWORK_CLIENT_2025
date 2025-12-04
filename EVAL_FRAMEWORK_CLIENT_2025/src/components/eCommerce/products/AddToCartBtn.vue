<script setup>
    const props = defineProps({
        id: Number,
    })
</script>
<template>
    <button
        class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="$emit('addOne', id)">
        Ajouter
    </button>
</template>
<style scoped></style>