<script setup>
  import { onMounted } from "vue";
  import Product from './Product.vue';
  import { store } from '@/services/store.js';
  const props = defineProps({
    apiURL: {type: String, required: true},
    })
    onMounted (async () => {
        store.setup(props.apiURL);
    });
</script>
<template>
    <section class="w-full md:w-2/3 px-4 mb-8">
        <h1 class="text-3xl font-bold mb-4">Nouveaux produits</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Product card example -->
          <product v-for="product in store.products" 
          :product=product
          @addItemToCart="store.addOne" />

          <!-- Repeat for other products -->
        </div>
      </section>
</template>
<style scoped></style>