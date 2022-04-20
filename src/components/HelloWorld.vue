<script setup lang="ts">
import { ref } from 'vue';
// import client from '../graphql/apollo.client';
import { useQuery } from "@vue/apollo-composable";
import { gql } from '@apollo/client';

defineProps<{ msg: string }>()

const { result, loading } = useQuery(
  gql`
        query GetBlogs {
          blogs{
            _id
            title
          }
        }
        `
)

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  
<pre>
  {{loading?'loading...':JSON.stringify(result)}}
</pre>
</template>
