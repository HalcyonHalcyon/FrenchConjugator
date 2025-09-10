<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Verb } from './models/Verb'

const tense = ref('')
const router = useRouter()
const route = useRoute()
function pushTense() {
  //router.push({ name: 'Quiz', params: { tense: tense.value } })
  
  router.push({
    name: 'Quiz',
    query: {
      items: tense.value
    }
  });
  
}

</script>

<template>
  <div id="app"></div>
  <!--<script type="module" src="/src/main.ts"></script>-->
  <div>
    <h1>French Verb Conjugation Practice</h1>
    <h4>Use the settings below to start a French conjugation practice quiz</h4>
    <label for="tense"><h3>Choose a tense to conjugate: </h3></label>
    <select v-model="tense" name="tense" id="tense" @click="pushTense">
      console.log("Home: Selected tense is {{ tense }}")
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
  <!--<div>
    <button type="button" onclick="window.location.href='quiz.vue'">Start Quiz</button>
  </div>-->
    <router-link to="/quiz">
      <button>Start Quiz</button>
    </router-link>
</template>