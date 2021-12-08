import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Feature from '@/components/Feature'

Vue.use(VueRouter)

const routes = [{
        path: '',
        name: 'Home',
        component: Home
    },
    {
        path: 'about-me',
        name: 'About',
        component: About
    },
    {
        path: 'portfolio',
        name: 'Portfolio',
        component: Portfolio,
    },

    {
        path: 'gallery',
        name: 'Gallery',
        component: Gallery
    },

    {
        path: 'contact-me',
        name: 'Contact',
        component: Contact
    },
    {
        path: 'feature',
        name: 'Feature',
        component: Feature
    }
]

const router = new VueRouter({
    routes
})

export default router