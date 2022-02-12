import Vue from 'vue'

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin);

import App from './App.vue'

(async () => {
  await window.firebase.initializeApp({
    apiKey: "AIza....",                             // Auth / General Use
    appId: "1:27992087142:web:ce....",              // General Use
    projectId: "temp",               // General Use
    databaseURL: "https://temp.firebaseio.com", // Realtime Database
  });

  firebase.firestore().useEmulator('localhost', 8080);

  new Vue({
    render: (h) => h(App),
  }).$mount('#app')

})();