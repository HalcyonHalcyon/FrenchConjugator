<script setup lang="ts",src="https://unpkg.com/vue@3">

  const app = Vue.createApp({
    methods: {}
  });
  app.mount('#app');
</script>

<template>
  <!--<div>
    <h1>French Verb Conjugation Practice</h1>
    <h2>Tense to conjugate: </h2>
  </div>
-->
  <!--
  <div>
    <b-dropdown id="tense" text="Dropdown Button" class="m-md-2">
      <b-dropdown-item>Présent</b-dropdown-item>
      <b-dropdown-item>Futur Simple</b-dropdown-item>
      <b-dropdown-item>Imparfait</b-dropdown-item>
      <b-dropdown-item>Passé Composé</b-dropdown-item>
      <b-dropdown-item>Futur Antérieur</b-dropdown-item>
      <b-dropdown-item>Plus-que-parfait</b-dropdown-item>
      <b-dropdown-item>Subjonctif</b-dropdown-item>
      <b-dropdown-item>Conditionnel</b-dropdown-item>
      <b-dropdown-item>Conditionnel passé</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
  </b-dropdown>
  </div>
-->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
/*.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}*/

h1 {
  vertical-align: text-top;
  text-align: center;
}

.break {
  flex-basis: 100%;
  height: 0;
}
</style>