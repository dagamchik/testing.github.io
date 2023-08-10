import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import './assets/fonts.css'
import store from './store/index.js'
import moment from "moment";

const app = createApp(App);
app.use(store);
app.provide("moment", moment);
app.mount('#app')