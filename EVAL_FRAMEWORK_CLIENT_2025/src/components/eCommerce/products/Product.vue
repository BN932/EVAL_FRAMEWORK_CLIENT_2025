<script setup>
    import AddToCartBtn from './AddToCartBtn.vue';
    const props = defineProps({
        product: Object,
    })
</script>
<template>
    <article class="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://picsum.photos/300/200/?random={{ product.id }}"
              alt="Product image"
              class="w-full"
            />
            <div class="p-4">
              <h2 class="font-bold text-lg mb-2">{{ product.name }}</h2>
              <p class="text-gray-700">€{{ product.price }}</p>
              <addToCartBtn :id="Number(product.id)" @addOne="$emit('addOneItemToCart', $event)"/>
            </div>
          </article>
</template>
<style scoped></style>