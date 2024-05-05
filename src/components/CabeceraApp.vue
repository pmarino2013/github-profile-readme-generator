<script setup>
import { ref } from "vue";
import { useDatos } from "../store/useDatos";

import { storeToRefs } from "pinia";

const store = useDatos();

const { contenido } = storeToRefs(store);
const formValues = ref(contenido);
</script>
<template>
  <div class="text-center mt-3">
    <h3 class="font-bold text-3xl">Cabecera</h3>
  </div>
  <div class="max-w-md mx-auto">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="titulo">
          Título
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="titulo"
          type="text"
          placeholder="Ingrese el título"
          v-model="formValues.title"
        />
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="subtitulo"
        >
          Subtítulo
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="subtitulo"
          type="text"
          v-model="formValues.subtitle"
          placeholder="Ingrese el subtítulo"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="acerca">
          Acerca de mí
        </label>
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="acerca"
          placeholder="Ingrese información sobre usted"
          v-model="formValues.about"
        ></textarea>
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="habilidades"
        >
          Habilidades
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="habilidades"
          type="text"
          v-model="formValues.skills"
          placeholder="Ingrese sus habilidades"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="url">
          URL de Banner
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="url"
          v-model="formValues.url"
          type="text"
          placeholder="Ingrese su URL"
        />
      </div>
    </form>
  </div>
</template>
<style scope></style>
