<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Employees</RouterLink>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
.container {
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>