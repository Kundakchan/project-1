import Vue from 'vue'
import Normalize from 'normalize.css'
import Animate from 'animate.css'
import App from './App.vue'
import router from './router'
import store from './store'
import mainSass from './style/main.scss'
import Swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(
  Swiper,
  Normalize,
  Animate,
  mainSass
)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
