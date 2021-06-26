import { createApp, h, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
require("@/assets/main.sass");
import "./registerServiceWorker";
import {useClient} from 'villus'


createApp({
  setup() {
    useClient({
      url:String(process.env.VUE_APP_API)
    })
  },
  render() {
    return h(App)
  }
})
  .use(store)
  .use(router)
  .mount("#app");
