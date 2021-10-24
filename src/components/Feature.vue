<template>
<div class="">
    <h6 class="text-h6">Feature</h6>
    <h1 class=" font-weight-bold ">What I DO</h1>
    <v-row>
       
           <what-i-do v-for=" whatisodolist in whatidolists " 
                    :name="whatisodolist.name"
                    :image="whatisodolist.image"
                    :text="whatisodolist.text"
                     :key="whatisodolist.name"></what-i-do>
        
    </v-row>
</div>
  

</template>
<script>
import WhatIDo from './WhatIDo.vue'
export default {
  components: { WhatIDo },
    name:"Feature",
    data() {
        return {
             whatidolists: [
        {name: 'Front End', image: require('../assets/frontend.svg'), text: 'Innovative Front End Developer with 1.5  years experience building and maintaining responsive websites . Proficient in HTML, CSS, Bootstrap ,Vuetify jQuery, JavaScript and  plus modern libraries and frameworks like Vue js ,Bootstrap ,Vuetify. Coordinate with designers to develop various new products and feature along with various interactive designs within required timeframe.'},
        {name: 'Backend', image: require('../assets/backend.webp'), text: 'Backend Developer with 1 year experience in the industry. Enjoy creative problem solving and getting exposure to multiple projects. Analyze data, processes, and codes to troubleshoot problems and identify areas for improvement also taking lead on projects as needed. Building a better, more efficient Software and creating a better end-user experience'},
        {name: 'Project Management', image: require('../assets/projectmanagement.jpg'), text: 'Developed and managed project plan through to completion. Worked closely with management on assigned projects from inception through implementation to ensure adequate internal communication between end user and developer.Perform business process analysis, performance assessment, project management and risk assessment for the assigned project'},
        {name: 'Database Design', image: require('../assets/database.png'), text: 'Relational Database design for small to large scale project. Maintaining and enhancing the performance of existing database. Optimize database systems for performance and reliability. Provide database solutions based on technical documents and business requirements.Adhering to best practices in securely storing, backing up, and archiving realtime data'}, 
      
       
      ]
        }
    },
      mounted() {  
    document.title = "Anil Kumar Thakur | Feature";  
  }, 
 
}
</script>