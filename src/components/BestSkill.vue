<template>
     <v-col lg="12" md="12" sm="12" class="mt-lg-5" >
                 <v-row class="justify-center">
               <h6 class="text-center ">BEST SKILL ON</h6>
             </v-row>
                <v-row class="justify-center">
                               <best-skill-list v-for=" (icon,x) in icons" :key="x" :colorname="icon.colorname" :iconname="icon.iconname"></best-skill-list>
                        
                      

         </v-row>             
    </v-col>
</template>
<script>
import BestSkillList from './BestSkillList.vue'
export default {
  components: { BestSkillList },
    name:"BestSkill",
    data() {
            return {
                    icons:[
                            {colorname:"red",iconname:"mdi-laravel",},
                            {colorname:"indigo",iconname:"mdi-bootstrap"},
                            {colorname:"primary",iconname:"mdi-jquery"},
                            {colorname:"amber",iconname:"mdi-language-javascript"},

                            {colorname:"green",iconname:"mdi-vuejs"},
                            {colorname:"orange darken-4",iconname:"mdi-language-html5"},
                            {colorname:"indigo accent-4",iconname:"mdi-language-css3"},
                    ]
            }
    },
}
</script>