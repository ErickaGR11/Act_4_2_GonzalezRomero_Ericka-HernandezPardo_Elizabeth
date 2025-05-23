/**
 * propósito/Cómo se usa:
 * - Muestra el título del recurso.
 * Props:
 * @prop {string} title - Título del recurso que se muestra dentro del botón.
 *
 * Relación con otros componentes:
 * - Usado dentro del componente principal de Recursos,
 * dentro de la sección de Lecturas y de sesiones.
 *
 * Responsividad:
 * - Se adapta al ancho del contenedor en pantallas pequeñas.
 * - En pantallas más grandes, toma un ancho fijo de 483px.
 */
<template>
  <button>
    {{ title }}
  </button>
</template>

<script setup>
defineProps({
  title: String
});
</script>

<style scoped>
button {
  display: block;
  min-height: 110px;
  width: 100%;
  max-width: 483px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: #660033;
  color: white;
  font-size: 1.2rem;
  border: none;
  text-align: left;
}

@media (min-width: 768px) {
  button {
    width: 483px;
  }
}
</style>
