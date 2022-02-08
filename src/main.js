import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from 'axios';

createApp(App).use(router,Axios).mount("#app");
