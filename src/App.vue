<script setup>
import { ref } from "vue";
import CabeceraApp from "./components/CabeceraApp.vue";
import PreviewApp from "./components/PreviewApp.vue";
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-2">
      <div>
        <!-- <div class="px-8 py-5 flex gap-3">
          <div>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cabecera
            </button>
          </div>
          <div>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Adicional
            </button>
          </div>
        </div> -->
        <ul class="flex border-b border-gray-200">
          <li class="-mb-px mr-1">
            <a
              href="#"
              class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
              >Píldora 1</a
            >
          </li>
          <li class="mr-1">
            <a
              href="#"
              class="bg-white inline-block py-2 px-4 text-gray-500 hover:text-blue-700 font-semibold"
              >Píldora 2</a
            >
          </li>
          <li class="mr-1">
            <a
              href="#"
              class="bg-white inline-block py-2 px-4 text-gray-500 hover:text-blue-700 font-semibold"
              >Píldora 3</a
            >
          </li>
        </ul>

        <!-- carga de datos  -->
        <CabeceraApp />
      </div>
      <div>
        <!-- preview -->
        <PreviewApp />
        <!-- código  -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
