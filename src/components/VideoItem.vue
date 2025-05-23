/**
 * propósito: Muestra una imagen representativa de un video.
 * cómo se usa:
  * - Al hacer clic en la imagen, se abre el video en una nueva pestaña.
* Props:
 * @prop {string} src - Ruta de la imagen del video.
 * @prop {string} alt - Texto alternativo para la imagen.
  * @prop {string} youtubeUrl - URL del video de YouTube.
 * Relación con otros componentes:
 * - Usado dentro del componente principal de Recursos,
 *   específicamente en la sección de videos.
 *
 * Responsividad:
 * - Se adapta automáticamente al ancho del contenedor.
 * - En pantallas pequeñas se muestra en columna.
 * - En pantallas grandes se acomoda en fila, junto a otros elementos.
 */
<template>
  <div class="video-item" @click="openVideo">
    <img :src="src" :alt="alt" class="video-img" />
  </div>
</template>

<script setup>
const props = defineProps({
  src: String,
  alt: String,
  youtubeUrl: String,
})

function openVideo() {
  if (props.youtubeUrl) {
    window.open(props.youtubeUrl, '_blank')
  }
}
</script>

<style scoped>
.video-item {
  width: 100%;
  max-width: 400px;
}

.video-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  
}
</style>
