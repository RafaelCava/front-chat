<template>
  <div>
    <FormSignIn v-if="!handleSubmit" @signUp="handleSubmit = !handleSubmit" />
    <FormSignUp v-else @cancel="handleSubmit = !handleSubmit" />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      handleSubmit: false,
    };
  },
  components: {
    FormSignUp: defineAsyncComponent(
      () => import("../components/FormSignUp.vue")
    ),
    FormSignIn: defineAsyncComponent(
      () => import("../components/FormSignIn.vue")
    ),
  },
});
</script>
