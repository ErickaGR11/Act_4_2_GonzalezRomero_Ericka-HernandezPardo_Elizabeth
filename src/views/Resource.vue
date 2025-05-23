<script setup>
import HeaderSection from '../components/HeaderSection.vue'
import VideoItem from '../components/VideoItem.vue'
import LecturaItem from '../components/LecturaItem.vue'
import resourceIcon from '../assets/resource.svg'
</script>

<template>
  <div>
    <HeaderSection
      headerText="Recursos"
      :iconSrc="resourceIcon"
    />

    <main class="main-content">
      <section class="videos-section">
        <h2>Videos</h2>
        <br>
        <div class="videos-container">
          <VideoItem
            src="src/assets/videos/video1.jpg"
            alt="Video orientación 1"
            youtubeUrl="https://www.youtube.com/watch?v=hGGL1sA0H5k"
          />
          <VideoItem 
            src="src/assets/videos/video2.jpg"
            youtubeUrl="https://www.youtube.com/watch?v=IOyGoIovLNg"
            alt="Video orientación 2" 
          />
        </div>
      </section>

      <section class="lecturas-section">
        <h2>Lecturas</h2>
        <br>
        <div class="items-container">
          <LecturaItem title="Orientación VS Desorientación - UAM" />
          <LecturaItem title="Proyecto de Vida ¿Cómo elegir una carrera?" />
        </div>
      </section>

      <section class="sesiones-section">
        <h2>Sesiones</h2>
        <br>
        <div class="items-container">
          <LecturaItem title="Sesiones de Orientación Educativa de la UAA" />
        </div>
      </section>
    </main>
  </div>
</template>
