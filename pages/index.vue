<template>
  <div>
    <nuxt-link to="/trang1">
      Trang1
    </nuxt-link>

    <p v-for="product in products" :key="product.id">
      {{ product.name }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class Index extends Vue {
  products: any[] = [];

  async fetch() {
    try {
      const { data } = await this.$axios("http://localhost:3000/api/v2/public/products");
      this.products = data;
    } catch (error) {
      return error;
    }
  }
}
</script>
