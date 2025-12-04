<script setup>
import { onMounted } from "vue";
import CartInfo from './CartInfo.vue';
import OneCartItem from './OneCartItem.vue';
import { storeShoppingCart } from '@/services/storeShoppingCart.js';
onMounted (() => {
        storeShoppingCart.setup();
    });

</script>
<template>
    <aside class="w-full md:w-1/3 px-4">
        <h2 class="text-xl font-bold mb-4">Votre Panier</h2>
        <div class="cart bg-white rounded-lg shadow animate__animated">
          <ul class="divide-y divide-gray-200 space-y-4 p-6"/>
            <!--Cart item-->
            <OneCartItem v-for="item in storeShoppingCart.cartItems" :item=item :key="item.id"
            @removeOneItem="storeShoppingCart.deleteOneById"/>
            <!-- Repeat for other cart items -->
            <CartInfo/>
        </div>
      </aside>
</template>
<style scoped></style>