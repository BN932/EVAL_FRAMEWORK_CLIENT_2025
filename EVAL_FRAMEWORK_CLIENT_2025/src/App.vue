<script setup>
import appHeader from '@/components/appHeader.vue';
import ECommerce from '@/components/eCommerce/ECommerce.vue';
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
    <ECommerce apiURL="https://68ad9558a0b85b2f2cf3e221.mockapi.io/"/>

    <!-- Footer -->
    <appFooter/>
  </body>
</template>

<style scoped></style>
