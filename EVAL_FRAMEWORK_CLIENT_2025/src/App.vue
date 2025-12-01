<script setup>
import appHeader from '@/components/appHeader.vue';
import Cart from '@/components/cart/Cart.vue';
import appFooter from '@/components/appFooter.vue';
import '@/main.css';
</script>

<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>EAFC Magasin en ligne</title>
  </head>
  <body class="bg-gray-100">
    <!-- Header -->
    <appHeader/>

    <!-- Main content -->
    <Cart/>

    <!-- Footer -->
    <appFooter/>
  </body>
</template>

<style scoped></style>
