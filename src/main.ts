import { createApp } from 'vue'
import App from './App.vue'

//createApp(App).mount('#app')

import { h } from 'vue'; 
import apolloClient from './graphql/apollo.client';
import { createApolloProvider } from '@vue/apollo-option';
import VueApolloComponents from '@vue/apollo-components';

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient
})

const app = createApp({
    render: () => h(App)
})

app.use(apolloProvider)
app.use(VueApolloComponents)

app.mount('#app')