<script setup lang="ts">
import { ref } from 'vue'
import { Verb } from './models/Verb'

</script>

<template>
  <div id="app"></div>
  <script type="module" src="/src/main.ts"></script>
  <div>
    <h1>French Verb Conjugation Practice</h1>
    <h4>Use the settings below to start a French conjugation practice quiz</h4>
    <label for="tense"><h3>Choose a tense to conjugate: </h3></label>
    <select name="tense" id="tense">
      <optgroup label="Indicative - Simple">
        <option value="Présent">Présent</option>
        <option value="Futur Simple">Futur</option>
        <option value="Imparfait">Imparfait</option>
      </optgroup>
      <optgroup label="Indicative - Perfect">
        <option value="Passé Composé">Passé Composé</option>
        <option value="Futur Antérieur">Futur Antérieur</option>
        <option value="Plus-que-parfait">Plus-que-parfait</option>
      </optgroup>
      <optgroup label="Subjunctive">
        <option value="Subjonctif">Subjonctif présent</option>
      </optgroup>
      <optgroup label="Conditional">
        <option value="Conditionnel">Conditionnel présent</option>
        <option value="Conditionnel passé">Conditionnel passé</option>
      </optgroup>
    </select>
  </div>
  <div></div>
  <br>
  <div>
    <button type="button" onclick="window.location.href='quiz.html'">Start Quiz</button>
  </div>
</template>
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