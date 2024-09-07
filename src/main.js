import './assets/main.css';
import 'primeicons/primeicons.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import router from './router';

import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faPaintBrush, faUmbrellaBeach, faDumbbell, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import {faBars, faTimes, faPlus, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faMicrosoft, faApple } from '@fortawesome/free-brands-svg-icons';

const app = createApp(App);
library.add(
    faPaperPlane,
    faPaintBrush,
    faUmbrellaBeach, 
    faDumbbell, 
    faEnvelopeOpenText, 
    faBars, 
    faTimes, 
    faPlus, 
    faChevronDown,
    faGoogle,
    faMicrosoft,
    faApple);
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router);
app.use(Toast);

app.mount('#app');