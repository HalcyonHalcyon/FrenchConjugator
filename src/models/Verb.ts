type Tense = 'present' | 'futur simple' | 'imparfait' | 'passe compose' | 'futur anterieur' | 'plus-que-parfait' | 'subjonctif' | 'conditionnel' | 'conditionnel passe';
var infinitive: string;
type group = 'er' | 'ir' | 're';
var conjugations: Record<Tense, string[]>;
type reflexive = 'reflexive' | 'non-reflexive';
type regularity = 'regular' | 'irregular';
var participle: string;
var stem: string;

export class Verb {
    infinitive: string;
    group: group;
    regularity: regularity;
    conjugations: Record<Tense, string[]>;
    reflexive: reflexive;
    participle: string;
    stem: string;
    constructor(infinitive:string,group:group = 'er',regularity:regularity = 'regular',reflexive:reflexive = 'non-reflexive') {
        this.infinitive = infinitive;
        this.group = group;
        this.regularity = regularity;
        this.reflexive = reflexive;
        this.participle = participle;
        this.stem = this.infinitive.slice(0,-2);
        this.conjugations = {
            'present': [],
            'futur simple': [],
            'imparfait': [],
            'passe compose': [],
            'futur anterieur': [],
            'plus-que-parfait': [],
            'subjonctif': [],
            'conditionnel': [],
            'conditionnel passe': []
        }
    }
}