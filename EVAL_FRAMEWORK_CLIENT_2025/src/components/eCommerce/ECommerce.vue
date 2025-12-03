<script setup>
  import Products from '@/components/eCommerce/products/Products.vue';
  import Cart from '@/components/eCommerce/Cart/Cart.vue';
  const props = defineProps({
    apiURL: {type: String, required: true},
    })
</script>
<template>
      <main class="container mx-auto py-8 px-4 flex flex-wrap">
        <!-- Products Section -->
        <Products :apiURL = props.apiURL />
        <!-- Shopping Cart Section -->
        <Cart/>
    </main>
</template>
<style scoped></style>