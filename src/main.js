import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'vant/lib/index.css';
import router from './router'

import { Button } from 'vant';


const app = createApp(App)

app.component('v-button', Button)
app.use(router)
app.mount('#app')
