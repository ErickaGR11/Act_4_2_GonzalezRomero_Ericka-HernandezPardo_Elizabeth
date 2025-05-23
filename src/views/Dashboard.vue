<template>
  <div class="app">
    <HeaderSection />
    <div class="content">
      <MainCard
        title="Encuentra tu camino"
        title2="Universitario"
        description="Te ayudaremos a elegir la carrera perfecta con pruebas y recursos"
      />
      <FeaturesGrid />
    </div>
  </div>
</template>

<script setup>
import HeaderSection from '../components/HeaderSection.vue'
import MainCard       from '../components/MainCard.vue'
import FeaturesGrid   from '../components/FeaturesGrid.vue'
</script>
