import { createApp } from 'vue'
import App from './App.vue'
import './base.css'
import './index.css'
import router from './router'
import { ElButton, ElForm, ElInput, ElFormItem } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.component(ElButton.name, ElButton);
app.component(ElForm.name, ElForm);
app.component(ElInput.name, ElInput);
app.component(ElFormItem.name, ElFormItem);

app.use(router)
app.mount('#app')
