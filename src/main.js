import { createApp } from 'vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import "../node_modules/element-plus/theme-chalk/src/common/var.scss";
import { StarFilled } from '@element-plus/icons-vue'

import "./style/element/index.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'


import App from './App.vue';




dom.watch() 
library.add(fas);


const app = createApp(App);

app.use(ElementPlus);
app.use(store);
app.use(router);
app.component('star-filled', StarFilled);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
