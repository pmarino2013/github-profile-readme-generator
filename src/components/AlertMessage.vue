<script setup>
const props = defineProps({
  message: String,
  copiado: Boolean,
});
</script>

<template>
  <div
    v-show="copiado"
    class="bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md"
    role="alert"
  >
    <div class="flex">
      <div class="py-1">
        <svg
          class="fill-current h-6 w-6 text-blue-500 mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M2.527 17.856l-.015.028-.014.028c-.122.241-.316.392-.527.392s-.405-.15-.528-.393l-.014-.027c-.29-.454-.295-1.053-.005-1.519l.006-.01L8.469.123a.917.917 0 0 1 1.062-.004l6.972 6.455c.29.266.422.658.34 1.043l-.036.145c-.083.38-.338.686-.697.818h-.003l-.04.014c-.352.1-.71-.084-.978-.354L8.984 2.365l-6.44 10.91zM10 14c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-10c.552 0 1 .448 1 1v6c0 .552-.448 1-1 1s-1-.448-1-1V5c0-.552.448-1 1-1z"
          />
        </svg>
      </div>
      <div>
        <p class="font-bold">¡Listo!</p>
        <p class="text-sm">
          {{ props.message }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scope></style>
