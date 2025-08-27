import { ref } from "vue";

/*
To do:
- Implement conjugation method for regular verbs
- Hardcode conjugations of irregular verbs
- Design quiz mechanism on webpage
*/

type Tense =
  | 'present'
  | 'futur simple'
  | 'imparfait'
  | 'passe compose'
  | 'futur anterieur'
  | 'plus-que-parfait'
  | 'subjonctif'
  | 'conditionnel'
  | 'conditionnel passe';
var infinitive: string;
var group: string;
var conjugations: Record<Tense, string[]>;
type reflexive = boolean;
type regular = boolean;
var participle: string;
var stem: string;
var English: string;
type drmrspvandertramp = boolean;
const ERSuffixes = {
    'present': ['e', 'es', 'e', 'ons', 'ez', 'ent'],
    'futur simple': ['erai', 'eras', 'era', 'erons', 'erez', 'eront'],
    'imparfait': ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
    'passe compose': ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
    'futur anterieur': ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'],
    'plus-que-parfait': ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'],
    'subjonctif': ['e', 'es', 'e', 'ions', 'iez', 'ent'],
    'conditionnel': ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'],
    'conditionnel passe': ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient']
};

const IRSuffixes = {
    'present': ['is','is','it','issons','issez','issent'],
    'futur simple': ['irai','iras','ira','irons','irez','iront'],
    'imparfait': ['issais','issais','issait','issions','issiez','issaient'],
    'passe compose': ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
    'futur anterieur': ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'],
    'plus-que-parfait': ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'],
    'subjonctif': ['isse','isses','isse','issions','issiez','issent'],
    'conditionnel': ['irais','irais','irait','irions','iriez','iraient'],
    'conditionnel passe': ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient']
}

const RESuffixes = {
    'present': ['s','s','','ons','ez','ent'],
    'futur simple': ['rai','ras','ra','rons','rez','ront'],
    'imparfait': ['ais','ais','ait','ions','iez','aient'],
    'passe compose': ['ai', 'as', 'a', 'avons', 'avez', 'ont'],
    'futur anterieur': ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'],
    'plus-que-parfait': ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'],
    'subjonctif': ['e','es','e','ions','iez','ent'],
    'conditionnel': ['rais','rais','rait','rions','riez','raient'],
    'conditionnel passe': ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient']
}

export class Verb {
  infinitive: string;
  group: string;
  regular: boolean;
  conjugations: Record<Tense, string[]>;
  reflexive: reflexive;
  participle: string;
  stem: string;
  English: string;
  drmrspvandertramp: boolean;
  constructor(
    infinitive: string,
    regular: boolean = true,
    reflexive: boolean = false,
    English: string,
    participle: string,
    drmrspvandertramp: boolean = false,
  ) {
    this.infinitive = infinitive;
    this.group = this.infinitive.slice(-2,0);
    this.regular = regular;
    this.reflexive = reflexive;
    this.participle = participle;
    this.stem = this.infinitive.slice(0, -2);
    this.drmrspvandertramp = drmrspvandertramp;
    this.English = English;

    this.conjugations = {
      'present': [],
      'futur simple': [],
      'imparfait': [],
      'passe compose': [],
      'futur anterieur': [],
      'plus-que-parfait': [],
      'subjonctif': [],
      'conditionnel': [],
      'conditionnel passe': [],
    };
  }

  add(verb: Verb) {
    var newVerb = this.add(verb);
    return new Verb(infinitive,this.regular,this.reflexive,this.English,this.participle,this.drmrspvandertramp);
  }
}