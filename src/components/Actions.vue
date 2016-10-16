<template>
  <nav class="nav actions__container">
    <section class="container">
      <section class="nav-left actions__title">
        <h1 class="title">{{ name }}</h1>
      </section>
      <section class="nav-right">
        <router-link v-for="action in actions" :to="action.to" :class="[defaultClass, action.classes ? action.classes : '']">{{ action.name }}</router-link>
      </section>
    </section>
  </nav>
</template>

<script>
export default {
  props: {
    name: String,
    actions: Array[Object]
  },
  data () {
    return {
      defaultClass: 'button is-medium'
    }
  }
}
</script>

<style lang="sass">
.actions
  &__container
    background: transparent
    .button
      margin: 0 5px
  &__title
    padding: 5px 0
</style>
