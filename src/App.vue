<template>
  <section class="view">
    <main-menu></main-menu>
    <section class="page">
			<transition name="slide-fade" mode="out-in">
				<router-view></router-view>
			</transition>
    </section>
  </section>
</template>

<script>
import MainMenu from './components/Menu'

export default {
  components: {
    MainMenu
  }
}
</script>

<style lang="scss">
// Redefing variables
$primary: #6a698a;
$red: #ff0033;

// Importing bulma
@import "~bulma";

.slide-fade {
  &-enter-active {
		transition: all 0.2s ease;
	}
	&-leave-active {
		transition: all 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	&-enter, &-leave-active {
		padding-left: 10px;
		opacity: 0;
	}
}
</style>
