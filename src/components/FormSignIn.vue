<template>
  <div class="container">
    <form autocomplete="off" class="form">
      <h1>Login</h1>
      <span class="p-float-label">
        <InputText id="email" type="email" v-model="email" />
        <label for="email">E-mail</label>
      </span>
      <span class="p-float-label">
        <Password
          id="password"
          v-model="password"
          autocomplete="off"
          :feedback="false"
          :toggleMask="true"
        ></Password>
        <label for="password">Insira sua senha</label>
      </span>
      <div class="container-button">
        <ButtonPrime @click="handleSignIn" label="login" class="p-button-primary" />
        <span @click="$emit('signUp')" class="link-signup"
          >Deseja se cadastrar ?</span
        >
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from 'vue'
import { TypeActions } from '@/store/enum/type-actions'
import { useStore } from '../store/index'

export default defineComponent({
  name: 'FormSignUp',
  components: {
    InputText: defineAsyncComponent(() => import('primevue/inputtext')),
    Password: defineAsyncComponent(() => import('primevue/password')),
    ButtonPrime: defineAsyncComponent(() => import('primevue/button'))
  },
  setup () {
    const store = useStore()
    const email = ref('')
    const password = ref('')
    return {
      handleSignIn: () => store.dispatch(TypeActions.LOGIN, {
        email: email.value,
        password: password.value
      }),
      email,
      password
    }
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
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.link-signup {
  cursor: pointer;
  color: #fff;
}

.link-signup:active {
  color: rgb(189, 182, 182);
}
</style>
