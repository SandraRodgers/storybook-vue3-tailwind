import { createApp } from 'vue'
import App from './App.vue'
import Alpine from 'alpinejs'

window.Alpine = Alpine
Alpine.start()

import './styles/main.css'

createApp(App).mount('#app')
