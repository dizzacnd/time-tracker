import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import "./assets/css/styles.css"
import "./assets/css/components.css"
import "./assets/css/responsive.css"

import router from './router'

createApp(App).use(router).mount('#app')
