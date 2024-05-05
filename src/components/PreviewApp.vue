<script setup>
import { ref, watch } from "vue";
import { useDatos } from "../store/useDatos";
// import { storeToRefs } from "pinia";
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";
import CopyApp from "./CopyApp.vue";

const store = useDatos();

// const { contenido } = storeToRefs(store);

const estructura = ref(`### Hola 👋, ${store.contenido.title}
#### ${store.contenido.subtitle}
![Soy un generador de readme profile](${store.contenido.url})

${store.contenido.about}

Skills: ${store.contenido.skills}

- 🔭 I’m currently working on this page. 

`);

watch(
  () => store.contenido,
  (newState, oldState) => {
    estructura.value = `### Hola 👋, ${newState.title}
#### ${newState.subtitle}
![Soy un generador de readme profile](${newState.url})

${newState.about}

Skills: ${newState.skills}

- 🔭 I’m currently working on this page. 

`;
  },
  { deep: true }
);

// const content = ref("# Hola");
</script>
<template>
  <div class="mt-3">
    <h3 class="text-center text-3xl font-bold">Preview</h3>
  </div>

  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <!-- <textarea v-model="content" cols="30"> </textarea> -->
    <MdPreview :modelValue="estructura" />
  </div>
  <CopyApp :estructura="estructura" />
</template>
<style scope></style>
