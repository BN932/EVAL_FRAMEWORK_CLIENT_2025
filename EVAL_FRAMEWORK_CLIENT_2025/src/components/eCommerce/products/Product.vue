<script setup>
    import ActionButton from '../../ui/ActionButton.vue';
    const props = defineProps({
        product: Object,
    })
    const imgUrl = 'https://picsum.photos/300/200/?random='+ props.product.id;
</script>
<template>
    <article class="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              :src="imgUrl"
              alt="Product image"
              class="w-full"
            />
            <div class="p-4">
              <h2 class="font-bold text-lg mb-2">{{ product.name }}</h2>
              <p class="text-gray-700">€{{ product.price }}</p>
              <actionButton :param="product.id" :action="'addOne'" @addOne="$emit('addOneItemToCart', $event)">
                Ajouter</actionButton>
            </div>
          </article>
</template>
<style scoped></style>