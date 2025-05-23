/**
 * propósito:
 * - Muestra un mensaje de bienvenida o introducción destacado en el dashboard principal.
 * Cómo se usa
 *- Se utiliza al inicio de la vista .
 *
 * Props:
 * @prop {string} title    - Primera parte del encabezado principal.
 * @prop {string} title2   - Segunda parte del encabezado 
 * @prop {string} description - Texto descriptivo 
 *
 * Relación con otros componentes:
 * - Usado dentro del Dashboard junto con HeaderSection y FeaturesGrid.
 * Responsividad:
 * - Se adapta automáticamente al ancho del contenedor padre.
 */

<template>
  <div class="main-card">
    <h1>{{ title }}<br/>{{ title2 }}</h1>
    <p>{{ description }}</p>
    <button class="btn">Empezar ya</button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  title2: String,
  description: String,
})
</script>