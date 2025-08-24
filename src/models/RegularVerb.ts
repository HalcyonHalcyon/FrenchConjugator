import {Verb} from "./Verb.ts";
const pronouns = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];

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

/*class RegularERVerb extends Verb {
    constructor(
        infinitive:string,
        group:'er' | 'ir' | 're' = 'er',
        regularity:'regular'|'irregular'='regular',
        reflexive:"reflexive" | "non-reflexive" = 'non-reflexive',
        stem:string,
    ) {
        super(infinitive, group, regularity, reflexive);
        this.group = 'er';
        this.participle = infinitive.slice(0, -2) + 'é';

    }
    conjugateERVerb = (subject:string, stem: string) => void = (subject, stem) => {
        super.stem = super.infinitive.slice(0,-2);
    }
}*/