

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

h1 {
  vertical-align: text-top;
  text-align: center;
}

.break {
  flex-basis: 100%;
  height: 0;
}
</style>