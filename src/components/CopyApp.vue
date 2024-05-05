<script setup>
const props = defineProps({
  estructura: String,
});
import { ref } from "vue";
import AlertMessage from "./AlertMessage.vue";

const copiado = ref(false);
const message = ref("");

const copiarDatos = () => {
  navigator.clipboard
    .writeText(props.estructura)
    .then(() => {
      console.log("Texto copiado al portapapeles:", props.estructura);
      message.value =
        "Texto para README de tu profile copiado y listo para usar.";
      copiado.value = true;
      setTimeout(() => {
        copiado.value = false;
      }, 2000);
    })
    .catch((error) => {
      console.error("Error al copiar el texto:", error);
      copiado.value = false;
    });
};
</script>
<template>
  <div class="my-3 flex justify-between px-8">
    <h3 class="text-center text-3xl font-bold">Código</h3>
    <div>
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="copiarDatos"
      >
        Copiar
      </button>
    </div>
  </div>

  <!-- alerta  -->
  <div class="px-8">
    <AlertMessage :copiado="copiado" :message="message" />
  </div>
  <!-- fin  -->

  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <textarea
      class="resize border rounded-md p-2 w-full h-32 focus:outline-none focus:ring focus:border-blue-500 text-slate-500"
      readonly
      >{{ estructura }}</textarea
    >
  </div>
</template>
<style scope></style>
