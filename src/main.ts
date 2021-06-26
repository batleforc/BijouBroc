import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
require("@/assets/main.sass")
import "./registerServiceWorker";

createApp(App).use(store).use(router).mount("#app");
