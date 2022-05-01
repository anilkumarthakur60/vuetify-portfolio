<template>
  <v-row justify="center" color="#26c6da" dark>
    <v-col class="text-center">
      <v-subheader class="justify-center"
        >VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</v-subheader
      >
      <div
        class="justify-center font-weight-bold text-lg-h4 text-md-h3 text-sm-h3"
      >
        My Portfolio
      </div>
      <v-row class="mt-6">
        <portfolio-list
          v-for="(portfoliolist, x) in portfoliolists"
          :key="x"
          :name="portfoliolist.name"
          :image="portfoliolist.image"
          :text="portfoliolist.text"
        ></portfolio-list>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import PortfolioList from "./PortfolioList.vue";
export default {
  components: { PortfolioList },
  name: "Portfolio",
  data() {
    return {
      portfoliolists: [
        {
          name: "Content Management System",
          image: require("../assets/portfolio/blog.jpg"),
          text: "content management system (CMS) is an application that is used to manage web content, allowing multiple contributors to create, edit and publish. Content in a CMS is typically stored in a database and displayed in a presentation layer based on a set of templates.",
        },
        {
          name: "Medmax Medical Holesale",
          image: require("../assets/portfolio/medmaxchain.jpg"),
          text: "Med Max pvt. Ltd. is a Nepal based Medical Holsale & Clinical Chain company with established 2075. They vigorous Health related solutions, using the latest System tools and incorporating products in our service areas. ",
        },
        {
          name: "Medmax Innovation Pvt Ltd",
          image: require("../assets/portfolio/medmax.jpg"),
          text: "Medmax Innovation is an emerging IT company best known for good service quality and cost effective packages. They are about customer satisfaction rather than our earning. They believe in earning respect and trust is more valuable than earning money. ",
        },
        {
          name: "SingleEcommerce System",
          image: require("../assets/portfolio/ecoomerce.jpg"),
          text: "E-commerce Management System will primarily provide a platform to purchase, sell, distribution of items, product  through the internet. The E-commerce Management System will be a huge marketplace as most of the business are going  based on the internet",
        },
        {
          name: "Video Conferencing App",
          image: require("../assets/portfolio/videochat.jpg"),
          text: "One to One Video call for the conferencing system for counseling. Build with laravel as backend and vuejs as frontend ,Bootstrap for the UI design . Anyone willing to have counseling have to pay first through esewa and then only he can have conferencing with that agency.",
        },
        {
          name: "Delivery Report Systerm",
          image: require("../assets/portfolio/meriaamai.jpg"),
          text: "This system helps to manage the information related to health care and aids in the job completion of health care providers effectively. They manage the data related to all departments of healthcare such as, creative problem solving. Analyze data, and processes.",
        },
        {
          name: "Garjoo Classified",
          image: require("../assets/portfolio/garjoonepal.png"),
          text: "E-commerce Management System will primarily provide a platform to purchase, sell, distribution of items, product  through the internet. The E-commerce Management System will be a huge marketplace as most of the business are going  based on the internet.",
        },
        {
          name: "Online Saffron Conttages",
          image: require("../assets/portfolio/saffroncottages.png"),
          text: "Online Food OrderSystem will primarily provide a platform to order food item  of items, product  through the internet. The Online Food order  Management System will be a huge marketplace as most of the business are going  based on the internet.",
        },
        {
          name: "Government Telemedicine",
          image: require("../assets/portfolio/telemed.png"),
          text: ' <a href="https://ehealth.solupoly.org/admin/login/595752746157343d"> akjbs</a>.',
        },
      ],
    };
  },
  mounted() {
    document.title = "Er.Anil Kumar Thakur | My Portfoli";
  },
};
</script>