import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
  }
})
const pinia = createPinia()
const app:HTMLElement = document.createElement('div');
app.className = 'queryGenerator';
document.body.append(app);
createApp(App)
  .use(vuetify)
  .use(pinia)
  .mount(app);
