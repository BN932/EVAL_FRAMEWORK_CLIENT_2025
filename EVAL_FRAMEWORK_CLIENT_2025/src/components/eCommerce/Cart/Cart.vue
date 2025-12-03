<script setup>
import CartInfo from './CartInfo.vue';
import OneCartItem from './OneCartItem.vue';
import { store } from '@/services/store.js';

</script>
<template>
    <aside class="w-full md:w-1/3 px-4">
        <h2 class="text-xl font-bold mb-4">Votre Panier</h2>
        <div class="cart bg-white rounded-lg shadow animate__animated">
          <ul class="divide-y divide-gray-200 space-y-4 p-6"/>
            <!--Cart item-->
            <OneCartItem v-for="item in store.cartItems" :item=item 
            @removeItem="store.deleteOneById"/>
            <!-- Repeat for other cart items -->
            <CartInfo/>
        </div>
      </aside>
</template>
<style scoped></style>