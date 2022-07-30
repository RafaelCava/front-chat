<template>
  <div class="home">
    <Password
      v-model="password"
      showIcon="pi pi-eye"
      hideIcon="pi pi-eye-slash"
      weakLabel="Senha fraca"
      mediumLabel="Senha média"
      strongLabel="Senha forte"
      promptLabel="Insira uma senha"
    >
      <template #header>
        <h6>Escreva sua senha</h6>
      </template>
      <template #footer>
        <Divider />
        <p class="mt-2">Sugestões</p>
        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
          <li>No mínimo uma letra minúscula</li>
          <li>No mínimo uma letra maúscula</li>
          <li>No mínimo um número</li>
          <li>No mínimo 8 caracteres</li>
        </ul>
      </template>
    </Password>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Password from "primevue/password";
import Divider from "primevue/divider";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
    Password,
    Divider,
  },
  data() {
    return {
      password: "",
      cities: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
    };
  },
});
</script>
