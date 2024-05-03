<script setup>
import CabeceraApp from "./components/CabeceraApp.vue";
import PreviewApp from "./components/PreviewApp.vue";
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-2">
      <div>
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
