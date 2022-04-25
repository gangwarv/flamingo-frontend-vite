import { createApp } from 'vue'
import App from './App.vue'

//createApp(App).mount('#app')

import { h } from 'vue'; 
import apolloClient from './graphql/apollo.client';
import { createApolloProvider } from '@vue/apollo-option';
import VueApolloComponents from '@vue/apollo-components';
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient
})

const app = createApp({
    render: () => h(App)
})

app.use(apolloProvider)
app.use(VueApolloComponents)
app.use(Quasar, {plugins:{}})
app.mount('#app')