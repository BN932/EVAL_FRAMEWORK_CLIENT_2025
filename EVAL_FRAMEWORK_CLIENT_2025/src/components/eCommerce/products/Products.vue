<script setup></script>
<template>
    <section class="w-full md:w-2/3 px-4 mb-8">
        <h1 class="text-3xl font-bold mb-4">Nouveaux produits</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Product card example -->
          <article class="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://picsum.photos/300/200/?random=1"
              alt="Product image"
              class="w-full"
            />
            <div class="p-4">
              <h2 class="font-bold text-lg mb-2">Nom du produit</h2>
              <p class="text-gray-700">€50.00</p>
              <button
                class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Ajouter
              </button>
            </div>
          </article>

          <article class="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://picsum.photos/300/200/?random=2"
              alt="Product image"
              class="w-full"
            />
            <div class="p-4">
              <h2 class="font-bold text-lg mb-2">Nom du produit</h2>
              <p class="text-gray-700">€50.00</p>
              <button
                class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Ajouter
              </button>
            </div>
          </article>

          <article class="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://picsum.photos/300/200/?random=3"
              alt="Product image"
              class="w-full"
            />
            <div class="p-4">
              <h2 class="font-bold text-lg mb-2">Nom du produit</h2>
              <p class="text-gray-700">€50.00</p>
              <button
                class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Ajouter
              </button>
            </div>
          </article>

          <article class="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://picsum.photos/300/200/?random=4"
              alt="Product image"
              class="w-full"
            />
            <div class="p-4">
              <h2 class="font-bold text-lg mb-2">Nom du produit</h2>
              <p class="text-gray-700">€50.00</p>
              <button
                class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Ajouter
              </button>
            </div>
          </article>
          <!-- Repeat for other products -->
        </div>
      </section>
</template>
<style scoped></style>