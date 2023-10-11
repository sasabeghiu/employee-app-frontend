<template>
  <TheNavigation></TheNavigation>
  <div class="container">
    <RouterView />
  </div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';

export default {
  name: 'App',
  components: {
    TheNavigation,
  },
};
</script>

<style>
.container {
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>