async function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Texto copiado al portapapeles:", text);
      // Aquí puedes agregar cualquier lógica adicional después de copiar el texto
      return "Texto copiado al portapapeles";
    })
    .catch((error) => {
      console.error("Error al copiar el texto:", error);
      return "Error al copiar el texto";
    });
}

export { copyToClipboard };
