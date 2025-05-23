/**
 * propósito/Cómo se usa:
 * - Muestra un conjunto de tarjetas destacadas (FeatureCard) organizadas en un grid.
 * - Al hacer clic en ciertas tarjetas, puede redirigir a una ruta específica.
 *
 * Props:
 * - No recibe props directamente, pero usa el componente FeatureCard que sí acepta props como `icon`, `title` y `description`.
 *
 * Relación con otros componentes:
 * - Usa múltiples instancias del componente FeatureCard.
 * - Se integra con Vue Router para la navegación (`router.push`).
 *
 * Responsividad:
 * - Usa un layout en grid que se adapta a diferentes tamaños de pantalla.
 * - En pantallas pequeñas, las tarjetas se apilan en columna y en pantallas medianas y grandes, se distribuyen en varias columnas (según el estilo definido).
 */

<template>
  <div class="features-grid">
    <FeatureCard
      icon="list"
      title="Test de Carreras"
      description="Descubre tus puntos fuertes y encuentra carreras que coincidan con tu personalidad"
    />
    <FeatureCard
      icon="user"
      title="Orientación"
      description="Conéctate con asesores profesionales que pueden ayudarte a tomar decisiones informadas."
    />
    <FeatureCard
      icon="book"
      title="Recursos"
      description="Accede a guías, artículos y herramientas para ayudarte a planificar tu vida académica."
      @click="resource"
    />
    <FeatureCard
      icon="search"
      title="Explora"
      description="Busca tu carrera deseada y filtra el área, presupuesto y puntuación que prefieras."
    />
    <FeatureCard
      icon="user"
      title="Mi perfil"
      description="Revisa tu perfil para ver tu información."
    />
    <FeatureCard
      icon="mail"
      title="Guardados"
      description="Consulta las carreras que has guardado aquí."
    />
  </div>
</template>

<script setup>
import FeatureCard from './FeatureCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function resource() {
  router.push('/resource')
}


</script>
