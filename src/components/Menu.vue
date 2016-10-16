<template>
  <section class="menu__content">
    <nav class="nav has-shadow">
      <section class="container">
        <section class="nav-left">
          <router-link to="/" class="nav-item is-tab" active-class="is-active">Home</router-link>
          <transition name="slide-fade">
            <a v-show="isLogged" @click.prevent="sendLogout" class="nav-item is-tab">Sair</a>
          </transition>
        </section>
      </section>
    </nav>
  </section>
</template>

<script>
// Vuex Stuff
import { mapGetters, mapActions } from 'vuex'

//
export default {
  computed: {
    ...mapGetters([
      'isLogged'
    ])
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    sendLogout () {
      // Logout it
      this.logout()

      // Redirect
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="sass">
</style>
