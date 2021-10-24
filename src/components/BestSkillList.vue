<template>
    <v-col lg="1" md="1" sm="1">
        <v-btn  class="px-1" icon :href="href"   target="_blank">
                <v-icon  :color="colorname" >{{ iconname }}</v-icon>
        </v-btn>
    </v-col>
   
</template>
<script>
export default {
    name:"BestSkillList",
    props:["colorname","iconname","href"]
}
</script>