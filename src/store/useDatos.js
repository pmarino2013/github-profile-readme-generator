import { defineStore } from "pinia";
import { ref } from "vue";

export const useDatos = defineStore("datos", () => {
  const contenido = ref({
    title: "Soy Pablo Marino",
    subtitle: "Informático y creador de contenido",
    about: "Soy apasionado por la tecnología y desarrollador web",
    skills: "VUE | HTML | CSS",
    url: "https://i.pinimg.com/736x/d2/dc/d4/d2dcd4e515f401cc834e6ae5ba0dbd1a.jpg",
  });

  const agregarDatos = (objeto) => {
    contenido.value = objeto;
  };

  return { contenido, agregarDatos };
});
