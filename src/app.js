// Vue imports
import { createApp } from 'vue'
import App from './index.vue'
import router from "@/routes";

// Third-party imports (Not Vue Packages)

// Component imports

// App Creation
createApp(App)
    .use( router )
    .mount('#app')
