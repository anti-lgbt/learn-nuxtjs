<template>
  <div>{{ product }}</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class Index extends Vue {
  product: any = null;

  async fetch() {
    try {
      const { data } = await this.$axios("http://localhost:3000/api/v2/public/products/1");
      this.product = data;
    } catch (error) {
      return error;
    }
  }
}
</script>
