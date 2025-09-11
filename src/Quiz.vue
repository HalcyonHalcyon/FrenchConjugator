<script setup lang="ts">
import { ref } from 'vue'
import { Verb } from './models/Verb'
import { useRoute } from 'vue-router'
import * as VerbList from './data/VerbList.ts';
import { isQuestionDotToken } from 'typescript';

VerbList.loadVerbs();

const route = useRoute();
const selectedTense = route.query.tense;
const numQuestions = Number(route.query.numQuestions) || 10;
const ansQ1 = ref(false);
const ansQ2 = ref(false);
const ansQ3 = ref(false);
const ansQ4 = ref(false);
const ansQ5 = ref(false);
const ansQ6 = ref(false);
const ansQ7 = ref(false);
const ansQ8 = ref(false);
const ansQ9 = ref(false);
const ansQ10 = ref(false);

const subject: string[] = ["je", "tu", "il", "nous", "vous", "ils"]
var index:number;
function randomSubject(): String {
  index = Math.floor(Math.random() * (5 + 1));
  return subject[index];
}

function conjugateSetup(): String {
  const infinitive = ref<string>('');
  const randomVerb = Verb.randomVerb();
  if (randomVerb) {
    infinitive.value = randomVerb.infinitive;
  } else {
    infinitive.value = '';
  }
  const subject = randomSubject();
  return infinitive.value,subject;
}

var infinitiveList: string[] = Array(numQuestions).fill('');
var subjectList: string[] = Array(numQuestions).fill('');
for (let index=0;index<numQuestions;index++) {
  infinitiveList[index],subject[index] = String(conjugateSetup());
}
//console.log("infinitiveList is:",infinitiveList);

//document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";

const infinitive1 = ref<string>('');
const infinitive2 = ref<string>('');
const infinitive3 = ref<string>('');
const infinitive4 = ref<string>('');
const infinitive5 = ref<string>('');
const infinitive6 = ref<string>('');
const infinitive7 = ref<string>('');
const infinitive8 = ref<string>('');
const infinitive9 = ref<string>('');
const infinitive10 = ref<string>('');

const randomVerb1 = Verb.randomVerb();
const randomVerb2 = Verb.randomVerb();
const randomVerb3 = Verb.randomVerb();
const randomVerb4 = Verb.randomVerb();
const randomVerb5 = Verb.randomVerb();
const randomVerb6 = Verb.randomVerb();
const randomVerb7 = Verb.randomVerb();
const randomVerb8 = Verb.randomVerb();
const randomVerb9 = Verb.randomVerb();
const randomVerb10 = Verb.randomVerb();

if (randomVerb1 && randomVerb2 && randomVerb3 && randomVerb4 && randomVerb5) {
  infinitive1.value = randomVerb1.infinitive;
  infinitive2.value = randomVerb2.infinitive;
  infinitive3.value = randomVerb3.infinitive;
  infinitive4.value = randomVerb4.infinitive;
  infinitive5.value = randomVerb5.infinitive;
} else {
  console.warn("Verb list is empty!");
}

if (randomVerb6 && randomVerb7 && randomVerb8 && randomVerb9 && randomVerb10) {
  infinitive6.value = randomVerb6.infinitive;
  infinitive7.value = randomVerb7.infinitive;
  infinitive8.value = randomVerb8.infinitive;
  infinitive9.value = randomVerb9.infinitive;
  infinitive10.value = randomVerb10.infinitive;
} else {
  console.warn("Verb list is empty!");
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
var randomisedVerbs: any[] = Array(numQuestions).fill("");

//for (index=0;index<numQuestions;index++) {
 // randomisedVerbs[index] = Verb.randomVerb();
//}

</script>

<template>
  <div class="question-box">
    <form action="/action_page.php">
        <div class="question">
          <!--<div v-for="(product, index) in products" :key="product.id">
            #{{ index + 1 }} - {{ product.name }}
          </div>-->
          <!--<div
            v-for="(q, i) in numQuestions"
            :key="i"
            class="question"
          >
            const {infinitiveValue, subject} = conjugateSetup();
            <h2>Question {{ i + 1 }}</h2>
            <label>
              Tense: {{ selectedTense }} <br>
              Verb: {{ infinitiveValue }} <br>
              Subject: {{ subject }}
            </label>
            <br />
          </div>-->
          <!--<div v-for = "index in numQuestions">
            <h2>Question {{index+1}}</h2>
            <label for="question">
              Tense: {{ selectedTense }}
              <br></br>
              Verb: {{ infinitiveList[index] }}
              <br></br>
              Subject: {{ subjectList[index] }}
            </label>
            <input type="text" id="question" name="question"><br></br></input>
            <input type="button" value="Check"></input>
          </div>
        </div>-->

          <h2>Question 1</h2>
          <label for="q1">
            Tense: {{ selectedTense }}
            <br>
            Verb: {{ infinitive1 }}
            <br>
            Subject: {{ subject1 }}
          </label>
          <br><br>
          <input type="text" id="q1" name="q1" value=""><br>
          <input type="button" value="Check" @click="ansQ1 = !ansQ1">
        </div>
        <div v-if="ansQ1">
          <div class="box">Correct answer is: </div>
    
        </div>
        <div class="question">
          <h2>Question 2</h2>
          <label for="q2">
            Tense: {{ selectedTense }}
            <br>
            Verb: {{ infinitive2 }}
            <br>
            Subject: {{ subject2 }}
          </label>
          <br><br></br>
          <input type="text" id="q2" name="q2"><br>
          <input type="button" value="Check">

          <br><br>
        </div>
        <!--Add rest of questions here-->
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