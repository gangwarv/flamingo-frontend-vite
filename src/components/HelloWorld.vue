<script setup lang="ts">
import { ref } from 'vue';
import { GET_BLOGS } from "../graphql/queries";
import AuthLayout from "./auth.layout.vue"

defineProps<{ msg: string }>()
const title = ref('first');
const fetchBlogs = () => {
  title.value = 'second';
}
</script>

<template>
<AuthLayout/>
  <h1>{{ msg }}</h1>
  <button @click="fetchBlogs">fetch</button>
  <ApolloQuery :query="GET_BLOGS" :variables="{ title: title }">
    <!-- TODO -->
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>
      <pre>
        {{ JSON.stringify({ loading, error, data }, null, 5) }}
      </pre>
      <!-- Error -->
      <!-- <div v-else-if="error" class="error apollo">An error occurred</div> -->

      <!-- Result -->
      <!-- <div v-else-if="data" class="result apollo">{{ JSON.stringify(data) }}</div> -->

      <!-- No result -->
      <!-- <div v-else class="no-result apollo">No result :(</div> -->
    </template>
  </ApolloQuery>
</template>
