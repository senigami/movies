import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import 'font-awesome/css/font-awesome.min.css'

const app = createApp(App)
app.use(store)

new WaveUI(app, {
  // Some Wave UI options.
})

app.mount('#app')

