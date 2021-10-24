<template>
<v-row>
    <v-col lg="6" md="6" sm="12" >
            <v-img src="@/assets/anil.jpg"   > </v-img>
    </v-col>
    <v-col lg="6" md="6" sm="12">
        <h3 class=" font-weight-bold text-sm-h3 text-lg-h3 text-md-h3 my-5">About Me</h3>
        <h5 class=" font-weight-bold text-sm-h5 text-lg-h5 text-md-h5 my-5">Creative Software Developer based in Kathmandu, Nepal</h5>
        
        <p class="text-justify font-weight-medium ">
           I'm  Web Developer, and very passionate and dedicated to my work. With 1year plus years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
            <br>
            <br>
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio
            </p>

            <div class="d-flex">
                
                <v-icon color="success " class="mr-4" >mdi-check-all</v-icon>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem alias, nostrum ipsum repellat, excepturi numquam nulla aut officia aspernatur pariatur consequatur a tempore dolorum obcaecati error expedita totam tenetur?</p>
            </div>
            <div class="d-flex">
                
                <v-icon color="success " class="mr-4" >mdi-check-all</v-icon>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem alias, nostrum ipsum repellat, excepturi numquam nulla aut officia aspernatur pariatur consequatur a tempore dolorum obcaecati error expedita totam tenetur?</p>
            </div>
            <div class="d-flex">
                
                <v-icon color="success " class="mr-4" >mdi-check-all</v-icon>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem alias, nostrum ipsum repellat, excepturi numquam nulla aut officia aspernatur pariatur consequatur a tempore dolorum obcaecati error expedita totam tenetur?</p>
            </div>
 
       
            <v-btn color="success" href="https://drive.google.com/file/d/1IcK62u-Mvrwk_RMawI0d_XZ8GlkBALUn/view?usp=sharing" target="_blank">
                Download My Resume
            </v-btn>

    </v-col>
</v-row>
</template>
<script>
export default {
    name:"About",
      mounted() {  
    document.title = "Anil Kumar Thakur | About Me";  
  }, 
 
}
</script>