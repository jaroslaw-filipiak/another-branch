import Vue, { createApp } from 'vue';
import Toast from 'vue-toastification';
import { createApolloProvider } from '@vue/apollo-option';
import VueNumber from 'vue-number-animation';
import apolloClient from './vue-apollo';
import 'vue-toastification/dist/index.css';
import App from './App.vue';
import router from './router';


import 'aos/dist/aos.css';

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

createApp(App).use(router).use(Toast).use(apolloProvider)
  .use(VueNumber)
  .mount('#app');

