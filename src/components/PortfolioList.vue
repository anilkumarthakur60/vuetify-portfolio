<template>
    <v-col lg="3" md="4" sm="12">
        <v-card >
              <v-img  class="rounded-xl"
                    :src="image"
                    >
                </v-img>
                <h1 class="red--text text-h5 text-left ml-4 my-5" >{{ name }}</h1>
                    <p class="text-justify px-4 pb-5"> {{ text }}</p>

        </v-card>
    </v-col>
</template>
<script>
export default {
    name:"PortfolioList",
    props:["name","image","text"]
}
</script>