<template>
  <div>
    <Toast />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import Toast from 'primevue/toast'

defineComponent({
  name: 'AppBootstrap',
  components: {
    Toast
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
