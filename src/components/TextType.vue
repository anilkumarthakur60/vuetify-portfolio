<template>
    
    <vue-typer
  :text='["Full Stack Developer","Professional Coder"]'
  :repeat='Infinity'
  :shuffle='false'
  initial-action='typing'
  :pre-type-delay='70'
  :type-delay='70'
  :pre-erase-delay='2000'
  :erase-delay='250'
  erase-style='clear'
  :erase-on-complete='false'
  caret-animation='smooth'
></vue-typer>
</template>
<script>

import { VueTyper } from 'vue-typer'
export default {
    name:"TextType",
   components: {VueTyper
  },
}
</script>
<style>

.vue-typer .custom.char.typed {
  color: #ff014f;
}
.vue-typer .custom.char.selected {
  color: #E91E63;
}
</style>