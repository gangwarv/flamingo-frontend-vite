import { createApp } from 'vue'
import App from './App.vue'

//createApp(App).mount('#app')

import { provide, h } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './graphql/apollo.client'

const app = createApp({
    setup(){
        provide(DefaultApolloClient, apolloClient)
    },

    render:() => h(App)
}).mount('#app')