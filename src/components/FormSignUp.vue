<template>
  <div class="container">
    <form autocomplete="off" class="form">
      <h1>Cadastre-se</h1>
      <span class="p-float-label">
        <InputText id="nome" type="text" v-model="user.name" />
        <label for="nome">Nome</label>
      </span>
      <span class="p-float-label">
        <InputText
          id="email"
          type="email"
          v-model="user.email"
          :class="{ 'p-invalid': handleValidateEmail }"
        />
        <label for="email">E-mail</label>
        <p v-if="handleValidateEmail" class="p-error">
          Os emails são diferentes
        </p>
      </span>
      <span class="p-float-label">
        <InputText
          id="validate-email"
          type="email"
          v-model="validationEmail"
          :class="{ 'p-invalid': handleValidateEmail }"
        />
        <label for="validate-email">Confirme seu e-mail</label>
        <p v-if="handleValidateEmail" class="p-error">
          Os emails são diferentes
        </p>
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
        <ButtonPrime
          label="Cadastrar"
          @click.prevent="hadleSubmit"
          class="p-button-success"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { AxiosInstance } from 'axios'
import { ToastSeverity } from 'primevue/api'
import { useToast } from 'primevue/usetoast'
import { defineAsyncComponent, defineComponent, inject, ref, watch } from 'vue'
import { useStore } from '../store'

export default defineComponent({
  name: 'FormSignUp',
  components: {
    InputText: defineAsyncComponent(() => import('primevue/inputtext')),
    Password: defineAsyncComponent(() => import('primevue/password')),
    Divider: defineAsyncComponent(() => import('primevue/divider')),
    ButtonPrime: defineAsyncComponent(() => import('primevue/button'))
  },
  emits: ['cancel'],
  setup (props, { emit }) {
    const user = ref({
      name: '',
      email: '',
      password: ''
    })
    const validationEmail = ref('')
    const handleValidateEmail = ref(false)
    const toast = useToast()
    watch(
      () => validationEmail.value,
      () => {
        handleValidateEmail.value = user.value.email !== validationEmail.value
      }
    )
    const store = useStore()
    const axios = inject<AxiosInstance>('http')
    const hadleSubmit = async () => {
      try {
        await axios?.post('user', {
          email: user.value.email,
          name: user.value.name,
          password: user.value.password
        })
        emit('cancel')
      } catch (error) {
        toast.add({
          severity: ToastSeverity.ERROR,
          summary: 'Error Message',
          detail: 'Erro ao cadastrar usuário',
          life: 3000
        })
      }
    }
    return {
      store,
      user,
      validationEmail,
      handleValidateEmail,
      hadleSubmit
    }
  }
})
</script>

<style scoped>
.form {
  width: 100%;
  max-width: 35%;
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
