<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Verb } from './models/Verb'

const tense = ref('')
const numQuestions = ref('')
const router = useRouter()
const route = useRoute()
function pushTense() {
  //router.push({ name: 'Quiz', params: { tense: tense.value } })
  
  router.push({
    name: 'Quiz',
    query: {
      tense: tense.value,
      numQuestions: numQuestions.value
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
    <select v-model="tense" name="tense" default="présent" id="tense">
      <optgroup label="Indicative - Simple">
        <option value="présent">Présent</option>
        <option value="futur simple">Futur</option>
        <option value="imparfait">Imparfait</option>
      </optgroup>
      <optgroup label="Indicative - Perfect">
        <option value="passé composé">Passé composé</option>
        <option value="futur antérieur">Futur antérieur</option>
        <option value="plus-que-parfait">Plus-que-parfait</option>
      </optgroup>
      <optgroup label="Subjunctive">
        <option value="subjonctif">Subjonctif présent</option>
      </optgroup>
      <optgroup label="Conditional">
        <option value="conditionnel">Conditionnel présent</option>
        <option value="conditionnel passé">Conditionnel passé</option>
      </optgroup>
    </select>
    <label for="numQuestions"><h3>Choose the number of verbs to conjugate: </h3></label>
    <input type="number" id="numQuestions" name="numQuestions" value="10" min="1" max="50">
    console.log("Number of questions is:",{{ numQuestions }})

  </div>
  <div></div>
  <br>
  <!--<div>
    <button type="button" onclick="window.location.href='quiz.vue'">Start Quiz</button>
  </div>-->
    <!--<router-link to="/quiz">
      <button>Start Quiz</button>
    </router-link>-->
    <button @click="pushTense">Start Quiz</button>
</template>