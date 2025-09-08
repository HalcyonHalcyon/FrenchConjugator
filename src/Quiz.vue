<script setup lang="ts">
import { ref } from 'vue'
import { Verb } from './models/Verb'
import { useRoute } from 'vue-router'
import * as VerbList from './data/VerbList.ts';

VerbList.loadVerbs();

const route = useRoute()
const selectedTense = route.query.tense

const subject: string[] = ["Je", "Tu", "Il", "Nous", "Vous", "Ils"]
var index:number;
function randomSubject(): String {
  index = Math.floor(Math.random() * (5 + 1));
  return subject[index];
}

const infinitive1 = ref<string>('');
const infinitive2 = ref<string>('');
const infinitive3 = ref<string | undefined>(undefined);
const infinitive4 = ref<string | undefined>(undefined);
const infinitive5 = ref<string | undefined>(undefined);
const infinitive6 = ref<string | undefined>(undefined);
const infinitive7 = ref<string | undefined>(undefined);
const infinitive8 = ref<string | undefined>(undefined);
const infinitive9 = ref<string | undefined>(undefined);
const infinitive10 = ref<string | undefined>(undefined);

const randomVerb1 = Verb.randomVerb()
const randomVerb2 = Verb.randomVerb()
const randomVerb3 = Verb.randomVerb()
const randomVerb4 = Verb.randomVerb()
const randomVerb5 = Verb.randomVerb()
const randomVerb6 = Verb.randomVerb()
const randomVerb7 = Verb.randomVerb()
const randomVerb8 = Verb.randomVerb()
const randomVerb9 = Verb.randomVerb()
const randomVerb10 = Verb.randomVerb()

if (randomVerb1) {
  infinitive1.value = randomVerb1.infinitive
  infinitive2.value = randomVerb1.infinitive
  const infinitive3 = randomVerb1.infinitive
  const infinitive4 = randomVerb1.infinitive
  const infinitive5 = randomVerb1.infinitive
  const infinitive6 = randomVerb1.infinitive
  const infinitive7 = randomVerb1.infinitive
  const infinitive8 = randomVerb1.infinitive
  const infinitive9 = randomVerb1.infinitive
  const infinitive10 = randomVerb1.infinitive
} else {
  console.warn("Verb list is empty!")
}

var subject1:String = randomSubject();
var subject2:String = randomSubject();
var subject3:String = randomSubject();
var subject4:String = randomSubject();
var subject5:String = randomSubject();
var subject6:String = randomSubject();
var subject7:String = randomSubject();
var subject8:String = randomSubject();
var subject9:String = randomSubject();
var subject10:String = randomSubject();

</script>

<template>
  <!--<div>
    <p>{{ randomVerb1?.infinitive || "No verb available" }}</p>
    <button @click="randomVerb1 = Verb.randomVerb()">Get New Verb</button>
  </div>-->

  <div class="question-box">
    <form action="/action_page.php">
        <div class="question">
          <h2>Question 1</h2>
          <label for="q1">
            Tense: {{ selectedTense }} 
            <br>
            Verb: {{infinitive1}} 
            <br>
            Subject: {{ subject1 }}
          </label>
          <br>
          <input type="text" id="q1" name="q1" value=""><br>
          <input type="button" value="Check">
          <br><br>
        </div>
        <div class="question">
          <h2>Question 2</h2>
          <label for="q2">Tense: {{ selectedTense }} <br>Verb: {{infinitive2}} <br>Subject: {{ subject2 }}</label><br>
          <input type="text" id="q2" name="q2" value=""><br>
          <input type="button" value="Check">

          <br><br>
        </div>
        <div>
          <router-link to="/">
              <button>Return to home page</button>
          </router-link>
        </div>
    </form>
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