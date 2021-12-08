<template>
 <v-col lg="3" md="3" sm="12">
  <v-hover v-slot="{ hover }"  >
    <v-card
      class="mx-auto rounded-xl"
      
    
    >
      <v-img
      
        :src="image"   class="rounded-xl "
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal text-h2 white--text"
            style="height: 100%;"
          >
          <v-img :src="image"  class="rounded-xl"></v-img>
          </div>
        </v-expand-transition>
      </v-img>

      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
     
        <h3 class="text-h4 font-weight  mb-2">
          {{ name }}
        </h3>
        <div class=" text-justify    text-subtitle-2 mb-2">
          {{text}}
         
        </div>
      </v-card-text>
    </v-card>

  
  </v-hover>
 </v-col>
</template>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>

<script>
export default {
    name:"WhatIDo",
    props:["name","image","text"],
    
  

}
</script>