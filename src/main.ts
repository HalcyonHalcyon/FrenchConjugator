import { createApp } from 'vue';
import { ref, reactive } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

//App.unmount()
const app = createApp(App);
app.use(router)
app.mount('#app')
import { Verb } from './models/Verb.ts';
import * as VerbList from './data/VerbList.ts';


let listOfVerbs = VerbList.loadVerbs();

/*var verb1 = Verb.randomVerb(listOfVerbs);
var verb2 = Verb.randomVerb(new);
var verb3 = Verb.randomVerb(new);
var verb4 = Verb.randomVerb();
var verb5 = Verb.randomVerb();
var verb6 = Verb.randomVerb();
var verb7 = Verb.randomVerb();
var verb8 = Verb.randomVerb();
var verb9 = Verb.randomVerb();
var verb10 = Verb.randomVerb();*/

