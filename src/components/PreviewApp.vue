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

`);

const datosAdicionales = ref("");

watch(
  () => store.contenido,
  (newState, oldState) => {
    estructura.value = `### Hola 👋, ${newState.title}
#### ${newState.subtitle}
![Soy un generador de readme profile](${newState.url})

${newState.about}

Skills: ${newState.skills}

`;
  },
  { deep: true }
);

watch(
  () => store.adicionales,
  (newState, oldState) => {
    datosAdicionales.value = `
    \n${
      newState.trabajando &&
      "- 🛠️ Estoy trabajando en " + newState.trabajando + "\n"
    }${
      newState.aprendiendo &&
      "- 📖 Estoy aprendiendo " + newState.aprendiendo + "\n"
    }${
      newState.colaborar &&
      "- 👯 Quiero colaborar con " + newState.colaborar + "\n"
    }${newState.ayuda && "- 🤔 Necesito ayuda con " + newState.ayuda + "\n"}${
      newState.pregunta &&
      "- 💬 Preguntame acerca de " + newState.pregunta + "\n"
    }${
      newState.contacto && "- 📭 Cómo contactarme: " + newState.contacto + "\n"
    }${newState.pronombre && "- 😄 Pronombres: " + newState.pronombre + "\n"}${
      newState.curioso && "- ⚡ Dato curioso: " + newState.curioso + "\n"
    }
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
    <!-- <textarea v-model="content" cols="30"> </textarea>   -->
    <MdPreview :modelValue="estructura" />
    <MdPreview :modelValue="datosAdicionales" />
  </div>
  <CopyApp :estructura="estructura" :datosAdicionales="datosAdicionales" />
</template>
<style scope></style>
