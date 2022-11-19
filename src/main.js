import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'
import helper from './helpers/helper'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const pinia = createPinia();

pinia.use(() => ({
    gamer_api_url: import.meta.env.VITE_GAMER_API_URL
}))

createApp(App)
    .use(router)
    .use(vuetify)
    .use(pinia)
    .use(helper)
    .mount('#app')
