<script setup>
import { ref } from "vue";
// import { VMarkdownView } from "vue3-markdown";
// import Markdown from "vue3-markdown-it";
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";

const content = ref("# Hola");
</script>
<template>
  <div class="mt-3">
    <h3 class="text-center text-3xl font-bold">Preview</h3>
  </div>

  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <textarea v-model="content" cols="30"> </textarea>
    <MdPreview :modelValue="content" />
  </div>
</template>
<style scope></style>
