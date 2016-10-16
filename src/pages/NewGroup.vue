<template>
  <section class="new-group-page__content">
    <actions name="Novo Grupo" :actions="actions"></actions>

    <section class="new-group-page__list">
      <section class="container">
        <form @submit.prevent="submit" class="login-page__form">
          <label class="label">Nome</label>
          <p class="control">
            <input v-model="form.name" class="input" type="text"> 
          </p>
          <p class="control"Entrar>
            <button type="submit" class="button is-info">Criar</button>
          </p>
        </form>
      </section>
    </section>
  </section>
</template>

<script>
// Components
import Actions from './../components/Actions'

//
export default {
  components: {
    Actions
  },
  methods: {
    submit () {
      console.log('Creating a new Group')
    },
    reset () {
      // Reset form stuff
      this.form.name = ''
    }
  },
  data () {
    return {
      form: {},
      actions: [
        {name: 'Voltar', to: '/groups'}
      ]
    }
  }
}
</script>

<style lang="sass">
.groups-page
  &__actions
    background: transparent
    &-title
      padding: 5px 0
</style>
