<template>
  <section class="container login-page__content">
    <section class="section login-page__form-container">
      <section class="box login-page__form-content">
        <img class="image is-96x96 login-page__logo" src="./../assets/logo.png" alt="">
        <form @submit.prevent="submit" class="login-page__form">
          <label for="login-page__email-input" class="label">Email</label>
          <p class="control">
            <input v-model="email" id="login-page__email-input" class="input" type="email" autofocus>
          </p>
          <label for="login-page__password-input" class="label">Senha</label>
          <p class="control">
            <input v-model="password" id="login-page__password-input" class="input" type="password">
          </p>
          <transition name="slide-fade">
            <section v-if="error" class="notification is-danger login-page__error-message">
              Usuario/Senha invalidos
            </section>
          </transition>
          <p class="control">
            <a class="button" href="#">Esqueceu seu email ou senha?</a>
            <button type="submit" class="button is-info">Entrar</button>
          </p>
        </form>
      </section>
    </section>
  </section>
</template>

<script>
// Vuex stuff
import { mapActions } from 'vuex'

//
export default {
  // Component data
  data () {
    return {
      email: '',
      password: '',
      error: false
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    reset () {
      this.email = ''
      this.password = ''
      this.error = false
    },
    submit () {
      // Try to login the user
      if (this.login(this.email, this.password)) {
        // Reset the component
        this.reset()

        // Redirect to home
        this.$router.push('/')
      } else {
        // Not possible
        this.error = true
      }
    }
  }
}
</script>

<style lang="sass">
.login-page
  &__logo
    margin: 0 auto
  &__form
    &-container
      background: transparent
      width: auto
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: start;
      justify-content: center;
    .input
      max-width: auto
  &__error-message
    padding: 5px 10px
    margin-bottom: 10px !important
</style>
