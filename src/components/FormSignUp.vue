<template>
  <div class="container">
    <form autocomplete="off" class="form">
      <h1>Cadastre-se</h1>
      <span class="p-float-label">
        <InputText id="nome" type="text" v-model="user.nome" />
        <label for="nome">Nome</label>
      </span>
      <span class="p-float-label">
        <InputText id="email" type="email" v-model="user.email" />
        <label for="email">E-mail</label>
      </span>
      <span class="p-float-label">
        <InputText id="validate-email" type="email" v-model="validationEmail" />
        <label for="validate-email">Confirme seu e-mail</label>
      </span>
      <span class="p-float-label">
        <Password
          id="password"
          v-model="user.password"
          autocomplete="off"
          promptLabel="Insira sua senha"
          weakLabel="Senha fraca"
          mediumLabel="Senha média"
          strongLabel="Senha forte"
          :toggleMask="true"
        >
          <template #header>
            <h6>Selecione uma senha</h6>
          </template>
          <template #footer>
            <Divider />
            <p class="mt-2">Sugestões</p>
            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
              <li>Deve conter uma letra maiuscula</li>
              <li>Deve conter uma letra minuscula</li>
              <li>Deve conter um número</li>
              <li>No mínimo 8 caracteres</li>
            </ul>
          </template>
        </Password>
        <label for="password">Insira sua senha</label>
      </span>
      <div class="container-button">
        <ButtonPrime
          @click="$emit('cancel')"
          label="Cancelar"
          class="p-button-danger"
        />
        <ButtonPrime label="Cadastrar" class="p-button-success" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  name: 'FormSignUp',
  data () {
    return {
      user: {
        nome: '',
        email: '',
        password: ''
      },
      validationEmail: ''
    }
  },
  components: {
    InputText: defineAsyncComponent(() => import('primevue/inputtext')),
    Password: defineAsyncComponent(() => import('primevue/password')),
    Divider: defineAsyncComponent(() => import('primevue/divider')),
    ButtonPrime: defineAsyncComponent(() => import('primevue/button'))
  }
})
</script>

<style scoped>
.form {
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 30px;
  background-color: rgb(82, 82, 214);
  border-radius: 50px;
}

.form input {
  width: 250px;
}

.container {
  display: flex;
  justify-content: center;
  background-color: #999;
}

label {
  color: black;
}

.container-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
</style>
