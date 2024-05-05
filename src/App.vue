<script setup>
import { ref } from "vue";
import CabeceraApp from "./components/CabeceraApp.vue";
import PreviewApp from "./components/PreviewApp.vue";
import AdicionalForm from "./components/AdicionalForm.vue";

const opcion = ref("cabecera");

const opcionChange = (valor) => {
  opcion.value = valor;
};
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-2">
      <div>
        <div class="px-8 py-5 flex gap-3">
          <div>
            <button
              class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              :class="
                opcion === 'cabecera'
                  ? 'bg-blue-500 hover:bg-blue-700'
                  : 'bg-slate-500'
              "
              @click="opcionChange('cabecera')"
            >
              Cabecera
            </button>
          </div>
          <div>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              :class="
                opcion === 'adicional'
                  ? 'bg-blue-500 hover:bg-blue-700'
                  : 'bg-slate-500'
              "
              @click="opcionChange('adicional')"
            >
              Adicional
            </button>
          </div>
        </div>

        <!-- carga de datos  -->
        <div v-show="opcion == 'cabecera'">
          <CabeceraApp />
        </div>
        <div v-show="opcion == 'adicional'">
          <AdicionalForm />
        </div>
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
