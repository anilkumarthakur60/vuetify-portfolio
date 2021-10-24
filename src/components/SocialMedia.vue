<template>
     <v-col lg="12" md="12" sm="12"  >
             <v-row class="justify-center">
               <h6 class="text-center ">FIND WITH ME</h6>
             </v-row>
                <v-row class="justify-center">
                     <best-skill-list v-for=" (icon,x) in icons" :key="x" :colorname="icon.colorname" :href="icon.href" :iconname="icon.iconname"></best-skill-list>
                                  
                </v-row>
                  
            </v-col>
</template>

<script>
import BestSkillList from './BestSkillList.vue'
export default {
  components: { BestSkillList },
    name:"SocialMedia",
        data() {
            return {
                    icons:[
                            {href:"https://github.com/anilkumarthakur60",colorname:"grey darken-4",iconname:"mdi-github"},
                            {href:"https://www.facebook.com/anilkumarthakur60",colorname:"primary",iconname:"mdi-facebook"},
                            {href:"https://twitter.com/kumaranil60",colorname:"primary",iconname:"mdi-twitter"},
                            {href:"https://www.instagram.com/anilkumarthakur60/",colorname:"red",iconname:"mdi-instagram"},
                            {href:"https://www.linkedin.com/in/anil-kumar-thakur-489724129/",colorname:"primary",iconname:"mdi-linkedin"},
                            {href:"mailto:anilkumarthakur60@gmail.com",colorname:"grey darken-4",iconname:"mdi-email"},
                    ]
            }
    },
}
</script>