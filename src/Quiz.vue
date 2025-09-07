<template>
  <div>
    <p>{{ randomVerb?.infinitive || "No verb available" }}</p>
    <button @click="randomVerb = Verb.randomVerb()">Get New Verb</button>
    
  </div>

  <div class="question-box">
        <form action="/action_page.php">
            <div class="question">
                <h2>Question 1</h2>
                <label for="q1">Tense: Présent <br>Verb: Manger <br>Subject: je</label><br>
                <input type="text" id="q1" name="q1" value=""><br>
                <input type="button" value="Check">

                <br><br>

            </div>
            <div class="question">
                <h2>Question 2</h2>
                <label for="q2">Tense: Présent <br>Verb: Manger <br>Subject: je</label><br>
                <input type="text" id="q2" name="q2" value=""><br>
                <input type="button" value="Check">

                <br><br>
            </div>

            <div>
                <!--<input type="button" value="Return to home page" onclick="window.location.href='index.html'">-->
                    <router-link to="/home">
                        <button>Start Quiz</button>
                    </router-link>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Verb } from './models/Verb'

new Verb('être',false,false,'to be','été'),
new Verb('avoir',false,false,'to have','eu'),
new Verb('pouvoir',false,false,'to be able to','pu'),
new Verb('faire',false,false,'to do, to make','fait'),
new Verb('mettre',false,false,'to put','mis'),
new Verb('dire',false,false,'to say, to tell','dit'),
new Verb('devoir',false,false,'to have to','dû'),
new Verb('prendre',false,false,'to take','pris'),
new Verb('donner',true,false,'to give','donné'),
new Verb('aller',false,false,'to go','allé',true),
new Verb('vouloir',false,false,'to want','voulu'),
new Verb('savoir',false,false,'to know','su'),
new Verb('falloir',false,false,'to be necessary to','fallu'),
new Verb('voir',false,false,'to see','vu'),
new Verb('demander',true,false,'to ask','demandé'),
new Verb('trouver',true,false,'to find','trouvé'),
new Verb('rendre',false,false,'to give back','rendu'),
new Verb('venir',false,false,'to come','venu',true),
new Verb('passer',true,false,'to pass','passé'),
new Verb('comprendre',false,false,'to understand','compris'),
new Verb('rester',true,false,'to stay','resté',true),
new Verb('tenir',false,false,'to hold','tenu'),
new Verb('porter',true,false,'to carry, to wear','porté'),
new Verb('parler',true,false,'to speak, to talk','parlé'),
new Verb('montrer',true,false,'to show','montré'),
new Verb('continuer',true,false,'to continue','continué'),
new Verb('penser',true,false,'to think','pensé'),
new Verb('suivre',false,false,'to follow','suivi'),
new Verb('connaître',false,false,'to know','connu'),
new Verb('croire',false,false,'to believe','cru'),
new Verb('commencer',true,false,'to start','commencé')
new Verb('compter',true,false,'to count','compté'),
new Verb('entendre',false,false,'to hear','entendu'),
new Verb('attendre',false,false,'to wait','attendu'),
new Verb('remettre',false,false,'to put back','remis'),
new Verb('appeler',false,false,'to call','appelé'),
new Verb('permettre',false,false,'to allow','permis'),
new Verb('occuper',true,false,'to occupy','occupé'),
new Verb('devenir',false,false,'to become','devenu',true),
new Verb('partir',false,false,'to leave','parti',true),
new Verb('décider',true,false,'to decide','décidé'),
new Verb('arriver',true,false,'to arrive, to happen','arrivé',true),
new Verb('servir',false,false,'to serve','servi'),
new Verb('sembler',true,false,'to seem','semblé'),
new Verb('revenir',false,false,'to come back','revenu',true),
new Verb('laisser',true,false,'to let','laissé'),
new Verb('recevoir',false,false,'to receive','reçu'),
new Verb('répondre',false,false,'to answer','répondu'),
new Verb('vivre',false,false,'to live','vécu'),
new Verb('rappeler',false,false,'to call back, to remind','rappelé'),
new Verb('présenter',true,false,'to present','présenté'),
new Verb('accepter',true,false,'to accept','accepté'),
new Verb('agir',true,false,'to act','agi'),
new Verb('poser',true,false,'to put down','posé'),
new Verb('jouer',true,false,'to play','joué'),
new Verb('reconnaître',false,false,'to recognise','reconnu'),
new Verb('choisir',true,false,'to choose','choisi'),
new Verb('toucher',true,false,'to touch','touché'),
new Verb('aimer',true,false,'to like, to love (a person)','aimé'),
new Verb('retrouver',true,false,'to find again','retrouvé'),
new Verb('perdre',false,false,'to lose','perdu'),
new Verb('expliquer',true,false,'to explain','expliqué'),
new Verb('considérer',true,false,'to consider','considéré'),
new Verb('ouvrir',false,false,'to open','ouvert'),
new Verb('gagner',true,false,'to win, to earn','gagné'),
new Verb('exister',true,false,'to exist','existé'),
new Verb('refuser',true,false,'to refuse','refusé'),
new Verb('lire',false,false,'to read','lu'),
new Verb('réussir',true,false,'to succeed','réussi'),
new Verb('changer',true,false,'to change','changé'),
new Verb('travailler',true,false,'to work','travaillé'),
new Verb('représenter',true,false,'to represent','représenté'),
new Verb('assurer',true,false,'to assure','assuré'),
new Verb('essayer',false,false,'to try','essayé'),
new Verb('empêcher',true,false,'to prevent','empêché'),
new Verb('sortir',false,false,'to go out','sorti',true),
new Verb('reprendre',false,false,'to take back','repris'),
new Verb('mener',true,false,'to lead','mené'),
new Verb('appartenir',false,false,'to belong','appartenu'),
new Verb('risquer',true,false,'to risk','risqué'),
new Verb('concerner',true,false,'to concern','concerné'),
new Verb('apprendre',false,false,'to learn, to teach','appris'),
new Verb('rencontrer',true,false,'to meet','rencontré'),
new Verb('créer',true,false,'to create','créé'),
new Verb('obtenir',false,false,'to get','obtenu'),
new Verb('chercher',true,false,'to look for','cherché'),
new Verb('entrer',true,false,'to enter','entré',true),
new Verb('proposer',true,false,'to suggest, to propose','proposé'),
new Verb('apporter',true,false,'to bring','apporté'),
new Verb('utiliser',true,false,'to use','utilisé'),
new Verb('atteindre',false,false,'to reach','atteint'),
new Verb('tenter',true,false,'to attempt, to tempt','tenté'),
new Verb('importer',true,false,'to import','importé'),
new Verb('ajouter',true,false,'to add','ajouté'),
new Verb('produire',false,false,'to produce','produit'),
new Verb('préparer',true,false,'to prepare','préparé'),
new Verb('relever',true,false,'to raise','relevé'),
new Verb('écrire',false,false,'to write','écrit'),
new Verb('défendre',false,false,'to defend','défendu'),
new Verb('tirer',true,false,'to pull','tiré');

const randomVerb = ref(Verb.randomVerb())

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