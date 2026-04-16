import { createApp } from 'vue'
import RouterTab from '../lib'

import App from './App.vue'
import langPlugin from './plugins/lang'
import router from './router'

const app = createApp(App)

app.config.devtools = true

app.use(langPlugin)
app.use(router)
app.use(RouterTab)
app.mount('#app')
