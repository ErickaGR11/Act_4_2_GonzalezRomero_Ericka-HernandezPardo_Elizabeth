/**
 * propósito/Cómo se usa:
 * - Muestra una tarjeta destacada con un ícono, título y descripción.
 * - Se utiliza para representar opciones de navegación o funcionalidades clave.
 * - Al hacer clic en la tarjeta, redirige a la vista necesaria.
 *
 * Props:
 * @prop {string} icon - Clave del ícono a mostrar (ej. 'book', 'list', 'users', etc.).
 * @prop {string} title - Título que describe la funcionalidad.
 * @prop {string} description - Texto breve explicativo debajo del título.
 *
 * Relación con otros componentes:
 * - Usado en la pantalla principal dashboard y dentro de un grid.
 *
 * Responsividad:
 * - Se adapta al ancho disponible en pantallas pequeñas, en pantallas medianas y grandes se acomoda en fila dentro de un grid responsivo.
 */
<template>
  <div class="feature-card"  @click="$emit('click')">
    <div class="icon-container">
      <img v-if="iconSrc" :src="iconSrc" alt="icon" />
    </div>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  icon:        String,  
  title:       String,
  description: String,
})

//iconos .svg
import listIcon   from '../assets/list.svg'
import usersIcon  from '../assets/users.svg'
import bookIcon   from '../assets/book.svg'
import searchIcon from '../assets/search.svg'
import userIcon   from '../assets/user.svg'
import mailIcon   from '../assets/mail.svg'

const icons = {
  list:   listIcon,
  users:  usersIcon,
  book:   bookIcon,
  search: searchIcon,
  user:   userIcon,
  mail:   mailIcon,
}

const iconSrc = icons[props.icon] || ''
</script>
