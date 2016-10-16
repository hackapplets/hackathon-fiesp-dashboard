<template>
  <section class="home-page__content">
    <actions name="Grupos" :actions="actions"></actions>

    <section class="home-page__list">
      <section class="container">
        <section class="columns">
          <section class="box column is-half">
            <h1 class="title is-4">...</h1>
            <section class="home-page__graphic">
              <vue-chart
                  :columns="columns"
                  :rows="rows"
              ></vue-chart>
            </section>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
// Components
import Actions from './../components/Actions'
import Chartist from 'vue-bulma-chartist'

//
export default {
  components: {
    Actions,
    Chartist
  },
  computed: {
  },
  data () {
    return {
      actions: [],
      columns: [12, 9, 7, 8, 5],
      rows: [2, 1, 3.5, 7, 3]
    }
  }
}
</script>

<style lang="sass">
</style>
