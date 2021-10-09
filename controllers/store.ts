import { ssrRef } from "@nuxtjs/composition-api";

const store = ssrRef({
  first_time: true,
})

export default store;
