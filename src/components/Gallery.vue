<template>
<div class="">
     <!-- <button @click="showSingle">Single Lightbox.</button>
    <button @click="showMultiple">Gallery Lightbox</button> -->
    <!-- all props & events -->
    <vue-easy-lightbox
      
      
      
      :visible="visible"
      :imgs="imgs"
      :index="index"
      
      @hide="handleHide"
    >
    
    </vue-easy-lightbox>

  <div class="">
    <v-row>
      <v-col lg="3" md="4" sm="6" v-for="(img,x) in imgs" :key="x">
    <v-img  :src="img" :aspect-ratio="16/9" @click="showMultiple" class="rounded-xl"></v-img>
      </v-col>
    </v-row>
  </div>
</div>
</template>
<script>
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  components: {
    VueEasyLightbox
  },
  data() {
    return {
       imgs: ['https://i.loli.net/2018/11/10/5be6852cdb002.jpeg',
          'https://i.loli.net/2018/11/10/5be6852ce6965.jpeg/',
          'https://i.loli.net/2018/11/10/5be6852dec46e.jpeg',],
      visible: false,
      index: 0   // default
    }
  },
  methods: {
    showSingle() {
      this.imgs = {
          title: 'this is a placeholder',
          src: 'https://i.loli.net/2018/11/10/5be6852dec46e.jpeg'
        }
        this.show()
    },
    showMultiple() {
      this.imgs = ['https://i.loli.net/2018/11/10/5be6852cdb002.jpeg',
          'https://i.loli.net/2018/11/10/5be6852ce6965.jpeg/',
          'https://i.loli.net/2018/11/10/5be6852dec46e.jpeg',]
      this.index = 1  // index of imgList
      this.show()
    },
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  },
    mounted() {  
    document.title = "Anil Kumar Thakur | Gallery";  
  }, 
 
}
</script>