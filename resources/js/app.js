require('./bootstrap');

window.Vue = require('vue');

import vuetify from './vuetify';
import router from './router';

import App from './components/AppComponent';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
    el: '#app',
    router,
    vuetify,
    components: {
        'App': App
    }
});
