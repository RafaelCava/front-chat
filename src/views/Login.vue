<template>
  <div>
    <FormSignIn v-if="!handleSubmit" @signUp="handleSubmit = !handleSubmit" />
    <FormSignUp v-else @cancel="handleSubmit = !handleSubmit" />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    FormSignUp: defineAsyncComponent(
      () => import('../components/FormSignUp.vue')
    ),
    FormSignIn: defineAsyncComponent(
      () => import('../components/FormSignIn.vue')
    )
  },
  setup () {
    const handleSubmit = ref(false)
    return {
      handleSubmit
    }
  }
})
</script>
