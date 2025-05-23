/**
 * propósito/Cómo se usa: Muestra el encabezado de la página en caso de ser necesario, incluyendo un título y un ícono de inicio en la esquina superior derecha
 el default no lleva titulo, ni el icono.
 * Props:
  * @prop {string} headerText - Título del encabezado que se muestra en la parte superior de la página.
  * @prop {string} iconSrc - Ruta de la imagen del ícono que se muestra en la esquina superior derecha.
  * Si no se proporciona, no se mostrará el ícono.
  * Si no se proporciona, no se mostrará el título.
 * Relación con otros componentes:
 * - Usado como cabecera en el componente principal de dashboard y recursos.
 *
 * Responsividad:
 * - El título y el ícono se ajustan al tamaño de pantalla.
 */

<template>
  <div class="header">
    <h1 v-if="headerText" class="header-title">{{ headerText }}</h1>
    <router-link
      v-if="iconSrc"
      class="header-icon"
      :to="'/'"
      title="Ir a Dashboard"
    >
      <img :src="iconSrc" alt="icon" />
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  headerText: {
    type: String,
    default: ''
  },
  iconSrc: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.header {
  width: 100%;
  height: 13rem;
  background-color: #18305B;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.header-title {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 800;
}

.header-icon {
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  cursor: pointer;
}

.header-icon img {
  width: 2.5rem;
  height: 2.5rem;
  display: block;
}
</style>
