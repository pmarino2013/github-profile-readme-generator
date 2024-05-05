<script setup>
import { ref } from "vue";
import { useDatos } from "../store/useDatos";
import { storeToRefs } from "pinia";

const store = useDatos();

const { adicionales } = storeToRefs(store);
const formValues = ref(adicionales);
</script>
<template>
  <div class="text-center my-3">
    <h3 class="font-bold text-3xl">Datos adicionales</h3>
  </div>
  <div
    class="grid grid-cols-2 gap-3 max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
  >
    <div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="titulo">
          🔭 Estoy trabajando en...
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="titulo"
          type="text"
          placeholder="Ingrese el título"
          v-model="formValues.trabajando"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="titulo">
          👯 Quiero colaborar con...
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="titulo"
          type="text"
          placeholder="Ingrese el título"
          v-model="formValues.colaborar"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="titulo">
          💬 Preguntame acerca de...
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="titulo"
          type="text"
          placeholder="Ingrese el título"
          v-model="formValues.pregunta"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="titulo">
          😄 Pronombres:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="titulo"
          type="text"
          placeholder="Ingrese el título"
          v-model="formValues.pronombre"
        />
      </div>
    </div>
    <!-- segunda columna  -->
    <div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="titulo">
          🌱 Estoy aprendiendo...
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="titulo"
          type="text"
          placeholder="Ingrese el título"
          v-model="formValues.aprendiendo"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="titulo">
          🤔 Necesito ayuda con...
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="titulo"
          type="text"
          placeholder="Ingrese el título"
          v-model="formValues.ayuda"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="titulo">
          📫 Como contactarme:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="titulo"
          type="text"
          placeholder="Ingrese el título"
          v-model="formValues.contacto"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="titulo">
          ⚡ Dato curioso:
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="titulo"
          type="text"
          placeholder="Ingrese el título"
          v-model="formValues.curioso"
        />
      </div>
    </div>
  </div>
</template>
<style scope></style>
