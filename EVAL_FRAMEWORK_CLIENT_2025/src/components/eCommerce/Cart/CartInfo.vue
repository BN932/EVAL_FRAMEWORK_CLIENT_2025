<script setup>
  import { storeShoppingCart } from '@/services/storeShoppingCart.js';
  import actionButton from '@/components/ui/ActionButton.vue';
</script>
<template>
  <div class="p-6">
                <!--SubTotal-->
              <div class="flex justify-between mb-1">
                <span><strong>Total HTVA:</strong></span>
                <span>€{{storeShoppingCart.subTotal}}</span>
              </div>
              <!--Tax-->
              <div class="flex justify-between mb-1">
                <span><strong>Taxe (21%):</strong></span>
                <span>€{{ storeShoppingCart.VATTotal }}</span>
              </div>
              <!--Shipping-->
              <div class="flex justify-between items-center my-8">
                <span><strong>Choisissez la livraison:</strong></span>
                <select class="form-select py-1 px-2 block w-full rounded border border-gray-300 ml-2"
                v-model.number="storeShoppingCart.deliveryCost"
                >
                  <option value="5" >Standard - €5</option>
                  <option value="15">Express - €15</option>
                </select>
              </div>
              <!--Total-->
              <div class="flex justify-between font-bold mb-1 text-xl">
                <span><strong>Total Général:</strong></span>
                <span>€{{ storeShoppingCart.total }}</span>
              </div>
              <actionButton :action="'Order'" >
                <slot name="actionButton">Procéder au paiement</slot>
              </actionButton>
  </div>
</template>
<style scoped></style>