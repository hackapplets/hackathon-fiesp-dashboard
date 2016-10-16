<template>
  <section class="home-page__content">
    <section class="section home-page__list">
      <section class="container">
        <section class="columns is-multiline">
          <section class="column is-half">
            <section class="box home-page__content-table">
              <h1 class="title is-4">Distancia media percorrida</h1>
              <section class="home-page__graphic">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Distancia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="distance in distances"><td>{{ distance }}</td><tr>
                  </tbody>
                </table>
              </section>
            </section>
          </section>

          <section class="column is-half">
            <section class="box home-page__content-table">
              <h1 class="title is-4">Amplitude do desolcamento</h1>
              <section class="home-page__graphic">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Distancia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="distance in distances"><td>{{ distance }}</td><tr>
                  </tbody>
                </table>
              </section>
            </section>
          </section>

          <section class="column is-half">
            <section class="box home-page__content-table">
              <h1 class="title is-4">Mapa de Calor de trafego</h1>
              <section class="home-page__graphic">
                <img class="image" src="./../assets/heatmap.png">
              </section>
            </section>
          </section>

          <section class="column is-half">
            <section class="box home-page__content-table">
              <h1 class="title is-4">Avaliação por área</h1>
              <section class="home-page__graphic">
                <img class="image" src="./../assets/streetsmap.png">
              </section>
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

//
export default {
  components: {
    Actions
  },
  computed: {
  },
  data () {
    return {
      distances: ['1km', '0.6km', '1.2km', '0.2km', '0.8km']
    }
  }
}
</script>

<style lang="sass">
.home-page
  &__list
    background: transparent
</style>
