<script setup>
    const props = defineProps({
        id: Number,
        action: {type: String,
                default: 'addOne',
        },
    })
</script>
<template v-slot:actionButton>
    <button
        class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="$emit(action, id)">
        <slot></slot>
    </button>
</template>
<style scoped></style>