<script setup>
    const props = defineProps({
        param: String,
        action: String,
    })
</script>
<template>
    <button
        class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="$emit(action, param)">
        <slot></slot>
    </button>
</template>
<style scoped></style>